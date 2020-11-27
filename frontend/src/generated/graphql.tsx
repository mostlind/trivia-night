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

export type CreateGameStateInput = {
  game_id: Scalars['uuid'];
};

export type CreateGameStateOutput = {
  __typename?: 'CreateGameStateOutput';
  game_state?: Maybe<Game_State>;
  game_state_id: Scalars['uuid'];
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

export type StartGameInput = {
  game_id: Scalars['uuid'];
};

export type StartGameOutput = {
  __typename?: 'StartGameOutput';
  id: Scalars['uuid'];
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

/**
 * A team's answer to a question
 * 
 * 
 * columns and relationships of "answer"
 */
export type Answer = {
  __typename?: 'answer';
  correct?: Maybe<Scalars['Boolean']>;
  id: Scalars['uuid'];
  /** An object relationship */
  question_state: Question_State;
  question_state_id: Scalars['uuid'];
  /** An object relationship */
  team: Team;
  team_id: Scalars['uuid'];
  value: Scalars['String'];
};

/** aggregated selection of "answer" */
export type Answer_Aggregate = {
  __typename?: 'answer_aggregate';
  aggregate?: Maybe<Answer_Aggregate_Fields>;
  nodes: Array<Answer>;
};

/** aggregate fields of "answer" */
export type Answer_Aggregate_Fields = {
  __typename?: 'answer_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Answer_Max_Fields>;
  min?: Maybe<Answer_Min_Fields>;
};


/** aggregate fields of "answer" */
export type Answer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Answer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "answer" */
export type Answer_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Answer_Max_Order_By>;
  min?: Maybe<Answer_Min_Order_By>;
};

/** input type for inserting array relation for remote table "answer" */
export type Answer_Arr_Rel_Insert_Input = {
  data: Array<Answer_Insert_Input>;
  on_conflict?: Maybe<Answer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "answer". All fields are combined with a logical 'AND'. */
export type Answer_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Answer_Bool_Exp>>>;
  _not?: Maybe<Answer_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Answer_Bool_Exp>>>;
  correct?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  question_state?: Maybe<Question_State_Bool_Exp>;
  question_state_id?: Maybe<Uuid_Comparison_Exp>;
  team?: Maybe<Team_Bool_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "answer" */
export enum Answer_Constraint {
  /** unique or primary key constraint */
  AnswerPkey = 'answer_pkey',
  /** unique or primary key constraint */
  AnswerTeamIdQuestionStateIdKey = 'answer_team_id_question_state_id_key'
}

/** input type for inserting data into table "answer" */
export type Answer_Insert_Input = {
  correct?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  question_state?: Maybe<Question_State_Obj_Rel_Insert_Input>;
  question_state_id?: Maybe<Scalars['uuid']>;
  team?: Maybe<Team_Obj_Rel_Insert_Input>;
  team_id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Answer_Max_Fields = {
  __typename?: 'answer_max_fields';
  id?: Maybe<Scalars['uuid']>;
  question_state_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "answer" */
export type Answer_Max_Order_By = {
  id?: Maybe<Order_By>;
  question_state_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Answer_Min_Fields = {
  __typename?: 'answer_min_fields';
  id?: Maybe<Scalars['uuid']>;
  question_state_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "answer" */
export type Answer_Min_Order_By = {
  id?: Maybe<Order_By>;
  question_state_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "answer" */
export type Answer_Mutation_Response = {
  __typename?: 'answer_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Answer>;
};

/** input type for inserting object relation for remote table "answer" */
export type Answer_Obj_Rel_Insert_Input = {
  data: Answer_Insert_Input;
  on_conflict?: Maybe<Answer_On_Conflict>;
};

/** on conflict condition type for table "answer" */
export type Answer_On_Conflict = {
  constraint: Answer_Constraint;
  update_columns: Array<Answer_Update_Column>;
  where?: Maybe<Answer_Bool_Exp>;
};

/** ordering options when selecting data from "answer" */
export type Answer_Order_By = {
  correct?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  question_state?: Maybe<Question_State_Order_By>;
  question_state_id?: Maybe<Order_By>;
  team?: Maybe<Team_Order_By>;
  team_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "answer" */
export type Answer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "answer" */
export enum Answer_Select_Column {
  /** column name */
  Correct = 'correct',
  /** column name */
  Id = 'id',
  /** column name */
  QuestionStateId = 'question_state_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "answer" */
export type Answer_Set_Input = {
  correct?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  question_state_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "answer" */
export enum Answer_Update_Column {
  /** column name */
  Correct = 'correct',
  /** column name */
  Id = 'id',
  /** column name */
  QuestionStateId = 'question_state_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  Value = 'value'
}

/**
 * A game belonging to a host
 * 
 * 
 * columns and relationships of "game"
 */
export type Game = {
  __typename?: 'game';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  game_states: Array<Game_State>;
  /** An aggregated array relationship */
  game_states_aggregate: Game_State_Aggregate;
  /** An object relationship */
  host: Host;
  host_id: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  questions: Array<Question>;
  /** An aggregated array relationship */
  questions_aggregate: Question_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/**
 * A game belonging to a host
 * 
 * 
 * columns and relationships of "game"
 */
export type GameGame_StatesArgs = {
  distinct_on?: Maybe<Array<Game_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_State_Order_By>>;
  where?: Maybe<Game_State_Bool_Exp>;
};


/**
 * A game belonging to a host
 * 
 * 
 * columns and relationships of "game"
 */
export type GameGame_States_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_State_Order_By>>;
  where?: Maybe<Game_State_Bool_Exp>;
};


/**
 * A game belonging to a host
 * 
 * 
 * columns and relationships of "game"
 */
export type GameQuestionsArgs = {
  distinct_on?: Maybe<Array<Question_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Order_By>>;
  where?: Maybe<Question_Bool_Exp>;
};


/**
 * A game belonging to a host
 * 
 * 
 * columns and relationships of "game"
 */
export type GameQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Order_By>>;
  where?: Maybe<Question_Bool_Exp>;
};

/** aggregated selection of "game" */
export type Game_Aggregate = {
  __typename?: 'game_aggregate';
  aggregate?: Maybe<Game_Aggregate_Fields>;
  nodes: Array<Game>;
};

/** aggregate fields of "game" */
export type Game_Aggregate_Fields = {
  __typename?: 'game_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Game_Max_Fields>;
  min?: Maybe<Game_Min_Fields>;
};


/** aggregate fields of "game" */
export type Game_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Game_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game" */
export type Game_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Game_Max_Order_By>;
  min?: Maybe<Game_Min_Order_By>;
};

/** input type for inserting array relation for remote table "game" */
export type Game_Arr_Rel_Insert_Input = {
  data: Array<Game_Insert_Input>;
  on_conflict?: Maybe<Game_On_Conflict>;
};

/** Boolean expression to filter rows from the table "game". All fields are combined with a logical 'AND'. */
export type Game_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Game_Bool_Exp>>>;
  _not?: Maybe<Game_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Game_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  game_states?: Maybe<Game_State_Bool_Exp>;
  host?: Maybe<Host_Bool_Exp>;
  host_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  questions?: Maybe<Question_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "game" */
export enum Game_Constraint {
  /** unique or primary key constraint */
  GamePkey = 'game_pkey'
}

/** input type for inserting data into table "game" */
export type Game_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game_states?: Maybe<Game_State_Arr_Rel_Insert_Input>;
  host?: Maybe<Host_Obj_Rel_Insert_Input>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  questions?: Maybe<Question_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Game_Max_Fields = {
  __typename?: 'game_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "game" */
export type Game_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  host_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Min_Fields = {
  __typename?: 'game_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "game" */
export type Game_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  host_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "game" */
export type Game_Mutation_Response = {
  __typename?: 'game_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Game>;
};

/** input type for inserting object relation for remote table "game" */
export type Game_Obj_Rel_Insert_Input = {
  data: Game_Insert_Input;
  on_conflict?: Maybe<Game_On_Conflict>;
};

/** on conflict condition type for table "game" */
export type Game_On_Conflict = {
  constraint: Game_Constraint;
  update_columns: Array<Game_Update_Column>;
  where?: Maybe<Game_Bool_Exp>;
};

/** ordering options when selecting data from "game" */
export type Game_Order_By = {
  created_at?: Maybe<Order_By>;
  game_states_aggregate?: Maybe<Game_State_Aggregate_Order_By>;
  host?: Maybe<Host_Order_By>;
  host_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  questions_aggregate?: Maybe<Question_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "game" */
export type Game_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "game" */
export enum Game_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HostId = 'host_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "game" */
export type Game_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  host_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "game_state" */
export type Game_State = {
  __typename?: 'game_state';
  /** An object relationship */
  current_question?: Maybe<Question_State>;
  current_question_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  game: Game;
  game_id: Scalars['uuid'];
  /** An object relationship */
  game_state_enum: Game_State_Enum;
  id: Scalars['uuid'];
  /** An array relationship */
  question_states: Array<Question_State>;
  /** An aggregated array relationship */
  question_states_aggregate: Question_State_Aggregate;
  state: Game_State_Enum_Enum;
  /** An array relationship */
  teams: Array<Team>;
  /** An aggregated array relationship */
  teams_aggregate: Team_Aggregate;
};


/** columns and relationships of "game_state" */
export type Game_StateQuestion_StatesArgs = {
  distinct_on?: Maybe<Array<Question_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_State_Order_By>>;
  where?: Maybe<Question_State_Bool_Exp>;
};


/** columns and relationships of "game_state" */
export type Game_StateQuestion_States_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_State_Order_By>>;
  where?: Maybe<Question_State_Bool_Exp>;
};


/** columns and relationships of "game_state" */
export type Game_StateTeamsArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


/** columns and relationships of "game_state" */
export type Game_StateTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};

/** aggregated selection of "game_state" */
export type Game_State_Aggregate = {
  __typename?: 'game_state_aggregate';
  aggregate?: Maybe<Game_State_Aggregate_Fields>;
  nodes: Array<Game_State>;
};

/** aggregate fields of "game_state" */
export type Game_State_Aggregate_Fields = {
  __typename?: 'game_state_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Game_State_Max_Fields>;
  min?: Maybe<Game_State_Min_Fields>;
};


/** aggregate fields of "game_state" */
export type Game_State_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Game_State_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game_state" */
export type Game_State_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Game_State_Max_Order_By>;
  min?: Maybe<Game_State_Min_Order_By>;
};

/** input type for inserting array relation for remote table "game_state" */
export type Game_State_Arr_Rel_Insert_Input = {
  data: Array<Game_State_Insert_Input>;
  on_conflict?: Maybe<Game_State_On_Conflict>;
};

/** Boolean expression to filter rows from the table "game_state". All fields are combined with a logical 'AND'. */
export type Game_State_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Game_State_Bool_Exp>>>;
  _not?: Maybe<Game_State_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Game_State_Bool_Exp>>>;
  current_question?: Maybe<Question_State_Bool_Exp>;
  current_question_id?: Maybe<Uuid_Comparison_Exp>;
  game?: Maybe<Game_Bool_Exp>;
  game_id?: Maybe<Uuid_Comparison_Exp>;
  game_state_enum?: Maybe<Game_State_Enum_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  question_states?: Maybe<Question_State_Bool_Exp>;
  state?: Maybe<Game_State_Enum_Enum_Comparison_Exp>;
  teams?: Maybe<Team_Bool_Exp>;
};

/** unique or primary key constraints on table "game_state" */
export enum Game_State_Constraint {
  /** unique or primary key constraint */
  GameStatePkey = 'game_state_pkey'
}

/** columns and relationships of "game_state_enum" */
export type Game_State_Enum = {
  __typename?: 'game_state_enum';
  /** An array relationship */
  game_states: Array<Game_State>;
  /** An aggregated array relationship */
  game_states_aggregate: Game_State_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "game_state_enum" */
export type Game_State_EnumGame_StatesArgs = {
  distinct_on?: Maybe<Array<Game_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_State_Order_By>>;
  where?: Maybe<Game_State_Bool_Exp>;
};


/** columns and relationships of "game_state_enum" */
export type Game_State_EnumGame_States_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_State_Order_By>>;
  where?: Maybe<Game_State_Bool_Exp>;
};

/** aggregated selection of "game_state_enum" */
export type Game_State_Enum_Aggregate = {
  __typename?: 'game_state_enum_aggregate';
  aggregate?: Maybe<Game_State_Enum_Aggregate_Fields>;
  nodes: Array<Game_State_Enum>;
};

/** aggregate fields of "game_state_enum" */
export type Game_State_Enum_Aggregate_Fields = {
  __typename?: 'game_state_enum_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Game_State_Enum_Max_Fields>;
  min?: Maybe<Game_State_Enum_Min_Fields>;
};


/** aggregate fields of "game_state_enum" */
export type Game_State_Enum_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Game_State_Enum_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game_state_enum" */
export type Game_State_Enum_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Game_State_Enum_Max_Order_By>;
  min?: Maybe<Game_State_Enum_Min_Order_By>;
};

/** input type for inserting array relation for remote table "game_state_enum" */
export type Game_State_Enum_Arr_Rel_Insert_Input = {
  data: Array<Game_State_Enum_Insert_Input>;
  on_conflict?: Maybe<Game_State_Enum_On_Conflict>;
};

/** Boolean expression to filter rows from the table "game_state_enum". All fields are combined with a logical 'AND'. */
export type Game_State_Enum_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Game_State_Enum_Bool_Exp>>>;
  _not?: Maybe<Game_State_Enum_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Game_State_Enum_Bool_Exp>>>;
  game_states?: Maybe<Game_State_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_state_enum" */
export enum Game_State_Enum_Constraint {
  /** unique or primary key constraint */
  GameStateEnumPkey = 'game_state_enum_pkey'
}

export enum Game_State_Enum_Enum {
  Ended = 'ended',
  NotStarted = 'not_started',
  Ongoing = 'ongoing'
}

/** expression to compare columns of type game_state_enum_enum. All fields are combined with logical 'AND'. */
export type Game_State_Enum_Enum_Comparison_Exp = {
  _eq?: Maybe<Game_State_Enum_Enum>;
  _in?: Maybe<Array<Game_State_Enum_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Game_State_Enum_Enum>;
  _nin?: Maybe<Array<Game_State_Enum_Enum>>;
};

/** input type for inserting data into table "game_state_enum" */
export type Game_State_Enum_Insert_Input = {
  game_states?: Maybe<Game_State_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Game_State_Enum_Max_Fields = {
  __typename?: 'game_state_enum_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "game_state_enum" */
export type Game_State_Enum_Max_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Game_State_Enum_Min_Fields = {
  __typename?: 'game_state_enum_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "game_state_enum" */
export type Game_State_Enum_Min_Order_By = {
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "game_state_enum" */
export type Game_State_Enum_Mutation_Response = {
  __typename?: 'game_state_enum_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Game_State_Enum>;
};

/** input type for inserting object relation for remote table "game_state_enum" */
export type Game_State_Enum_Obj_Rel_Insert_Input = {
  data: Game_State_Enum_Insert_Input;
  on_conflict?: Maybe<Game_State_Enum_On_Conflict>;
};

/** on conflict condition type for table "game_state_enum" */
export type Game_State_Enum_On_Conflict = {
  constraint: Game_State_Enum_Constraint;
  update_columns: Array<Game_State_Enum_Update_Column>;
  where?: Maybe<Game_State_Enum_Bool_Exp>;
};

/** ordering options when selecting data from "game_state_enum" */
export type Game_State_Enum_Order_By = {
  game_states_aggregate?: Maybe<Game_State_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "game_state_enum" */
export type Game_State_Enum_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "game_state_enum" */
export enum Game_State_Enum_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "game_state_enum" */
export type Game_State_Enum_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "game_state_enum" */
export enum Game_State_Enum_Update_Column {
  /** column name */
  Value = 'value'
}

/** input type for inserting data into table "game_state" */
export type Game_State_Insert_Input = {
  current_question?: Maybe<Question_State_Obj_Rel_Insert_Input>;
  current_question_id?: Maybe<Scalars['uuid']>;
  game?: Maybe<Game_Obj_Rel_Insert_Input>;
  game_id?: Maybe<Scalars['uuid']>;
  game_state_enum?: Maybe<Game_State_Enum_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  question_states?: Maybe<Question_State_Arr_Rel_Insert_Input>;
  state?: Maybe<Game_State_Enum_Enum>;
  teams?: Maybe<Team_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Game_State_Max_Fields = {
  __typename?: 'game_state_max_fields';
  current_question_id?: Maybe<Scalars['uuid']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "game_state" */
export type Game_State_Max_Order_By = {
  current_question_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Game_State_Min_Fields = {
  __typename?: 'game_state_min_fields';
  current_question_id?: Maybe<Scalars['uuid']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "game_state" */
export type Game_State_Min_Order_By = {
  current_question_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "game_state" */
export type Game_State_Mutation_Response = {
  __typename?: 'game_state_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Game_State>;
};

/** input type for inserting object relation for remote table "game_state" */
export type Game_State_Obj_Rel_Insert_Input = {
  data: Game_State_Insert_Input;
  on_conflict?: Maybe<Game_State_On_Conflict>;
};

/** on conflict condition type for table "game_state" */
export type Game_State_On_Conflict = {
  constraint: Game_State_Constraint;
  update_columns: Array<Game_State_Update_Column>;
  where?: Maybe<Game_State_Bool_Exp>;
};

/** ordering options when selecting data from "game_state" */
export type Game_State_Order_By = {
  current_question?: Maybe<Question_State_Order_By>;
  current_question_id?: Maybe<Order_By>;
  game?: Maybe<Game_Order_By>;
  game_id?: Maybe<Order_By>;
  game_state_enum?: Maybe<Game_State_Enum_Order_By>;
  id?: Maybe<Order_By>;
  question_states_aggregate?: Maybe<Question_State_Aggregate_Order_By>;
  state?: Maybe<Order_By>;
  teams_aggregate?: Maybe<Team_Aggregate_Order_By>;
};

/** primary key columns input for table: "game_state" */
export type Game_State_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "game_state" */
export enum Game_State_Select_Column {
  /** column name */
  CurrentQuestionId = 'current_question_id',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  State = 'state'
}

/** input type for updating data in table "game_state" */
export type Game_State_Set_Input = {
  current_question_id?: Maybe<Scalars['uuid']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  state?: Maybe<Game_State_Enum_Enum>;
};

/** update columns of table "game_state" */
export enum Game_State_Update_Column {
  /** column name */
  CurrentQuestionId = 'current_question_id',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  State = 'state'
}

/** update columns of table "game" */
export enum Game_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HostId = 'host_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/**
 * A trivia night host
 * 
 * 
 * columns and relationships of "host"
 */
export type Host = {
  __typename?: 'host';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  games: Array<Game>;
  /** An aggregated array relationship */
  games_aggregate: Game_Aggregate;
  id: Scalars['uuid'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/**
 * A trivia night host
 * 
 * 
 * columns and relationships of "host"
 */
export type HostGamesArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


/**
 * A trivia night host
 * 
 * 
 * columns and relationships of "host"
 */
export type HostGames_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};

/** aggregated selection of "host" */
export type Host_Aggregate = {
  __typename?: 'host_aggregate';
  aggregate?: Maybe<Host_Aggregate_Fields>;
  nodes: Array<Host>;
};

/** aggregate fields of "host" */
export type Host_Aggregate_Fields = {
  __typename?: 'host_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Host_Max_Fields>;
  min?: Maybe<Host_Min_Fields>;
};


/** aggregate fields of "host" */
export type Host_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Host_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "host" */
export type Host_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Host_Max_Order_By>;
  min?: Maybe<Host_Min_Order_By>;
};

/** input type for inserting array relation for remote table "host" */
export type Host_Arr_Rel_Insert_Input = {
  data: Array<Host_Insert_Input>;
  on_conflict?: Maybe<Host_On_Conflict>;
};

/** Boolean expression to filter rows from the table "host". All fields are combined with a logical 'AND'. */
export type Host_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Host_Bool_Exp>>>;
  _not?: Maybe<Host_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Host_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  games?: Maybe<Game_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "host" */
export enum Host_Constraint {
  /** unique or primary key constraint */
  HostPkey = 'host_pkey'
}

/** input type for inserting data into table "host" */
export type Host_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  games?: Maybe<Game_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Host_Max_Fields = {
  __typename?: 'host_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "host" */
export type Host_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Host_Min_Fields = {
  __typename?: 'host_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "host" */
export type Host_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "host" */
export type Host_Mutation_Response = {
  __typename?: 'host_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Host>;
};

/** input type for inserting object relation for remote table "host" */
export type Host_Obj_Rel_Insert_Input = {
  data: Host_Insert_Input;
  on_conflict?: Maybe<Host_On_Conflict>;
};

/** on conflict condition type for table "host" */
export type Host_On_Conflict = {
  constraint: Host_Constraint;
  update_columns: Array<Host_Update_Column>;
  where?: Maybe<Host_Bool_Exp>;
};

/** ordering options when selecting data from "host" */
export type Host_Order_By = {
  created_at?: Maybe<Order_By>;
  games_aggregate?: Maybe<Game_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "host" */
export type Host_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "host" */
export enum Host_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "host" */
export type Host_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "host" */
export enum Host_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "answer" */
  delete_answer?: Maybe<Answer_Mutation_Response>;
  /** delete single row from the table: "answer" */
  delete_answer_by_pk?: Maybe<Answer>;
  /** delete data from the table: "game" */
  delete_game?: Maybe<Game_Mutation_Response>;
  /** delete single row from the table: "game" */
  delete_game_by_pk?: Maybe<Game>;
  /** delete data from the table: "game_state" */
  delete_game_state?: Maybe<Game_State_Mutation_Response>;
  /** delete single row from the table: "game_state" */
  delete_game_state_by_pk?: Maybe<Game_State>;
  /** delete data from the table: "game_state_enum" */
  delete_game_state_enum?: Maybe<Game_State_Enum_Mutation_Response>;
  /** delete single row from the table: "game_state_enum" */
  delete_game_state_enum_by_pk?: Maybe<Game_State_Enum>;
  /** delete data from the table: "host" */
  delete_host?: Maybe<Host_Mutation_Response>;
  /** delete single row from the table: "host" */
  delete_host_by_pk?: Maybe<Host>;
  /** delete data from the table: "question" */
  delete_question?: Maybe<Question_Mutation_Response>;
  /** delete single row from the table: "question" */
  delete_question_by_pk?: Maybe<Question>;
  /** delete data from the table: "question_state" */
  delete_question_state?: Maybe<Question_State_Mutation_Response>;
  /** delete single row from the table: "question_state" */
  delete_question_state_by_pk?: Maybe<Question_State>;
  /** delete data from the table: "question_state_enum" */
  delete_question_state_enum?: Maybe<Question_State_Enum_Mutation_Response>;
  /** delete single row from the table: "question_state_enum" */
  delete_question_state_enum_by_pk?: Maybe<Question_State_Enum>;
  /** delete data from the table: "team" */
  delete_team?: Maybe<Team_Mutation_Response>;
  /** delete single row from the table: "team" */
  delete_team_by_pk?: Maybe<Team>;
  /** insert data into the table: "answer" */
  insert_answer?: Maybe<Answer_Mutation_Response>;
  /** insert a single row into the table: "answer" */
  insert_answer_one?: Maybe<Answer>;
  /** insert data into the table: "game" */
  insert_game?: Maybe<Game_Mutation_Response>;
  /** insert a single row into the table: "game" */
  insert_game_one?: Maybe<Game>;
  /** insert data into the table: "game_state" */
  insert_game_state?: Maybe<Game_State_Mutation_Response>;
  /** insert data into the table: "game_state_enum" */
  insert_game_state_enum?: Maybe<Game_State_Enum_Mutation_Response>;
  /** insert a single row into the table: "game_state_enum" */
  insert_game_state_enum_one?: Maybe<Game_State_Enum>;
  /** insert a single row into the table: "game_state" */
  insert_game_state_one?: Maybe<Game_State>;
  /** insert data into the table: "host" */
  insert_host?: Maybe<Host_Mutation_Response>;
  /** insert a single row into the table: "host" */
  insert_host_one?: Maybe<Host>;
  /** insert data into the table: "question" */
  insert_question?: Maybe<Question_Mutation_Response>;
  /** insert a single row into the table: "question" */
  insert_question_one?: Maybe<Question>;
  /** insert data into the table: "question_state" */
  insert_question_state?: Maybe<Question_State_Mutation_Response>;
  /** insert data into the table: "question_state_enum" */
  insert_question_state_enum?: Maybe<Question_State_Enum_Mutation_Response>;
  /** insert a single row into the table: "question_state_enum" */
  insert_question_state_enum_one?: Maybe<Question_State_Enum>;
  /** insert a single row into the table: "question_state" */
  insert_question_state_one?: Maybe<Question_State>;
  /** insert data into the table: "team" */
  insert_team?: Maybe<Team_Mutation_Response>;
  /** insert a single row into the table: "team" */
  insert_team_one?: Maybe<Team>;
  /** perform the action: "start_game" */
  start_game?: Maybe<CreateGameStateOutput>;
  /** update data of the table: "answer" */
  update_answer?: Maybe<Answer_Mutation_Response>;
  /** update single row of the table: "answer" */
  update_answer_by_pk?: Maybe<Answer>;
  /** update data of the table: "game" */
  update_game?: Maybe<Game_Mutation_Response>;
  /** update single row of the table: "game" */
  update_game_by_pk?: Maybe<Game>;
  /** update data of the table: "game_state" */
  update_game_state?: Maybe<Game_State_Mutation_Response>;
  /** update single row of the table: "game_state" */
  update_game_state_by_pk?: Maybe<Game_State>;
  /** update data of the table: "game_state_enum" */
  update_game_state_enum?: Maybe<Game_State_Enum_Mutation_Response>;
  /** update single row of the table: "game_state_enum" */
  update_game_state_enum_by_pk?: Maybe<Game_State_Enum>;
  /** update data of the table: "host" */
  update_host?: Maybe<Host_Mutation_Response>;
  /** update single row of the table: "host" */
  update_host_by_pk?: Maybe<Host>;
  /** update data of the table: "question" */
  update_question?: Maybe<Question_Mutation_Response>;
  /** update single row of the table: "question" */
  update_question_by_pk?: Maybe<Question>;
  /** update data of the table: "question_state" */
  update_question_state?: Maybe<Question_State_Mutation_Response>;
  /** update single row of the table: "question_state" */
  update_question_state_by_pk?: Maybe<Question_State>;
  /** update data of the table: "question_state_enum" */
  update_question_state_enum?: Maybe<Question_State_Enum_Mutation_Response>;
  /** update single row of the table: "question_state_enum" */
  update_question_state_enum_by_pk?: Maybe<Question_State_Enum>;
  /** update data of the table: "team" */
  update_team?: Maybe<Team_Mutation_Response>;
  /** update single row of the table: "team" */
  update_team_by_pk?: Maybe<Team>;
};


/** mutation root */
export type Mutation_RootDelete_AnswerArgs = {
  where: Answer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Answer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GameArgs = {
  where: Game_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Game_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Game_StateArgs = {
  where: Game_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Game_State_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Game_State_EnumArgs = {
  where: Game_State_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Game_State_Enum_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_HostArgs = {
  where: Host_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Host_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_QuestionArgs = {
  where: Question_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Question_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Question_StateArgs = {
  where: Question_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Question_State_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Question_State_EnumArgs = {
  where: Question_State_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Question_State_Enum_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TeamArgs = {
  where: Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Team_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AnswerArgs = {
  objects: Array<Answer_Insert_Input>;
  on_conflict?: Maybe<Answer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Answer_OneArgs = {
  object: Answer_Insert_Input;
  on_conflict?: Maybe<Answer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameArgs = {
  objects: Array<Game_Insert_Input>;
  on_conflict?: Maybe<Game_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_OneArgs = {
  object: Game_Insert_Input;
  on_conflict?: Maybe<Game_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_StateArgs = {
  objects: Array<Game_State_Insert_Input>;
  on_conflict?: Maybe<Game_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_State_EnumArgs = {
  objects: Array<Game_State_Enum_Insert_Input>;
  on_conflict?: Maybe<Game_State_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_State_Enum_OneArgs = {
  object: Game_State_Enum_Insert_Input;
  on_conflict?: Maybe<Game_State_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_State_OneArgs = {
  object: Game_State_Insert_Input;
  on_conflict?: Maybe<Game_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HostArgs = {
  objects: Array<Host_Insert_Input>;
  on_conflict?: Maybe<Host_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Host_OneArgs = {
  object: Host_Insert_Input;
  on_conflict?: Maybe<Host_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestionArgs = {
  objects: Array<Question_Insert_Input>;
  on_conflict?: Maybe<Question_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Question_OneArgs = {
  object: Question_Insert_Input;
  on_conflict?: Maybe<Question_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Question_StateArgs = {
  objects: Array<Question_State_Insert_Input>;
  on_conflict?: Maybe<Question_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Question_State_EnumArgs = {
  objects: Array<Question_State_Enum_Insert_Input>;
  on_conflict?: Maybe<Question_State_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Question_State_Enum_OneArgs = {
  object: Question_State_Enum_Insert_Input;
  on_conflict?: Maybe<Question_State_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Question_State_OneArgs = {
  object: Question_State_Insert_Input;
  on_conflict?: Maybe<Question_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeamArgs = {
  objects: Array<Team_Insert_Input>;
  on_conflict?: Maybe<Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_OneArgs = {
  object: Team_Insert_Input;
  on_conflict?: Maybe<Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootStart_GameArgs = {
  game_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootUpdate_AnswerArgs = {
  _set?: Maybe<Answer_Set_Input>;
  where: Answer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Answer_By_PkArgs = {
  _set?: Maybe<Answer_Set_Input>;
  pk_columns: Answer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GameArgs = {
  _set?: Maybe<Game_Set_Input>;
  where: Game_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Game_By_PkArgs = {
  _set?: Maybe<Game_Set_Input>;
  pk_columns: Game_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Game_StateArgs = {
  _set?: Maybe<Game_State_Set_Input>;
  where: Game_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Game_State_By_PkArgs = {
  _set?: Maybe<Game_State_Set_Input>;
  pk_columns: Game_State_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Game_State_EnumArgs = {
  _set?: Maybe<Game_State_Enum_Set_Input>;
  where: Game_State_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Game_State_Enum_By_PkArgs = {
  _set?: Maybe<Game_State_Enum_Set_Input>;
  pk_columns: Game_State_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_HostArgs = {
  _set?: Maybe<Host_Set_Input>;
  where: Host_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Host_By_PkArgs = {
  _set?: Maybe<Host_Set_Input>;
  pk_columns: Host_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionArgs = {
  _inc?: Maybe<Question_Inc_Input>;
  _set?: Maybe<Question_Set_Input>;
  where: Question_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Question_By_PkArgs = {
  _inc?: Maybe<Question_Inc_Input>;
  _set?: Maybe<Question_Set_Input>;
  pk_columns: Question_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Question_StateArgs = {
  _set?: Maybe<Question_State_Set_Input>;
  where: Question_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Question_State_By_PkArgs = {
  _set?: Maybe<Question_State_Set_Input>;
  pk_columns: Question_State_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Question_State_EnumArgs = {
  _set?: Maybe<Question_State_Enum_Set_Input>;
  where: Question_State_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Question_State_Enum_By_PkArgs = {
  _set?: Maybe<Question_State_Enum_Set_Input>;
  pk_columns: Question_State_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TeamArgs = {
  _set?: Maybe<Team_Set_Input>;
  where: Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Team_By_PkArgs = {
  _set?: Maybe<Team_Set_Input>;
  pk_columns: Team_Pk_Columns_Input;
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

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "answer" */
  answer: Array<Answer>;
  /** fetch aggregated fields from the table: "answer" */
  answer_aggregate: Answer_Aggregate;
  /** fetch data from the table: "answer" using primary key columns */
  answer_by_pk?: Maybe<Answer>;
  /** fetch data from the table: "game" */
  game: Array<Game>;
  /** fetch aggregated fields from the table: "game" */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
  /** fetch data from the table: "game_state" */
  game_state: Array<Game_State>;
  /** fetch aggregated fields from the table: "game_state" */
  game_state_aggregate: Game_State_Aggregate;
  /** fetch data from the table: "game_state" using primary key columns */
  game_state_by_pk?: Maybe<Game_State>;
  /** fetch data from the table: "game_state_enum" */
  game_state_enum: Array<Game_State_Enum>;
  /** fetch aggregated fields from the table: "game_state_enum" */
  game_state_enum_aggregate: Game_State_Enum_Aggregate;
  /** fetch data from the table: "game_state_enum" using primary key columns */
  game_state_enum_by_pk?: Maybe<Game_State_Enum>;
  /** fetch data from the table: "host" */
  host: Array<Host>;
  /** fetch aggregated fields from the table: "host" */
  host_aggregate: Host_Aggregate;
  /** fetch data from the table: "host" using primary key columns */
  host_by_pk?: Maybe<Host>;
  /** fetch data from the table: "question" */
  question: Array<Question>;
  /** fetch aggregated fields from the table: "question" */
  question_aggregate: Question_Aggregate;
  /** fetch data from the table: "question" using primary key columns */
  question_by_pk?: Maybe<Question>;
  /** fetch data from the table: "question_state" */
  question_state: Array<Question_State>;
  /** fetch aggregated fields from the table: "question_state" */
  question_state_aggregate: Question_State_Aggregate;
  /** fetch data from the table: "question_state" using primary key columns */
  question_state_by_pk?: Maybe<Question_State>;
  /** fetch data from the table: "question_state_enum" */
  question_state_enum: Array<Question_State_Enum>;
  /** fetch aggregated fields from the table: "question_state_enum" */
  question_state_enum_aggregate: Question_State_Enum_Aggregate;
  /** fetch data from the table: "question_state_enum" using primary key columns */
  question_state_enum_by_pk?: Maybe<Question_State_Enum>;
  /** fetch data from the table: "team" */
  team: Array<Team>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
};


/** query root */
export type Query_RootAnswerArgs = {
  distinct_on?: Maybe<Array<Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Answer_Order_By>>;
  where?: Maybe<Answer_Bool_Exp>;
};


/** query root */
export type Query_RootAnswer_AggregateArgs = {
  distinct_on?: Maybe<Array<Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Answer_Order_By>>;
  where?: Maybe<Answer_Bool_Exp>;
};


/** query root */
export type Query_RootAnswer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGameArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


/** query root */
export type Query_RootGame_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


/** query root */
export type Query_RootGame_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGame_StateArgs = {
  distinct_on?: Maybe<Array<Game_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_State_Order_By>>;
  where?: Maybe<Game_State_Bool_Exp>;
};


/** query root */
export type Query_RootGame_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_State_Order_By>>;
  where?: Maybe<Game_State_Bool_Exp>;
};


/** query root */
export type Query_RootGame_State_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGame_State_EnumArgs = {
  distinct_on?: Maybe<Array<Game_State_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_State_Enum_Order_By>>;
  where?: Maybe<Game_State_Enum_Bool_Exp>;
};


/** query root */
export type Query_RootGame_State_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_State_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_State_Enum_Order_By>>;
  where?: Maybe<Game_State_Enum_Bool_Exp>;
};


/** query root */
export type Query_RootGame_State_Enum_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootHostArgs = {
  distinct_on?: Maybe<Array<Host_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Host_Order_By>>;
  where?: Maybe<Host_Bool_Exp>;
};


/** query root */
export type Query_RootHost_AggregateArgs = {
  distinct_on?: Maybe<Array<Host_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Host_Order_By>>;
  where?: Maybe<Host_Bool_Exp>;
};


/** query root */
export type Query_RootHost_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootQuestionArgs = {
  distinct_on?: Maybe<Array<Question_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Order_By>>;
  where?: Maybe<Question_Bool_Exp>;
};


/** query root */
export type Query_RootQuestion_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Order_By>>;
  where?: Maybe<Question_Bool_Exp>;
};


/** query root */
export type Query_RootQuestion_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootQuestion_StateArgs = {
  distinct_on?: Maybe<Array<Question_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_State_Order_By>>;
  where?: Maybe<Question_State_Bool_Exp>;
};


/** query root */
export type Query_RootQuestion_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_State_Order_By>>;
  where?: Maybe<Question_State_Bool_Exp>;
};


/** query root */
export type Query_RootQuestion_State_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootQuestion_State_EnumArgs = {
  distinct_on?: Maybe<Array<Question_State_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_State_Enum_Order_By>>;
  where?: Maybe<Question_State_Enum_Bool_Exp>;
};


/** query root */
export type Query_RootQuestion_State_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_State_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_State_Enum_Order_By>>;
  where?: Maybe<Question_State_Enum_Bool_Exp>;
};


/** query root */
export type Query_RootQuestion_State_Enum_By_PkArgs = {
  value: Scalars['String'];
};


/** query root */
export type Query_RootTeamArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


/** query root */
export type Query_RootTeam_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


/** query root */
export type Query_RootTeam_By_PkArgs = {
  id: Scalars['uuid'];
};

/**
 * A question belonging to a game
 * 
 * 
 * columns and relationships of "question"
 */
export type Question = {
  __typename?: 'question';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  game: Game;
  game_id: Scalars['uuid'];
  id: Scalars['uuid'];
  point_value: Scalars['Int'];
  question_order: Scalars['Int'];
  /** An array relationship */
  question_states: Array<Question_State>;
  /** An aggregated array relationship */
  question_states_aggregate: Question_State_Aggregate;
  question_text: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/**
 * A question belonging to a game
 * 
 * 
 * columns and relationships of "question"
 */
export type QuestionQuestion_StatesArgs = {
  distinct_on?: Maybe<Array<Question_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_State_Order_By>>;
  where?: Maybe<Question_State_Bool_Exp>;
};


/**
 * A question belonging to a game
 * 
 * 
 * columns and relationships of "question"
 */
export type QuestionQuestion_States_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_State_Order_By>>;
  where?: Maybe<Question_State_Bool_Exp>;
};

/** aggregated selection of "question" */
export type Question_Aggregate = {
  __typename?: 'question_aggregate';
  aggregate?: Maybe<Question_Aggregate_Fields>;
  nodes: Array<Question>;
};

/** aggregate fields of "question" */
export type Question_Aggregate_Fields = {
  __typename?: 'question_aggregate_fields';
  avg?: Maybe<Question_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Question_Max_Fields>;
  min?: Maybe<Question_Min_Fields>;
  stddev?: Maybe<Question_Stddev_Fields>;
  stddev_pop?: Maybe<Question_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Question_Stddev_Samp_Fields>;
  sum?: Maybe<Question_Sum_Fields>;
  var_pop?: Maybe<Question_Var_Pop_Fields>;
  var_samp?: Maybe<Question_Var_Samp_Fields>;
  variance?: Maybe<Question_Variance_Fields>;
};


/** aggregate fields of "question" */
export type Question_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Question_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "question" */
export type Question_Aggregate_Order_By = {
  avg?: Maybe<Question_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Question_Max_Order_By>;
  min?: Maybe<Question_Min_Order_By>;
  stddev?: Maybe<Question_Stddev_Order_By>;
  stddev_pop?: Maybe<Question_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Question_Stddev_Samp_Order_By>;
  sum?: Maybe<Question_Sum_Order_By>;
  var_pop?: Maybe<Question_Var_Pop_Order_By>;
  var_samp?: Maybe<Question_Var_Samp_Order_By>;
  variance?: Maybe<Question_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "question" */
export type Question_Arr_Rel_Insert_Input = {
  data: Array<Question_Insert_Input>;
  on_conflict?: Maybe<Question_On_Conflict>;
};

/** aggregate avg on columns */
export type Question_Avg_Fields = {
  __typename?: 'question_avg_fields';
  point_value?: Maybe<Scalars['Float']>;
  question_order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "question" */
export type Question_Avg_Order_By = {
  point_value?: Maybe<Order_By>;
  question_order?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "question". All fields are combined with a logical 'AND'. */
export type Question_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Question_Bool_Exp>>>;
  _not?: Maybe<Question_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Question_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  game?: Maybe<Game_Bool_Exp>;
  game_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  point_value?: Maybe<Int_Comparison_Exp>;
  question_order?: Maybe<Int_Comparison_Exp>;
  question_states?: Maybe<Question_State_Bool_Exp>;
  question_text?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "question" */
export enum Question_Constraint {
  /** unique or primary key constraint */
  QuestionPkey = 'question_pkey'
}

/** input type for incrementing integer column in table "question" */
export type Question_Inc_Input = {
  point_value?: Maybe<Scalars['Int']>;
  question_order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "question" */
export type Question_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game?: Maybe<Game_Obj_Rel_Insert_Input>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  point_value?: Maybe<Scalars['Int']>;
  question_order?: Maybe<Scalars['Int']>;
  question_states?: Maybe<Question_State_Arr_Rel_Insert_Input>;
  question_text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Question_Max_Fields = {
  __typename?: 'question_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  point_value?: Maybe<Scalars['Int']>;
  question_order?: Maybe<Scalars['Int']>;
  question_text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "question" */
export type Question_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  point_value?: Maybe<Order_By>;
  question_order?: Maybe<Order_By>;
  question_text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Question_Min_Fields = {
  __typename?: 'question_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  point_value?: Maybe<Scalars['Int']>;
  question_order?: Maybe<Scalars['Int']>;
  question_text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "question" */
export type Question_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  point_value?: Maybe<Order_By>;
  question_order?: Maybe<Order_By>;
  question_text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "question" */
export type Question_Mutation_Response = {
  __typename?: 'question_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Question>;
};

/** input type for inserting object relation for remote table "question" */
export type Question_Obj_Rel_Insert_Input = {
  data: Question_Insert_Input;
  on_conflict?: Maybe<Question_On_Conflict>;
};

/** on conflict condition type for table "question" */
export type Question_On_Conflict = {
  constraint: Question_Constraint;
  update_columns: Array<Question_Update_Column>;
  where?: Maybe<Question_Bool_Exp>;
};

/** ordering options when selecting data from "question" */
export type Question_Order_By = {
  created_at?: Maybe<Order_By>;
  game?: Maybe<Game_Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  point_value?: Maybe<Order_By>;
  question_order?: Maybe<Order_By>;
  question_states_aggregate?: Maybe<Question_State_Aggregate_Order_By>;
  question_text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "question" */
export type Question_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "question" */
export enum Question_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  PointValue = 'point_value',
  /** column name */
  QuestionOrder = 'question_order',
  /** column name */
  QuestionText = 'question_text',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "question" */
export type Question_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  point_value?: Maybe<Scalars['Int']>;
  question_order?: Maybe<Scalars['Int']>;
  question_text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "question_state" */
export type Question_State = {
  __typename?: 'question_state';
  /** An array relationship */
  answers: Array<Answer>;
  /** An aggregated array relationship */
  answers_aggregate: Answer_Aggregate;
  /** An object relationship */
  game_state: Game_State;
  game_state_id: Scalars['uuid'];
  /** An array relationship */
  game_states: Array<Game_State>;
  /** An aggregated array relationship */
  game_states_aggregate: Game_State_Aggregate;
  id: Scalars['uuid'];
  /** An object relationship */
  question: Question;
  question_id: Scalars['uuid'];
  /** An object relationship */
  question_state_enum: Question_State_Enum;
  state: Question_State_Enum_Enum;
};


/** columns and relationships of "question_state" */
export type Question_StateAnswersArgs = {
  distinct_on?: Maybe<Array<Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Answer_Order_By>>;
  where?: Maybe<Answer_Bool_Exp>;
};


/** columns and relationships of "question_state" */
export type Question_StateAnswers_AggregateArgs = {
  distinct_on?: Maybe<Array<Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Answer_Order_By>>;
  where?: Maybe<Answer_Bool_Exp>;
};


/** columns and relationships of "question_state" */
export type Question_StateGame_StatesArgs = {
  distinct_on?: Maybe<Array<Game_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_State_Order_By>>;
  where?: Maybe<Game_State_Bool_Exp>;
};


/** columns and relationships of "question_state" */
export type Question_StateGame_States_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_State_Order_By>>;
  where?: Maybe<Game_State_Bool_Exp>;
};

/** aggregated selection of "question_state" */
export type Question_State_Aggregate = {
  __typename?: 'question_state_aggregate';
  aggregate?: Maybe<Question_State_Aggregate_Fields>;
  nodes: Array<Question_State>;
};

/** aggregate fields of "question_state" */
export type Question_State_Aggregate_Fields = {
  __typename?: 'question_state_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Question_State_Max_Fields>;
  min?: Maybe<Question_State_Min_Fields>;
};


/** aggregate fields of "question_state" */
export type Question_State_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Question_State_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "question_state" */
export type Question_State_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Question_State_Max_Order_By>;
  min?: Maybe<Question_State_Min_Order_By>;
};

/** input type for inserting array relation for remote table "question_state" */
export type Question_State_Arr_Rel_Insert_Input = {
  data: Array<Question_State_Insert_Input>;
  on_conflict?: Maybe<Question_State_On_Conflict>;
};

/** Boolean expression to filter rows from the table "question_state". All fields are combined with a logical 'AND'. */
export type Question_State_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Question_State_Bool_Exp>>>;
  _not?: Maybe<Question_State_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Question_State_Bool_Exp>>>;
  answers?: Maybe<Answer_Bool_Exp>;
  game_state?: Maybe<Game_State_Bool_Exp>;
  game_state_id?: Maybe<Uuid_Comparison_Exp>;
  game_states?: Maybe<Game_State_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  question?: Maybe<Question_Bool_Exp>;
  question_id?: Maybe<Uuid_Comparison_Exp>;
  question_state_enum?: Maybe<Question_State_Enum_Bool_Exp>;
  state?: Maybe<Question_State_Enum_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "question_state" */
export enum Question_State_Constraint {
  /** unique or primary key constraint */
  QuestionStatePkey = 'question_state_pkey'
}

/** columns and relationships of "question_state_enum" */
export type Question_State_Enum = {
  __typename?: 'question_state_enum';
  /** An array relationship */
  question_states: Array<Question_State>;
  /** An aggregated array relationship */
  question_states_aggregate: Question_State_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "question_state_enum" */
export type Question_State_EnumQuestion_StatesArgs = {
  distinct_on?: Maybe<Array<Question_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_State_Order_By>>;
  where?: Maybe<Question_State_Bool_Exp>;
};


/** columns and relationships of "question_state_enum" */
export type Question_State_EnumQuestion_States_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_State_Order_By>>;
  where?: Maybe<Question_State_Bool_Exp>;
};

/** aggregated selection of "question_state_enum" */
export type Question_State_Enum_Aggregate = {
  __typename?: 'question_state_enum_aggregate';
  aggregate?: Maybe<Question_State_Enum_Aggregate_Fields>;
  nodes: Array<Question_State_Enum>;
};

/** aggregate fields of "question_state_enum" */
export type Question_State_Enum_Aggregate_Fields = {
  __typename?: 'question_state_enum_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Question_State_Enum_Max_Fields>;
  min?: Maybe<Question_State_Enum_Min_Fields>;
};


/** aggregate fields of "question_state_enum" */
export type Question_State_Enum_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Question_State_Enum_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "question_state_enum" */
export type Question_State_Enum_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Question_State_Enum_Max_Order_By>;
  min?: Maybe<Question_State_Enum_Min_Order_By>;
};

/** input type for inserting array relation for remote table "question_state_enum" */
export type Question_State_Enum_Arr_Rel_Insert_Input = {
  data: Array<Question_State_Enum_Insert_Input>;
  on_conflict?: Maybe<Question_State_Enum_On_Conflict>;
};

/** Boolean expression to filter rows from the table "question_state_enum". All fields are combined with a logical 'AND'. */
export type Question_State_Enum_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Question_State_Enum_Bool_Exp>>>;
  _not?: Maybe<Question_State_Enum_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Question_State_Enum_Bool_Exp>>>;
  question_states?: Maybe<Question_State_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "question_state_enum" */
export enum Question_State_Enum_Constraint {
  /** unique or primary key constraint */
  QuestionStateEnumPkey = 'question_state_enum_pkey'
}

export enum Question_State_Enum_Enum {
  Closed = 'closed',
  NotOpened = 'not_opened',
  Open = 'open',
  Scored = 'scored'
}

/** expression to compare columns of type question_state_enum_enum. All fields are combined with logical 'AND'. */
export type Question_State_Enum_Enum_Comparison_Exp = {
  _eq?: Maybe<Question_State_Enum_Enum>;
  _in?: Maybe<Array<Question_State_Enum_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Question_State_Enum_Enum>;
  _nin?: Maybe<Array<Question_State_Enum_Enum>>;
};

/** input type for inserting data into table "question_state_enum" */
export type Question_State_Enum_Insert_Input = {
  question_states?: Maybe<Question_State_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Question_State_Enum_Max_Fields = {
  __typename?: 'question_state_enum_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "question_state_enum" */
export type Question_State_Enum_Max_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Question_State_Enum_Min_Fields = {
  __typename?: 'question_state_enum_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "question_state_enum" */
export type Question_State_Enum_Min_Order_By = {
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "question_state_enum" */
export type Question_State_Enum_Mutation_Response = {
  __typename?: 'question_state_enum_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Question_State_Enum>;
};

/** input type for inserting object relation for remote table "question_state_enum" */
export type Question_State_Enum_Obj_Rel_Insert_Input = {
  data: Question_State_Enum_Insert_Input;
  on_conflict?: Maybe<Question_State_Enum_On_Conflict>;
};

/** on conflict condition type for table "question_state_enum" */
export type Question_State_Enum_On_Conflict = {
  constraint: Question_State_Enum_Constraint;
  update_columns: Array<Question_State_Enum_Update_Column>;
  where?: Maybe<Question_State_Enum_Bool_Exp>;
};

/** ordering options when selecting data from "question_state_enum" */
export type Question_State_Enum_Order_By = {
  question_states_aggregate?: Maybe<Question_State_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "question_state_enum" */
export type Question_State_Enum_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "question_state_enum" */
export enum Question_State_Enum_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "question_state_enum" */
export type Question_State_Enum_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "question_state_enum" */
export enum Question_State_Enum_Update_Column {
  /** column name */
  Value = 'value'
}

/** input type for inserting data into table "question_state" */
export type Question_State_Insert_Input = {
  answers?: Maybe<Answer_Arr_Rel_Insert_Input>;
  game_state?: Maybe<Game_State_Obj_Rel_Insert_Input>;
  game_state_id?: Maybe<Scalars['uuid']>;
  game_states?: Maybe<Game_State_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  question?: Maybe<Question_Obj_Rel_Insert_Input>;
  question_id?: Maybe<Scalars['uuid']>;
  question_state_enum?: Maybe<Question_State_Enum_Obj_Rel_Insert_Input>;
  state?: Maybe<Question_State_Enum_Enum>;
};

/** aggregate max on columns */
export type Question_State_Max_Fields = {
  __typename?: 'question_state_max_fields';
  game_state_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  question_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "question_state" */
export type Question_State_Max_Order_By = {
  game_state_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  question_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Question_State_Min_Fields = {
  __typename?: 'question_state_min_fields';
  game_state_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  question_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "question_state" */
export type Question_State_Min_Order_By = {
  game_state_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  question_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "question_state" */
export type Question_State_Mutation_Response = {
  __typename?: 'question_state_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Question_State>;
};

/** input type for inserting object relation for remote table "question_state" */
export type Question_State_Obj_Rel_Insert_Input = {
  data: Question_State_Insert_Input;
  on_conflict?: Maybe<Question_State_On_Conflict>;
};

/** on conflict condition type for table "question_state" */
export type Question_State_On_Conflict = {
  constraint: Question_State_Constraint;
  update_columns: Array<Question_State_Update_Column>;
  where?: Maybe<Question_State_Bool_Exp>;
};

/** ordering options when selecting data from "question_state" */
export type Question_State_Order_By = {
  answers_aggregate?: Maybe<Answer_Aggregate_Order_By>;
  game_state?: Maybe<Game_State_Order_By>;
  game_state_id?: Maybe<Order_By>;
  game_states_aggregate?: Maybe<Game_State_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  question?: Maybe<Question_Order_By>;
  question_id?: Maybe<Order_By>;
  question_state_enum?: Maybe<Question_State_Enum_Order_By>;
  state?: Maybe<Order_By>;
};

/** primary key columns input for table: "question_state" */
export type Question_State_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "question_state" */
export enum Question_State_Select_Column {
  /** column name */
  GameStateId = 'game_state_id',
  /** column name */
  Id = 'id',
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  State = 'state'
}

/** input type for updating data in table "question_state" */
export type Question_State_Set_Input = {
  game_state_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  question_id?: Maybe<Scalars['uuid']>;
  state?: Maybe<Question_State_Enum_Enum>;
};

/** update columns of table "question_state" */
export enum Question_State_Update_Column {
  /** column name */
  GameStateId = 'game_state_id',
  /** column name */
  Id = 'id',
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  State = 'state'
}

/** aggregate stddev on columns */
export type Question_Stddev_Fields = {
  __typename?: 'question_stddev_fields';
  point_value?: Maybe<Scalars['Float']>;
  question_order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "question" */
export type Question_Stddev_Order_By = {
  point_value?: Maybe<Order_By>;
  question_order?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Question_Stddev_Pop_Fields = {
  __typename?: 'question_stddev_pop_fields';
  point_value?: Maybe<Scalars['Float']>;
  question_order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "question" */
export type Question_Stddev_Pop_Order_By = {
  point_value?: Maybe<Order_By>;
  question_order?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Question_Stddev_Samp_Fields = {
  __typename?: 'question_stddev_samp_fields';
  point_value?: Maybe<Scalars['Float']>;
  question_order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "question" */
export type Question_Stddev_Samp_Order_By = {
  point_value?: Maybe<Order_By>;
  question_order?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Question_Sum_Fields = {
  __typename?: 'question_sum_fields';
  point_value?: Maybe<Scalars['Int']>;
  question_order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "question" */
export type Question_Sum_Order_By = {
  point_value?: Maybe<Order_By>;
  question_order?: Maybe<Order_By>;
};

/** update columns of table "question" */
export enum Question_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  PointValue = 'point_value',
  /** column name */
  QuestionOrder = 'question_order',
  /** column name */
  QuestionText = 'question_text',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Question_Var_Pop_Fields = {
  __typename?: 'question_var_pop_fields';
  point_value?: Maybe<Scalars['Float']>;
  question_order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "question" */
export type Question_Var_Pop_Order_By = {
  point_value?: Maybe<Order_By>;
  question_order?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Question_Var_Samp_Fields = {
  __typename?: 'question_var_samp_fields';
  point_value?: Maybe<Scalars['Float']>;
  question_order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "question" */
export type Question_Var_Samp_Order_By = {
  point_value?: Maybe<Order_By>;
  question_order?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Question_Variance_Fields = {
  __typename?: 'question_variance_fields';
  point_value?: Maybe<Scalars['Float']>;
  question_order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "question" */
export type Question_Variance_Order_By = {
  point_value?: Maybe<Order_By>;
  question_order?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "answer" */
  answer: Array<Answer>;
  /** fetch aggregated fields from the table: "answer" */
  answer_aggregate: Answer_Aggregate;
  /** fetch data from the table: "answer" using primary key columns */
  answer_by_pk?: Maybe<Answer>;
  /** fetch data from the table: "game" */
  game: Array<Game>;
  /** fetch aggregated fields from the table: "game" */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
  /** fetch data from the table: "game_state" */
  game_state: Array<Game_State>;
  /** fetch aggregated fields from the table: "game_state" */
  game_state_aggregate: Game_State_Aggregate;
  /** fetch data from the table: "game_state" using primary key columns */
  game_state_by_pk?: Maybe<Game_State>;
  /** fetch data from the table: "game_state_enum" */
  game_state_enum: Array<Game_State_Enum>;
  /** fetch aggregated fields from the table: "game_state_enum" */
  game_state_enum_aggregate: Game_State_Enum_Aggregate;
  /** fetch data from the table: "game_state_enum" using primary key columns */
  game_state_enum_by_pk?: Maybe<Game_State_Enum>;
  /** fetch data from the table: "host" */
  host: Array<Host>;
  /** fetch aggregated fields from the table: "host" */
  host_aggregate: Host_Aggregate;
  /** fetch data from the table: "host" using primary key columns */
  host_by_pk?: Maybe<Host>;
  /** fetch data from the table: "question" */
  question: Array<Question>;
  /** fetch aggregated fields from the table: "question" */
  question_aggregate: Question_Aggregate;
  /** fetch data from the table: "question" using primary key columns */
  question_by_pk?: Maybe<Question>;
  /** fetch data from the table: "question_state" */
  question_state: Array<Question_State>;
  /** fetch aggregated fields from the table: "question_state" */
  question_state_aggregate: Question_State_Aggregate;
  /** fetch data from the table: "question_state" using primary key columns */
  question_state_by_pk?: Maybe<Question_State>;
  /** fetch data from the table: "question_state_enum" */
  question_state_enum: Array<Question_State_Enum>;
  /** fetch aggregated fields from the table: "question_state_enum" */
  question_state_enum_aggregate: Question_State_Enum_Aggregate;
  /** fetch data from the table: "question_state_enum" using primary key columns */
  question_state_enum_by_pk?: Maybe<Question_State_Enum>;
  /** fetch data from the table: "team" */
  team: Array<Team>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
};


/** subscription root */
export type Subscription_RootAnswerArgs = {
  distinct_on?: Maybe<Array<Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Answer_Order_By>>;
  where?: Maybe<Answer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAnswer_AggregateArgs = {
  distinct_on?: Maybe<Array<Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Answer_Order_By>>;
  where?: Maybe<Answer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAnswer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGameArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGame_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGame_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGame_StateArgs = {
  distinct_on?: Maybe<Array<Game_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_State_Order_By>>;
  where?: Maybe<Game_State_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGame_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_State_Order_By>>;
  where?: Maybe<Game_State_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGame_State_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGame_State_EnumArgs = {
  distinct_on?: Maybe<Array<Game_State_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_State_Enum_Order_By>>;
  where?: Maybe<Game_State_Enum_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGame_State_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_State_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_State_Enum_Order_By>>;
  where?: Maybe<Game_State_Enum_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGame_State_Enum_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootHostArgs = {
  distinct_on?: Maybe<Array<Host_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Host_Order_By>>;
  where?: Maybe<Host_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHost_AggregateArgs = {
  distinct_on?: Maybe<Array<Host_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Host_Order_By>>;
  where?: Maybe<Host_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHost_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuestionArgs = {
  distinct_on?: Maybe<Array<Question_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Order_By>>;
  where?: Maybe<Question_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestion_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_Order_By>>;
  where?: Maybe<Question_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestion_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuestion_StateArgs = {
  distinct_on?: Maybe<Array<Question_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_State_Order_By>>;
  where?: Maybe<Question_State_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestion_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_State_Order_By>>;
  where?: Maybe<Question_State_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestion_State_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootQuestion_State_EnumArgs = {
  distinct_on?: Maybe<Array<Question_State_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_State_Enum_Order_By>>;
  where?: Maybe<Question_State_Enum_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestion_State_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Question_State_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Question_State_Enum_Order_By>>;
  where?: Maybe<Question_State_Enum_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestion_State_Enum_By_PkArgs = {
  value: Scalars['String'];
};


/** subscription root */
export type Subscription_RootTeamArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeam_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeam_By_PkArgs = {
  id: Scalars['uuid'];
};

/**
 * A team for a game
 * 
 * 
 * columns and relationships of "team"
 */
export type Team = {
  __typename?: 'team';
  /** An array relationship */
  answers: Array<Answer>;
  /** An aggregated array relationship */
  answers_aggregate: Answer_Aggregate;
  /** An object relationship */
  game_state: Game_State;
  game_state_id: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
};


/**
 * A team for a game
 * 
 * 
 * columns and relationships of "team"
 */
export type TeamAnswersArgs = {
  distinct_on?: Maybe<Array<Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Answer_Order_By>>;
  where?: Maybe<Answer_Bool_Exp>;
};


/**
 * A team for a game
 * 
 * 
 * columns and relationships of "team"
 */
export type TeamAnswers_AggregateArgs = {
  distinct_on?: Maybe<Array<Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Answer_Order_By>>;
  where?: Maybe<Answer_Bool_Exp>;
};

/** aggregated selection of "team" */
export type Team_Aggregate = {
  __typename?: 'team_aggregate';
  aggregate?: Maybe<Team_Aggregate_Fields>;
  nodes: Array<Team>;
};

/** aggregate fields of "team" */
export type Team_Aggregate_Fields = {
  __typename?: 'team_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Team_Max_Fields>;
  min?: Maybe<Team_Min_Fields>;
};


/** aggregate fields of "team" */
export type Team_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Team_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team" */
export type Team_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Team_Max_Order_By>;
  min?: Maybe<Team_Min_Order_By>;
};

/** input type for inserting array relation for remote table "team" */
export type Team_Arr_Rel_Insert_Input = {
  data: Array<Team_Insert_Input>;
  on_conflict?: Maybe<Team_On_Conflict>;
};

/** Boolean expression to filter rows from the table "team". All fields are combined with a logical 'AND'. */
export type Team_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Team_Bool_Exp>>>;
  _not?: Maybe<Team_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Team_Bool_Exp>>>;
  answers?: Maybe<Answer_Bool_Exp>;
  game_state?: Maybe<Game_State_Bool_Exp>;
  game_state_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "team" */
export enum Team_Constraint {
  /** unique or primary key constraint */
  TeamPkey = 'team_pkey'
}

/** input type for inserting data into table "team" */
export type Team_Insert_Input = {
  answers?: Maybe<Answer_Arr_Rel_Insert_Input>;
  game_state?: Maybe<Game_State_Obj_Rel_Insert_Input>;
  game_state_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Team_Max_Fields = {
  __typename?: 'team_max_fields';
  game_state_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "team" */
export type Team_Max_Order_By = {
  game_state_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Team_Min_Fields = {
  __typename?: 'team_min_fields';
  game_state_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "team" */
export type Team_Min_Order_By = {
  game_state_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "team" */
export type Team_Mutation_Response = {
  __typename?: 'team_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Team>;
};

/** input type for inserting object relation for remote table "team" */
export type Team_Obj_Rel_Insert_Input = {
  data: Team_Insert_Input;
  on_conflict?: Maybe<Team_On_Conflict>;
};

/** on conflict condition type for table "team" */
export type Team_On_Conflict = {
  constraint: Team_Constraint;
  update_columns: Array<Team_Update_Column>;
  where?: Maybe<Team_Bool_Exp>;
};

/** ordering options when selecting data from "team" */
export type Team_Order_By = {
  answers_aggregate?: Maybe<Answer_Aggregate_Order_By>;
  game_state?: Maybe<Game_State_Order_By>;
  game_state_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "team" */
export type Team_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "team" */
export enum Team_Select_Column {
  /** column name */
  GameStateId = 'game_state_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "team" */
export type Team_Set_Input = {
  game_state_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "team" */
export enum Team_Update_Column {
  /** column name */
  GameStateId = 'game_state_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


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

export type GameSummaryComponentFragment = (
  { __typename?: 'game' }
  & Pick<Game, 'id' | 'name'>
  & { questions: Array<(
    { __typename?: 'question' }
    & QuestionComponentFragment
  )> }
);

export type GameSummary_StartGameMutationVariables = Exact<{
  gameId: Scalars['uuid'];
}>;


export type GameSummary_StartGameMutation = (
  { __typename?: 'mutation_root' }
  & { start_game?: Maybe<(
    { __typename?: 'CreateGameStateOutput' }
    & { game_state?: Maybe<(
      { __typename?: 'game_state' }
      & Pick<Game_State, 'id'>
    )> }
  )> }
);

export type QuestionFormComponentFragment = (
  { __typename?: 'question' }
  & Pick<Question, 'id' | 'question_text' | 'point_value'>
);

export type QuestionComponentFragment = (
  { __typename?: 'question' }
  & Pick<Question, 'id' | 'game_id' | 'question_text' | 'point_value'>
);

export type CreateGameStateMutationVariables = Exact<{
  gameStateId: Scalars['uuid'];
  gameId: Scalars['uuid'];
  currentQuestionId: Scalars['uuid'];
  questionStates: Question_State_Arr_Rel_Insert_Input;
}>;


export type CreateGameStateMutation = (
  { __typename?: 'mutation_root' }
  & { insert_game_state_one?: Maybe<(
    { __typename?: 'game_state' }
    & Pick<Game_State, 'id'>
  )>, update_game_state_by_pk?: Maybe<(
    { __typename?: 'game_state' }
    & Pick<Game_State, 'id'>
  )> }
);

export type StartGameApiRouteQueryVariables = Exact<{
  gameId: Scalars['uuid'];
}>;


export type StartGameApiRouteQuery = (
  { __typename?: 'query_root' }
  & { game_by_pk?: Maybe<(
    { __typename?: 'game' }
    & Pick<Game, 'id'>
    & { questions: Array<(
      { __typename?: 'question' }
      & Pick<Question, 'id'>
    )> }
  )> }
);

export type AnswerQuestionMutationVariables = Exact<{
  question_state_id: Scalars['uuid'];
  value: Scalars['String'];
}>;


export type AnswerQuestionMutation = (
  { __typename?: 'mutation_root' }
  & { insert_answer_one?: Maybe<(
    { __typename?: 'answer' }
    & Pick<Answer, 'id'>
  )> }
);

export type ParticipantGameSubscriptionVariables = Exact<{
  gameId: Scalars['uuid'];
}>;


export type ParticipantGameSubscription = (
  { __typename?: 'subscription_root' }
  & { game_state_by_pk?: Maybe<(
    { __typename?: 'game_state' }
    & Pick<Game_State, 'state'>
    & { game: (
      { __typename?: 'game' }
      & Pick<Game, 'name'>
    ), teams: Array<(
      { __typename?: 'team' }
      & Pick<Team, 'name'>
    )>, current_question?: Maybe<(
      { __typename?: 'question_state' }
      & Pick<Question_State, 'state'>
      & { question: (
        { __typename?: 'question' }
        & Pick<Question, 'question_text'>
      ), answers: Array<(
        { __typename?: 'answer' }
        & Pick<Answer, 'value'>
      )> }
    )> }
  )> }
);

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = (
  { __typename?: 'query_root' }
  & { question: Array<(
    { __typename?: 'question' }
    & Pick<Question, 'id'>
  )> }
);

export type GamePageQueryVariables = Exact<{
  gameId: Scalars['uuid'];
}>;


export type GamePageQuery = (
  { __typename?: 'query_root' }
  & { game_by_pk?: Maybe<(
    { __typename?: 'game' }
    & Pick<Game, 'id' | 'name'>
    & { questions: Array<(
      { __typename?: 'question' }
      & Pick<Question, 'id' | 'question_order'>
      & QuestionComponentFragment
    )> }
  )> }
);

export type QuestionPageQueryVariables = Exact<{
  questionId: Scalars['uuid'];
}>;


export type QuestionPageQuery = (
  { __typename?: 'query_root' }
  & { question_by_pk?: Maybe<(
    { __typename?: 'question' }
    & QuestionComponentFragment
  )> }
);

export type UpdateQuestionMutationVariables = Exact<{
  question_id: Scalars['uuid'];
  question_text: Scalars['String'];
  point_value: Scalars['Int'];
}>;


export type UpdateQuestionMutation = (
  { __typename?: 'mutation_root' }
  & { update_question_by_pk?: Maybe<(
    { __typename?: 'question' }
    & Pick<Question, 'id' | 'question_text' | 'point_value'>
  )> }
);

export type InsertQuestionMutationVariables = Exact<{
  question_text: Scalars['String'];
  point_value: Scalars['Int'];
  game_id: Scalars['uuid'];
}>;


export type InsertQuestionMutation = (
  { __typename?: 'mutation_root' }
  & { insert_question_one?: Maybe<(
    { __typename?: 'question' }
    & Pick<Question, 'id' | 'question_text' | 'point_value'>
  )> }
);

export type RenameGameMutationVariables = Exact<{
  gameId: Scalars['uuid'];
  name: Scalars['String'];
}>;


export type RenameGameMutation = (
  { __typename?: 'mutation_root' }
  & { update_game_by_pk?: Maybe<(
    { __typename?: 'game' }
    & Pick<Game, 'id' | 'name'>
  )> }
);

export type GamePage_StartGameMutationVariables = Exact<{
  gameId: Scalars['uuid'];
}>;


export type GamePage_StartGameMutation = (
  { __typename?: 'mutation_root' }
  & { start_game?: Maybe<(
    { __typename?: 'CreateGameStateOutput' }
    & { game_state?: Maybe<(
      { __typename?: 'game_state' }
      & Pick<Game_State, 'id'>
    )> }
  )> }
);

export type SwapQuestionOrderMutationVariables = Exact<{
  question1Id: Scalars['uuid'];
  question1Order: Scalars['Int'];
  question2Id: Scalars['uuid'];
  question2Order: Scalars['Int'];
}>;


export type SwapQuestionOrderMutation = (
  { __typename?: 'mutation_root' }
  & { second_question?: Maybe<(
    { __typename?: 'question' }
    & Pick<Question, 'id' | 'question_order'>
  )>, first_question?: Maybe<(
    { __typename?: 'question' }
    & Pick<Question, 'id' | 'question_order'>
  )> }
);

export type CreateGameMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateGameMutation = (
  { __typename?: 'mutation_root' }
  & { insert_game_one?: Maybe<(
    { __typename?: 'game' }
    & Pick<Game, 'id'>
  )> }
);

export type GamesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GamesPageQuery = (
  { __typename?: 'query_root' }
  & { game: Array<(
    { __typename?: 'game' }
    & GameSummaryComponentFragment
  )> }
);

export const QuestionComponentFragmentDoc = gql`
    fragment QuestionComponent on question {
  id
  game_id
  question_text
  point_value
}
    `;
export const GameSummaryComponentFragmentDoc = gql`
    fragment GameSummaryComponent on game {
  id
  name
  questions {
    ...QuestionComponent
  }
}
    ${QuestionComponentFragmentDoc}`;
export const QuestionFormComponentFragmentDoc = gql`
    fragment QuestionFormComponent on question {
  id
  question_text
  point_value
}
    `;
export const GameSummary_StartGameDocument = gql`
    mutation GameSummary_StartGame($gameId: uuid!) {
  start_game(game_id: $gameId) {
    game_state {
      id
    }
  }
}
    `;

export function useGameSummary_StartGameMutation() {
  return Urql.useMutation<GameSummary_StartGameMutation, GameSummary_StartGameMutationVariables>(GameSummary_StartGameDocument);
};
export const CreateGameStateDocument = gql`
    mutation CreateGameState($gameStateId: uuid!, $gameId: uuid!, $currentQuestionId: uuid!, $questionStates: question_state_arr_rel_insert_input!) {
  insert_game_state_one(object: {id: $gameStateId, game_id: $gameId, question_states: $questionStates}) {
    id
  }
  update_game_state_by_pk(pk_columns: {id: $gameStateId}, _set: {current_question_id: $currentQuestionId}) {
    id
  }
}
    `;

export function useCreateGameStateMutation() {
  return Urql.useMutation<CreateGameStateMutation, CreateGameStateMutationVariables>(CreateGameStateDocument);
};
export const StartGameApiRouteDocument = gql`
    query StartGameApiRoute($gameId: uuid!) {
  game_by_pk(id: $gameId) {
    id
    questions(order_by: {question_order: asc}) {
      id
    }
  }
}
    `;

export function useStartGameApiRouteQuery(options: Omit<Urql.UseQueryArgs<StartGameApiRouteQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<StartGameApiRouteQuery>({ query: StartGameApiRouteDocument, ...options });
};
export const AnswerQuestionDocument = gql`
    mutation AnswerQuestion($question_state_id: uuid!, $value: String!) {
  insert_answer_one(object: {question_state_id: $question_state_id, value: $value}) {
    id
  }
}
    `;

export function useAnswerQuestionMutation() {
  return Urql.useMutation<AnswerQuestionMutation, AnswerQuestionMutationVariables>(AnswerQuestionDocument);
};
export const ParticipantGameDocument = gql`
    subscription ParticipantGame($gameId: uuid!) {
  game_state_by_pk(id: $gameId) {
    state
    game {
      name
    }
    teams {
      name
    }
    current_question {
      state
      question {
        question_text
      }
      answers {
        value
      }
    }
  }
}
    `;

export function useParticipantGameSubscription<TData = ParticipantGameSubscription>(options: Omit<Urql.UseSubscriptionArgs<ParticipantGameSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<ParticipantGameSubscription, TData>) {
  return Urql.useSubscription<ParticipantGameSubscription, TData, ParticipantGameSubscriptionVariables>({ query: ParticipantGameDocument, ...options }, handler);
};
export const IndexPageDocument = gql`
    query IndexPage {
  question {
    id
  }
}
    `;

export function useIndexPageQuery(options: Omit<Urql.UseQueryArgs<IndexPageQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<IndexPageQuery>({ query: IndexPageDocument, ...options });
};
export const GamePageDocument = gql`
    query GamePage($gameId: uuid!) {
  game_by_pk(id: $gameId) {
    id
    name
    questions(order_by: {question_order: asc}) {
      ...QuestionComponent
      id
      question_order
    }
  }
}
    ${QuestionComponentFragmentDoc}`;

export function useGamePageQuery(options: Omit<Urql.UseQueryArgs<GamePageQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GamePageQuery>({ query: GamePageDocument, ...options });
};
export const QuestionPageDocument = gql`
    query QuestionPage($questionId: uuid!) {
  question_by_pk(id: $questionId) {
    ...QuestionComponent
  }
}
    ${QuestionComponentFragmentDoc}`;

export function useQuestionPageQuery(options: Omit<Urql.UseQueryArgs<QuestionPageQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<QuestionPageQuery>({ query: QuestionPageDocument, ...options });
};
export const UpdateQuestionDocument = gql`
    mutation UpdateQuestion($question_id: uuid!, $question_text: String!, $point_value: Int!) {
  update_question_by_pk(pk_columns: {id: $question_id}, _set: {question_text: $question_text, point_value: $point_value}) {
    id
    question_text
    point_value
  }
}
    `;

export function useUpdateQuestionMutation() {
  return Urql.useMutation<UpdateQuestionMutation, UpdateQuestionMutationVariables>(UpdateQuestionDocument);
};
export const InsertQuestionDocument = gql`
    mutation InsertQuestion($question_text: String!, $point_value: Int!, $game_id: uuid!) {
  insert_question_one(object: {question_text: $question_text, point_value: $point_value, game_id: $game_id}) {
    id
    question_text
    point_value
  }
}
    `;

export function useInsertQuestionMutation() {
  return Urql.useMutation<InsertQuestionMutation, InsertQuestionMutationVariables>(InsertQuestionDocument);
};
export const RenameGameDocument = gql`
    mutation RenameGame($gameId: uuid!, $name: String!) {
  update_game_by_pk(pk_columns: {id: $gameId}, _set: {name: $name}) {
    id
    name
  }
}
    `;

export function useRenameGameMutation() {
  return Urql.useMutation<RenameGameMutation, RenameGameMutationVariables>(RenameGameDocument);
};
export const GamePage_StartGameDocument = gql`
    mutation GamePage_StartGame($gameId: uuid!) {
  start_game(game_id: $gameId) {
    game_state {
      id
    }
  }
}
    `;

export function useGamePage_StartGameMutation() {
  return Urql.useMutation<GamePage_StartGameMutation, GamePage_StartGameMutationVariables>(GamePage_StartGameDocument);
};
export const SwapQuestionOrderDocument = gql`
    mutation SwapQuestionOrder($question1Id: uuid!, $question1Order: Int!, $question2Id: uuid!, $question2Order: Int!) {
  second_question: update_question_by_pk(pk_columns: {id: $question1Id}, _set: {question_order: $question2Order}) {
    id
    question_order
  }
  first_question: update_question_by_pk(pk_columns: {id: $question2Id}, _set: {question_order: $question1Order}) {
    id
    question_order
  }
}
    `;

export function useSwapQuestionOrderMutation() {
  return Urql.useMutation<SwapQuestionOrderMutation, SwapQuestionOrderMutationVariables>(SwapQuestionOrderDocument);
};
export const CreateGameDocument = gql`
    mutation CreateGame($name: String!) {
  insert_game_one(object: {name: $name}) {
    id
  }
}
    `;

export function useCreateGameMutation() {
  return Urql.useMutation<CreateGameMutation, CreateGameMutationVariables>(CreateGameDocument);
};
export const GamesPageDocument = gql`
    query GamesPage {
  game {
    ...GameSummaryComponent
  }
}
    ${GameSummaryComponentFragmentDoc}`;

export function useGamesPageQuery(options: Omit<Urql.UseQueryArgs<GamesPageQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GamesPageQuery>({ query: GamesPageDocument, ...options });
};