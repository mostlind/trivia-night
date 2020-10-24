package updatecount

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
)

type actionPayload struct {
	SessionVariables map[string]interface{} `json:"session_variables"`
	Input            updateCountArgs        `json:"input"`
}

type graphQLError struct {
	Message string `json:"message"`
}

// Handler handles the updating of counts
func Handler(w http.ResponseWriter, r *http.Request) {

	// set the response header as JSON
	w.Header().Set("Content-Type", "application/json")

	// read request body
	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "invalid payload", http.StatusBadRequest)
		return
	}

	// parse the body as action payload
	var payload actionPayload
	err = json.Unmarshal(reqBody, &payload)
	if err != nil {
		http.Error(w, "invalid payload", http.StatusBadRequest)
		return
	}

	// Send the request params to the Action's generated handler function
	result, err := updateCount(payload.Input)

	// throw if an error happens
	if err != nil {
		errorObject := graphQLError{
			Message: err.Error(),
		}
		errorBody, _ := json.Marshal(errorObject)
		w.WriteHeader(http.StatusBadRequest)
		w.Write(errorBody)
		return
	}

	// Write the response as JSON
	data, _ := json.Marshal(result)
	w.Write(data)

}

// Auto-generated function that takes the Action parameters and must return it's response type
func updateCount(args updateCountArgs) (response count, err error) {
	response = count{
		Value: 1111,
	}
	return response, nil
}

// Generated Types
type count struct {
	Value int `json:"value"`
}

type updateCountArgs struct {
}
