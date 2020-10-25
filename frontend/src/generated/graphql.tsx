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
  timestamptz: any;
  uuid: any;
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
 * A game belonging to a host
 * 
 * 
 * columns and relationships of "game"
 */
export type Game = {
  __typename?: 'game';
  created_at: Scalars['timestamptz'];
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
  /** delete data from the table: "game" */
  delete_game?: Maybe<Game_Mutation_Response>;
  /** delete single row from the table: "game" */
  delete_game_by_pk?: Maybe<Game>;
  /** delete data from the table: "host" */
  delete_host?: Maybe<Host_Mutation_Response>;
  /** delete single row from the table: "host" */
  delete_host_by_pk?: Maybe<Host>;
  /** delete data from the table: "question" */
  delete_question?: Maybe<Question_Mutation_Response>;
  /** delete single row from the table: "question" */
  delete_question_by_pk?: Maybe<Question>;
  /** insert data into the table: "game" */
  insert_game?: Maybe<Game_Mutation_Response>;
  /** insert a single row into the table: "game" */
  insert_game_one?: Maybe<Game>;
  /** insert data into the table: "host" */
  insert_host?: Maybe<Host_Mutation_Response>;
  /** insert a single row into the table: "host" */
  insert_host_one?: Maybe<Host>;
  /** insert data into the table: "question" */
  insert_question?: Maybe<Question_Mutation_Response>;
  /** insert a single row into the table: "question" */
  insert_question_one?: Maybe<Question>;
  /** update data of the table: "game" */
  update_game?: Maybe<Game_Mutation_Response>;
  /** update single row of the table: "game" */
  update_game_by_pk?: Maybe<Game>;
  /** update data of the table: "host" */
  update_host?: Maybe<Host_Mutation_Response>;
  /** update single row of the table: "host" */
  update_host_by_pk?: Maybe<Host>;
  /** update data of the table: "question" */
  update_question?: Maybe<Question_Mutation_Response>;
  /** update single row of the table: "question" */
  update_question_by_pk?: Maybe<Question>;
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
  /** fetch data from the table: "game" */
  game: Array<Game>;
  /** fetch aggregated fields from the table: "game" */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
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
  question_text: Scalars['String'];
  updated_at: Scalars['timestamptz'];
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
};

/** order by avg() on columns of table "question" */
export type Question_Avg_Order_By = {
  point_value?: Maybe<Order_By>;
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
};

/** input type for inserting data into table "question" */
export type Question_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game?: Maybe<Game_Obj_Rel_Insert_Input>;
  game_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  point_value?: Maybe<Scalars['Int']>;
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
  question_text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "question" */
export type Question_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  point_value?: Maybe<Order_By>;
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
  question_text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "question" */
export type Question_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  point_value?: Maybe<Order_By>;
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
  question_text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Question_Stddev_Fields = {
  __typename?: 'question_stddev_fields';
  point_value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "question" */
export type Question_Stddev_Order_By = {
  point_value?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Question_Stddev_Pop_Fields = {
  __typename?: 'question_stddev_pop_fields';
  point_value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "question" */
export type Question_Stddev_Pop_Order_By = {
  point_value?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Question_Stddev_Samp_Fields = {
  __typename?: 'question_stddev_samp_fields';
  point_value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "question" */
export type Question_Stddev_Samp_Order_By = {
  point_value?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Question_Sum_Fields = {
  __typename?: 'question_sum_fields';
  point_value?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "question" */
export type Question_Sum_Order_By = {
  point_value?: Maybe<Order_By>;
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
  QuestionText = 'question_text',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Question_Var_Pop_Fields = {
  __typename?: 'question_var_pop_fields';
  point_value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "question" */
export type Question_Var_Pop_Order_By = {
  point_value?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Question_Var_Samp_Fields = {
  __typename?: 'question_var_samp_fields';
  point_value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "question" */
export type Question_Var_Samp_Order_By = {
  point_value?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Question_Variance_Fields = {
  __typename?: 'question_variance_fields';
  point_value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "question" */
export type Question_Variance_Order_By = {
  point_value?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "game" */
  game: Array<Game>;
  /** fetch aggregated fields from the table: "game" */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
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

export type QuestionFormComponentFragment = (
  { __typename?: 'question' }
  & Pick<Question, 'id' | 'question_text' | 'point_value'>
);

export type QuestionComponentFragment = (
  { __typename?: 'question' }
  & Pick<Question, 'id' | 'game_id' | 'question_text' | 'point_value'>
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

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = (
  { __typename?: 'query_root' }
  & { question: Array<(
    { __typename?: 'question' }
    & Pick<Question, 'id'>
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
export const GamePageDocument = gql`
    query GamePage($gameId: uuid!) {
  game_by_pk(id: $gameId) {
    id
    name
    questions {
      ...QuestionComponent
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