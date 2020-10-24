package insertsingletodo

type Uuid string

type MyQueryOutput struct {
	Id Uuid
}

type SampleOutput struct {
	AccessToken string
}

type Count struct {
	Value int
}

type InsertSingleTodoOutput struct {
	Id Uuid `json:"id"`
}

type SampleInput struct {
	Username string
	Password string
}

type Mutation struct {
	Insert_single_todo *InsertSingleTodoOutput
	UpdateCount        *Count
}

type insert_single_todoArgs struct {
	Description string `json:"description"`
}

type updateCountArgs struct {
}
