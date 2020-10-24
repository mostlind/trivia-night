import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  json: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type Count = {
  __typename?: 'Count';
  value: Scalars['Int'];
};

export type InsertSingleTodoOutput = {
  __typename?: 'InsertSingleTodoOutput';
  id: Scalars['uuid'];
  todo_insert_single_todo?: Maybe<Todo>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type MyQueryOutput = {
  __typename?: 'MyQueryOutput';
  id: Scalars['uuid'];
};

export type SampleInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  accessToken: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "context" */
export type Context = {
  __typename?: 'context';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  todo_contexts: Array<Todo_Context>;
};


/** columns and relationships of "context" */
export type ContextTodo_ContextsArgs = {
  distinct_on?: Maybe<Array<Todo_Context_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Context_Order_By>>;
  where?: Maybe<Todo_Context_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "context". All fields are combined with a logical 'AND'. */
export type Context_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Context_Bool_Exp>>>;
  _not?: Maybe<Context_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Context_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  todo_contexts?: Maybe<Todo_Context_Bool_Exp>;
};

/** ordering options when selecting data from "context" */
export type Context_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "context" */
export type Context_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "context" */
export enum Context_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** input type for inserting array relation for remote table "frontend_metrics" */
export type Frontend_Metrics_Arr_Rel_Insert_Input = {
  data: Array<Frontend_Metrics_Insert_Input>;
};

/** input type for inserting data into table "frontend_metrics" */
export type Frontend_Metrics_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "frontend_metrics" */
export type Frontend_Metrics_Mutation_Response = {
  __typename?: 'frontend_metrics_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
};

/** input type for inserting object relation for remote table "frontend_metrics" */
export type Frontend_Metrics_Obj_Rel_Insert_Input = {
  data: Frontend_Metrics_Insert_Input;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** insert data into the table: "frontend_metrics" */
  insert_frontend_metrics?: Maybe<Frontend_Metrics_Mutation_Response>;
  /** perform the action: "insert_single_todo" */
  insert_single_todo?: Maybe<InsertSingleTodoOutput>;
  /** insert data into the table: "todo" */
  insert_todo?: Maybe<Todo_Mutation_Response>;
  /** insert a single row into the table: "todo" */
  insert_todo_one?: Maybe<Todo>;
  /** perform the action: "updateCount" */
  updateCount?: Maybe<Count>;
  /** update data of the table: "todo" */
  update_todo?: Maybe<Todo_Mutation_Response>;
  /** update single row of the table: "todo" */
  update_todo_by_pk?: Maybe<Todo>;
};


/** mutation root */
export type Mutation_RootInsert_Frontend_MetricsArgs = {
  objects: Array<Frontend_Metrics_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Single_TodoArgs = {
  description: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_TodoArgs = {
  objects: Array<Todo_Insert_Input>;
  on_conflict?: Maybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todo_OneArgs = {
  object: Todo_Insert_Input;
  on_conflict?: Maybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodoArgs = {
  _set?: Maybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_By_PkArgs = {
  _set?: Maybe<Todo_Set_Input>;
  pk_columns: Todo_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "priority" */
export type Priority = {
  __typename?: 'priority';
  priority: Scalars['String'];
  /** An array relationship */
  todos: Array<Todo>;
};


/** columns and relationships of "priority" */
export type PriorityTodosArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "priority". All fields are combined with a logical 'AND'. */
export type Priority_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Priority_Bool_Exp>>>;
  _not?: Maybe<Priority_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Priority_Bool_Exp>>>;
  priority?: Maybe<String_Comparison_Exp>;
  todos?: Maybe<Todo_Bool_Exp>;
};

export enum Priority_Enum {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  H = 'H',
  I = 'I',
  J = 'J',
  K = 'K',
  L = 'L',
  M = 'M',
  N = 'N',
  O = 'O',
  P = 'P',
  Q = 'Q',
  R = 'R',
  S = 'S',
  T = 'T',
  U = 'U',
  V = 'V',
  W = 'W',
  X = 'X',
  Y = 'Y',
  Z = 'Z'
}

/** expression to compare columns of type priority_enum. All fields are combined with logical 'AND'. */
export type Priority_Enum_Comparison_Exp = {
  _eq?: Maybe<Priority_Enum>;
  _in?: Maybe<Array<Priority_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Priority_Enum>;
  _nin?: Maybe<Array<Priority_Enum>>;
};

/** ordering options when selecting data from "priority" */
export type Priority_Order_By = {
  priority?: Maybe<Order_By>;
};

/** primary key columns input for table: "priority" */
export type Priority_Pk_Columns_Input = {
  priority: Scalars['String'];
};

/** select columns of table "priority" */
export enum Priority_Select_Column {
  /** column name */
  Priority = 'priority'
}

/** columns and relationships of "project" */
export type Project = {
  __typename?: 'project';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  todo_projects: Array<Todo_Project>;
};


/** columns and relationships of "project" */
export type ProjectTodo_ProjectsArgs = {
  distinct_on?: Maybe<Array<Todo_Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Project_Order_By>>;
  where?: Maybe<Todo_Project_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "project". All fields are combined with a logical 'AND'. */
export type Project_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Project_Bool_Exp>>>;
  _not?: Maybe<Project_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Project_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  todo_projects?: Maybe<Todo_Project_Bool_Exp>;
};

/** ordering options when selecting data from "project" */
export type Project_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "project" */
export type Project_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "project" */
export enum Project_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "context" */
  context: Array<Context>;
  /** fetch data from the table: "context" using primary key columns */
  context_by_pk?: Maybe<Context>;
  /** fetch data from the table: "priority" */
  priority: Array<Priority>;
  /** fetch data from the table: "priority" using primary key columns */
  priority_by_pk?: Maybe<Priority>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
  /** fetch data from the table: "todo_context" */
  todo_context: Array<Todo_Context>;
  /** fetch data from the table: "todo_context" using primary key columns */
  todo_context_by_pk?: Maybe<Todo_Context>;
  /** fetch data from the table: "todo_project" */
  todo_project: Array<Todo_Project>;
  /** fetch data from the table: "todo_project" using primary key columns */
  todo_project_by_pk?: Maybe<Todo_Project>;
};


/** query root */
export type Query_RootContextArgs = {
  distinct_on?: Maybe<Array<Context_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Context_Order_By>>;
  where?: Maybe<Context_Bool_Exp>;
};


/** query root */
export type Query_RootContext_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootPriorityArgs = {
  distinct_on?: Maybe<Array<Priority_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Priority_Order_By>>;
  where?: Maybe<Priority_Bool_Exp>;
};


/** query root */
export type Query_RootPriority_By_PkArgs = {
  priority: Scalars['String'];
};


/** query root */
export type Query_RootProjectArgs = {
  distinct_on?: Maybe<Array<Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Order_By>>;
  where?: Maybe<Project_Bool_Exp>;
};


/** query root */
export type Query_RootProject_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** query root */
export type Query_RootTodo_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootTodo_ContextArgs = {
  distinct_on?: Maybe<Array<Todo_Context_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Context_Order_By>>;
  where?: Maybe<Todo_Context_Bool_Exp>;
};


/** query root */
export type Query_RootTodo_Context_By_PkArgs = {
  context_id: Scalars['uuid'];
  todo_id: Scalars['uuid'];
};


/** query root */
export type Query_RootTodo_ProjectArgs = {
  distinct_on?: Maybe<Array<Todo_Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Project_Order_By>>;
  where?: Maybe<Todo_Project_Bool_Exp>;
};


/** query root */
export type Query_RootTodo_Project_By_PkArgs = {
  project_id: Scalars['uuid'];
  todo_id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "context" */
  context: Array<Context>;
  /** fetch data from the table: "context" using primary key columns */
  context_by_pk?: Maybe<Context>;
  /** fetch data from the table: "priority" */
  priority: Array<Priority>;
  /** fetch data from the table: "priority" using primary key columns */
  priority_by_pk?: Maybe<Priority>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
  /** fetch data from the table: "todo_context" */
  todo_context: Array<Todo_Context>;
  /** fetch data from the table: "todo_context" using primary key columns */
  todo_context_by_pk?: Maybe<Todo_Context>;
  /** fetch data from the table: "todo_project" */
  todo_project: Array<Todo_Project>;
  /** fetch data from the table: "todo_project" using primary key columns */
  todo_project_by_pk?: Maybe<Todo_Project>;
};


/** subscription root */
export type Subscription_RootContextArgs = {
  distinct_on?: Maybe<Array<Context_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Context_Order_By>>;
  where?: Maybe<Context_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContext_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootPriorityArgs = {
  distinct_on?: Maybe<Array<Priority_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Priority_Order_By>>;
  where?: Maybe<Priority_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPriority_By_PkArgs = {
  priority: Scalars['String'];
};


/** subscription root */
export type Subscription_RootProjectArgs = {
  distinct_on?: Maybe<Array<Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Order_By>>;
  where?: Maybe<Project_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProject_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodo_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootTodo_ContextArgs = {
  distinct_on?: Maybe<Array<Todo_Context_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Context_Order_By>>;
  where?: Maybe<Todo_Context_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodo_Context_By_PkArgs = {
  context_id: Scalars['uuid'];
  todo_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootTodo_ProjectArgs = {
  distinct_on?: Maybe<Array<Todo_Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Project_Order_By>>;
  where?: Maybe<Todo_Project_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodo_Project_By_PkArgs = {
  project_id: Scalars['uuid'];
  todo_id: Scalars['uuid'];
};


/** columns and relationships of "todo" */
export type Todo = {
  __typename?: 'todo';
  completed?: Maybe<Scalars['date']>;
  completely_useless: Scalars['String'];
  created?: Maybe<Scalars['date']>;
  description: Scalars['String'];
  id: Scalars['uuid'];
  is_complete: Scalars['Boolean'];
  priority?: Maybe<Priority_Enum>;
  /** An object relationship */
  priorityByPriority?: Maybe<Priority>;
  /** An array relationship */
  todo_contexts: Array<Todo_Context>;
  /** An array relationship */
  todo_projects: Array<Todo_Project>;
};


/** columns and relationships of "todo" */
export type TodoTodo_ContextsArgs = {
  distinct_on?: Maybe<Array<Todo_Context_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Context_Order_By>>;
  where?: Maybe<Todo_Context_Bool_Exp>;
};


/** columns and relationships of "todo" */
export type TodoTodo_ProjectsArgs = {
  distinct_on?: Maybe<Array<Todo_Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Project_Order_By>>;
  where?: Maybe<Todo_Project_Bool_Exp>;
};

/** input type for inserting array relation for remote table "todo" */
export type Todo_Arr_Rel_Insert_Input = {
  data: Array<Todo_Insert_Input>;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type Todo_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todo_Bool_Exp>>>;
  _not?: Maybe<Todo_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todo_Bool_Exp>>>;
  completed?: Maybe<Date_Comparison_Exp>;
  completely_useless?: Maybe<String_Comparison_Exp>;
  created?: Maybe<Date_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_complete?: Maybe<Boolean_Comparison_Exp>;
  priority?: Maybe<Priority_Enum_Comparison_Exp>;
  priorityByPriority?: Maybe<Priority_Bool_Exp>;
  todo_contexts?: Maybe<Todo_Context_Bool_Exp>;
  todo_projects?: Maybe<Todo_Project_Bool_Exp>;
};

/** unique or primary key constraints on table "todo" */
export enum Todo_Constraint {
  /** unique or primary key constraint */
  TodoPkey = 'todo_pkey'
}

/** columns and relationships of "todo_context" */
export type Todo_Context = {
  __typename?: 'todo_context';
  /** An object relationship */
  context: Context;
  context_id: Scalars['uuid'];
  /** An object relationship */
  todo: Todo;
  todo_id: Scalars['uuid'];
};

/** Boolean expression to filter rows from the table "todo_context". All fields are combined with a logical 'AND'. */
export type Todo_Context_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todo_Context_Bool_Exp>>>;
  _not?: Maybe<Todo_Context_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todo_Context_Bool_Exp>>>;
  context?: Maybe<Context_Bool_Exp>;
  context_id?: Maybe<Uuid_Comparison_Exp>;
  todo?: Maybe<Todo_Bool_Exp>;
  todo_id?: Maybe<Uuid_Comparison_Exp>;
};

/** ordering options when selecting data from "todo_context" */
export type Todo_Context_Order_By = {
  context?: Maybe<Context_Order_By>;
  context_id?: Maybe<Order_By>;
  todo?: Maybe<Todo_Order_By>;
  todo_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "todo_context" */
export type Todo_Context_Pk_Columns_Input = {
  context_id: Scalars['uuid'];
  todo_id: Scalars['uuid'];
};

/** select columns of table "todo_context" */
export enum Todo_Context_Select_Column {
  /** column name */
  ContextId = 'context_id',
  /** column name */
  TodoId = 'todo_id'
}

/** input type for inserting data into table "todo" */
export type Todo_Insert_Input = {
  description?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "todo" */
export type Todo_Mutation_Response = {
  __typename?: 'todo_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Todo>;
};

/** input type for inserting object relation for remote table "todo" */
export type Todo_Obj_Rel_Insert_Input = {
  data: Todo_Insert_Input;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

/** on conflict condition type for table "todo" */
export type Todo_On_Conflict = {
  constraint: Todo_Constraint;
  update_columns: Array<Todo_Update_Column>;
  where?: Maybe<Todo_Bool_Exp>;
};

/** ordering options when selecting data from "todo" */
export type Todo_Order_By = {
  completed?: Maybe<Order_By>;
  completely_useless?: Maybe<Order_By>;
  created?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_complete?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  priorityByPriority?: Maybe<Priority_Order_By>;
};

/** primary key columns input for table: "todo" */
export type Todo_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "todo_project" */
export type Todo_Project = {
  __typename?: 'todo_project';
  /** An object relationship */
  project: Project;
  project_id: Scalars['uuid'];
  /** An object relationship */
  todo: Todo;
  todo_id: Scalars['uuid'];
};

/** Boolean expression to filter rows from the table "todo_project". All fields are combined with a logical 'AND'. */
export type Todo_Project_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todo_Project_Bool_Exp>>>;
  _not?: Maybe<Todo_Project_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todo_Project_Bool_Exp>>>;
  project?: Maybe<Project_Bool_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
  todo?: Maybe<Todo_Bool_Exp>;
  todo_id?: Maybe<Uuid_Comparison_Exp>;
};

/** ordering options when selecting data from "todo_project" */
export type Todo_Project_Order_By = {
  project?: Maybe<Project_Order_By>;
  project_id?: Maybe<Order_By>;
  todo?: Maybe<Todo_Order_By>;
  todo_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "todo_project" */
export type Todo_Project_Pk_Columns_Input = {
  project_id: Scalars['uuid'];
  todo_id: Scalars['uuid'];
};

/** select columns of table "todo_project" */
export enum Todo_Project_Select_Column {
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  TodoId = 'todo_id'
}

/** select columns of table "todo" */
export enum Todo_Select_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CompletelyUseless = 'completely_useless',
  /** column name */
  Created = 'created',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsComplete = 'is_complete',
  /** column name */
  Priority = 'priority'
}

/** input type for updating data in table "todo" */
export type Todo_Set_Input = {
  completed?: Maybe<Scalars['date']>;
  created?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  is_complete?: Maybe<Scalars['Boolean']>;
  priority?: Maybe<Priority_Enum>;
};

/** update columns of table "todo" */
export enum Todo_Update_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  Created = 'created',
  /** column name */
  Description = 'description',
  /** column name */
  IsComplete = 'is_complete',
  /** column name */
  Priority = 'priority'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type InsertTodoMutationVariables = Exact<{
  todo: Todo_Insert_Input;
}>;


export type InsertTodoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_todo_one?: Maybe<(
    { __typename?: 'todo' }
    & Pick<Todo, 'description'>
  )> }
);

export type ProjectSummaryComponentFragment = (
  { __typename?: 'project' }
  & Pick<Project, 'id' | 'name'>
);

export type TodoListComponentFragment = (
  { __typename?: 'todo' }
  & TodoComponentFragment
);

export type TodoComponentFragment = (
  { __typename?: 'todo' }
  & Pick<Todo, 'id' | 'is_complete' | 'completed' | 'description' | 'created' | 'priority' | 'completely_useless'>
  & { todo_contexts: Array<(
    { __typename?: 'todo_context' }
    & { context: (
      { __typename?: 'context' }
      & Pick<Context, 'id' | 'name'>
    ) }
  )>, todo_projects: Array<(
    { __typename?: 'todo_project' }
    & { project: (
      { __typename?: 'project' }
      & Pick<Project, 'id' | 'name'>
    ) }
  )> }
);

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = (
  { __typename?: 'query_root' }
  & { todo: Array<(
    { __typename?: 'todo' }
    & TodoListComponentFragment
  )> }
);

export type ProjectPageQueryVariables = Exact<{
  projectId: Scalars['uuid'];
}>;


export type ProjectPageQuery = (
  { __typename?: 'query_root' }
  & { project_by_pk?: Maybe<(
    { __typename?: 'project' }
    & Pick<Project, 'id' | 'name'>
    & { todo_projects: Array<(
      { __typename?: 'todo_project' }
      & { todo: (
        { __typename?: 'todo' }
        & TodoListComponentFragment
      ) }
    )> }
  )> }
);

export type ProjectListPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectListPageQuery = (
  { __typename?: 'query_root' }
  & { project: Array<(
    { __typename?: 'project' }
    & Pick<Project, 'id' | 'name'>
    & { todo_projects: Array<(
      { __typename?: 'todo_project' }
      & { todo: (
        { __typename?: 'todo' }
        & TodoListComponentFragment
      ) }
    )> }
  )> }
);

export const ProjectSummaryComponentFragmentDoc = gql`
    fragment ProjectSummaryComponent on project {
  id
  name
}
    `;
export const TodoComponentFragmentDoc = gql`
    fragment TodoComponent on todo {
  id
  is_complete
  completed
  description
  created
  priority
  completely_useless
  todo_contexts {
    context {
      id
      name
    }
  }
  todo_projects {
    project {
      id
      name
    }
  }
}
    `;
export const TodoListComponentFragmentDoc = gql`
    fragment TodoListComponent on todo {
  ...TodoComponent
}
    ${TodoComponentFragmentDoc}`;
export const InsertTodoDocument = gql`
    mutation InsertTodo($todo: todo_insert_input!) {
  insert_todo_one(object: $todo) {
    description
  }
}
    `;

export function useInsertTodoMutation() {
  return Urql.useMutation<InsertTodoMutation, InsertTodoMutationVariables>(InsertTodoDocument);
};
export const IndexPageDocument = gql`
    query IndexPage {
  todo {
    ...TodoListComponent
  }
}
    ${TodoListComponentFragmentDoc}`;

export function useIndexPageQuery(options: Omit<Urql.UseQueryArgs<IndexPageQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<IndexPageQuery>({ query: IndexPageDocument, ...options });
};
export const ProjectPageDocument = gql`
    query ProjectPage($projectId: uuid!) {
  project_by_pk(id: $projectId) {
    id
    name
    todo_projects {
      todo {
        ...TodoListComponent
      }
    }
  }
}
    ${TodoListComponentFragmentDoc}`;

export function useProjectPageQuery(options: Omit<Urql.UseQueryArgs<ProjectPageQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProjectPageQuery>({ query: ProjectPageDocument, ...options });
};
export const ProjectListPageDocument = gql`
    query ProjectListPage {
  project {
    id
    name
    todo_projects {
      todo {
        ...TodoListComponent
      }
    }
  }
}
    ${TodoListComponentFragmentDoc}`;

export function useProjectListPageQuery(options: Omit<Urql.UseQueryArgs<ProjectListPageQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProjectListPageQuery>({ query: ProjectListPageDocument, ...options });
};