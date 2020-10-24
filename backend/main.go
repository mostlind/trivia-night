package main

import (
	"fmt"
	"net/http"
	"todo_txt_backend/auth"
	"todo_txt_backend/insertsingletodo"
	"todo_txt_backend/updatecount"
)

func main() {
	http.HandleFunc("/auth", auth.Handler)
	http.HandleFunc("/update-count", updatecount.Handler)
	http.HandleFunc("/insert-todo", insertsingletodo.Handler)
	fmt.Println("Starting server...")
	http.ListenAndServe(":3001", nil)
}
