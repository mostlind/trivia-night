package insertsingletodo

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"
)

type ActionPayload struct {
	SessionVariables map[string]interface{} `json:"session_variables"`
	Input            insert_single_todoArgs `json:"input"`
}

type GraphQLError struct {
	Message string `json:"message"`
}

type GraphQLRequest struct {
	Query     string                 `json:"query"`
	Variables insert_single_todoArgs `json:"variables"`
}
type GraphQLData struct {
	Insert_todo_one InsertSingleTodoOutput `json:"insert_todo_one"`
}
type GraphQLResponse struct {
	Data   GraphQLData    `json:"data,omitempty"`
	Errors []GraphQLError `json:"errors,omitempty"`
}

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
	var actionPayload ActionPayload
	err = json.Unmarshal(reqBody, &actionPayload)
	if err != nil {
		http.Error(w, "invalid payload", http.StatusBadRequest)
		return
	}

	token := r.Header.Get("Authorization")

	// Send the request params to the Action's generated handler function
	result, err := insertSingleTodo(actionPayload.Input, token)

	// throw if an error happens
	if err != nil {
		errorObject := GraphQLError{
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
func insertSingleTodo(args insert_single_todoArgs, token string) (response InsertSingleTodoOutput, err error) {

	hasuraResponse, err := execute(args, token)

	// throw if any unexpected error happens
	if err != nil {
		return
	}

	// delegate Hasura error
	if len(hasuraResponse.Errors) != 0 {
		err = errors.New(hasuraResponse.Errors[0].Message)
		return
	}

	response = hasuraResponse.Data.Insert_todo_one
	return

}
func execute(variables insert_single_todoArgs, token string) (response GraphQLResponse, err error) {

	// build the request body
	reqBody := GraphQLRequest{
		Query:     "mutation insert_single_todo($description:String!) {   insert_todo_one(object: {description: $description}) {     id   } }",
		Variables: variables,
	}
	reqBytes, err := json.Marshal(reqBody)
	if err != nil {
		return
	}

	req, err := http.NewRequest("POST", "http://todo-txt-hasura:8080/v1/graphql", bytes.NewBuffer(reqBytes))
	if err != nil {
		return
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", token)
	fmt.Println(token)

	// make request to Hasura
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return
	}

	// parse the response
	respBytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return
	}
	err = json.Unmarshal(respBytes, &response)
	if err != nil {
		return
	}

	// return the response
	return
}
