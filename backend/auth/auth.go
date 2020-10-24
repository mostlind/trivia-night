package auth

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"strings"
)

type hasuraSessionVariables struct {
	HasuraUserID string `json:"X-Hasura-User-Id"`
	HasuraRole   string `json:"X-Hasura-Role"`
}

type requestHeadersBody struct {
	Authorization string `json:"Authorization"`
}

type request struct {
	Headers requestHeadersBody `json:"headers"`
}

// Handler handles auth
// https://thenewstack.io/make-a-restful-json-api-go/
func Handler(w http.ResponseWriter, req *http.Request) {
	var requestBody request
	body, err := ioutil.ReadAll(io.LimitReader(req.Body, 1048576))
	if err != nil {
		panic(err)
	}
	if err := req.Body.Close(); err != nil {
		panic(err)
	}
	if err := json.Unmarshal(body, &requestBody); err != nil {
		w.Header().Set("Content-Type", "application/json; charset=UTF-8")
		w.WriteHeader(http.StatusUnprocessableEntity)
		if err := json.NewEncoder(w).Encode(err); err != nil {
			panic(err)
		}
	}

	header := requestBody.Headers.Authorization
	parts := strings.Split(header, " ")
	if len(parts) != 3 {
		w.WriteHeader(http.StatusForbidden)
		return
	}
	vars := hasuraSessionVariables{
		HasuraRole:   parts[1],
		HasuraUserID: parts[2],
	}

	fmt.Print(vars)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(vars)
}
