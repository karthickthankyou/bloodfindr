import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  timestamptz: any
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>
  _gt?: InputMaybe<Scalars['Boolean']>
  _gte?: InputMaybe<Scalars['Boolean']>
  _in?: InputMaybe<Array<Scalars['Boolean']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Boolean']>
  _lte?: InputMaybe<Scalars['Boolean']>
  _neq?: InputMaybe<Scalars['Boolean']>
  _nin?: InputMaybe<Array<Scalars['Boolean']>>
}

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']>
  _gt?: InputMaybe<Scalars['Float']>
  _gte?: InputMaybe<Scalars['Float']>
  _in?: InputMaybe<Array<Scalars['Float']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Float']>
  _lte?: InputMaybe<Scalars['Float']>
  _neq?: InputMaybe<Scalars['Float']>
  _nin?: InputMaybe<Array<Scalars['Float']>>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _is_null?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

/** The collection of different blood groups in existence.  */
export type Blood_Groups = {
  __typename?: 'blood_groups'
  type: Scalars['String']
}

/** aggregated selection of "blood_groups" */
export type Blood_Groups_Aggregate = {
  __typename?: 'blood_groups_aggregate'
  aggregate?: Maybe<Blood_Groups_Aggregate_Fields>
  nodes: Array<Blood_Groups>
}

/** aggregate fields of "blood_groups" */
export type Blood_Groups_Aggregate_Fields = {
  __typename?: 'blood_groups_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Blood_Groups_Max_Fields>
  min?: Maybe<Blood_Groups_Min_Fields>
}

/** aggregate fields of "blood_groups" */
export type Blood_Groups_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blood_Groups_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "blood_groups". All fields are combined with a logical 'AND'. */
export type Blood_Groups_Bool_Exp = {
  _and?: InputMaybe<Array<Blood_Groups_Bool_Exp>>
  _not?: InputMaybe<Blood_Groups_Bool_Exp>
  _or?: InputMaybe<Array<Blood_Groups_Bool_Exp>>
  type?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "blood_groups" */
export enum Blood_Groups_Constraint {
  /** unique or primary key constraint */
  BloodGroupsPkey = 'blood_groups_pkey',
}

export enum Blood_Groups_Enum {
  AbNegative = 'AB_NEGATIVE',
  AbPositive = 'AB_POSITIVE',
  ANegative = 'A_NEGATIVE',
  APositive = 'A_POSITIVE',
  BNegative = 'B_NEGATIVE',
  BPositive = 'B_POSITIVE',
  ONegative = 'O_NEGATIVE',
  OPositive = 'O_POSITIVE',
}

/** Boolean expression to compare columns of type "blood_groups_enum". All fields are combined with logical 'AND'. */
export type Blood_Groups_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Blood_Groups_Enum>
  _in?: InputMaybe<Array<Blood_Groups_Enum>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _neq?: InputMaybe<Blood_Groups_Enum>
  _nin?: InputMaybe<Array<Blood_Groups_Enum>>
}

/** input type for inserting data into table "blood_groups" */
export type Blood_Groups_Insert_Input = {
  type?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Blood_Groups_Max_Fields = {
  __typename?: 'blood_groups_max_fields'
  type?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Blood_Groups_Min_Fields = {
  __typename?: 'blood_groups_min_fields'
  type?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "blood_groups" */
export type Blood_Groups_Mutation_Response = {
  __typename?: 'blood_groups_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Blood_Groups>
}

/** on_conflict condition type for table "blood_groups" */
export type Blood_Groups_On_Conflict = {
  constraint: Blood_Groups_Constraint
  update_columns?: Array<Blood_Groups_Update_Column>
  where?: InputMaybe<Blood_Groups_Bool_Exp>
}

/** Ordering options when selecting data from "blood_groups". */
export type Blood_Groups_Order_By = {
  type?: InputMaybe<Order_By>
}

/** primary key columns input for table: blood_groups */
export type Blood_Groups_Pk_Columns_Input = {
  type: Scalars['String']
}

/** select columns of table "blood_groups" */
export enum Blood_Groups_Select_Column {
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "blood_groups" */
export type Blood_Groups_Set_Input = {
  type?: InputMaybe<Scalars['String']>
}

/** update columns of table "blood_groups" */
export enum Blood_Groups_Update_Column {
  /** column name */
  Type = 'type',
}

/** The messages in each post */
export type Messages = {
  __typename?: 'messages'
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  message: Scalars['String']
  post_id: Scalars['Int']
  uid: Scalars['String']
  updated_at: Scalars['timestamptz']
}

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate'
  aggregate?: Maybe<Messages_Aggregate_Fields>
  nodes: Array<Messages>
}

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields'
  avg?: Maybe<Messages_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Messages_Max_Fields>
  min?: Maybe<Messages_Min_Fields>
  stddev?: Maybe<Messages_Stddev_Fields>
  stddev_pop?: Maybe<Messages_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Messages_Stddev_Samp_Fields>
  sum?: Maybe<Messages_Sum_Fields>
  var_pop?: Maybe<Messages_Var_Pop_Fields>
  var_samp?: Maybe<Messages_Var_Samp_Fields>
  variance?: Maybe<Messages_Variance_Fields>
}

/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Messages_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Messages_Avg_Fields = {
  __typename?: 'messages_avg_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: InputMaybe<Array<Messages_Bool_Exp>>
  _not?: InputMaybe<Messages_Bool_Exp>
  _or?: InputMaybe<Array<Messages_Bool_Exp>>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  message?: InputMaybe<String_Comparison_Exp>
  post_id?: InputMaybe<Int_Comparison_Exp>
  uid?: InputMaybe<String_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey',
}

/** input type for incrementing numeric columns in table "messages" */
export type Messages_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>
  post_id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  message?: InputMaybe<Scalars['String']>
  post_id?: InputMaybe<Scalars['Int']>
  uid?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  message?: Maybe<Scalars['String']>
  post_id?: Maybe<Scalars['Int']>
  uid?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  message?: Maybe<Scalars['String']>
  post_id?: Maybe<Scalars['Int']>
  uid?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Messages>
}

/** on_conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint
  update_columns?: Array<Messages_Update_Column>
  where?: InputMaybe<Messages_Bool_Exp>
}

/** Ordering options when selecting data from "messages". */
export type Messages_Order_By = {
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  message?: InputMaybe<Order_By>
  post_id?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** primary key columns input for table: messages */
export type Messages_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  message?: InputMaybe<Scalars['String']>
  post_id?: InputMaybe<Scalars['Int']>
  uid?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Messages_Stddev_Fields = {
  __typename?: 'messages_stddev_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Messages_Stddev_Pop_Fields = {
  __typename?: 'messages_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Messages_Stddev_Samp_Fields = {
  __typename?: 'messages_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Messages_Sum_Fields = {
  __typename?: 'messages_sum_fields'
  id?: Maybe<Scalars['Int']>
  post_id?: Maybe<Scalars['Int']>
}

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Messages_Var_Pop_Fields = {
  __typename?: 'messages_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Messages_Var_Samp_Fields = {
  __typename?: 'messages_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Messages_Variance_Fields = {
  __typename?: 'messages_variance_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "blood_groups" */
  delete_blood_groups?: Maybe<Blood_Groups_Mutation_Response>
  /** delete single row from the table: "blood_groups" */
  delete_blood_groups_by_pk?: Maybe<Blood_Groups>
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>
  /** delete data from the table: "statuses" */
  delete_statuses?: Maybe<Statuses_Mutation_Response>
  /** delete single row from the table: "statuses" */
  delete_statuses_by_pk?: Maybe<Statuses>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** insert data into the table: "blood_groups" */
  insert_blood_groups?: Maybe<Blood_Groups_Mutation_Response>
  /** insert a single row into the table: "blood_groups" */
  insert_blood_groups_one?: Maybe<Blood_Groups>
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>
  /** insert data into the table: "statuses" */
  insert_statuses?: Maybe<Statuses_Mutation_Response>
  /** insert a single row into the table: "statuses" */
  insert_statuses_one?: Maybe<Statuses>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** update data of the table: "blood_groups" */
  update_blood_groups?: Maybe<Blood_Groups_Mutation_Response>
  /** update single row of the table: "blood_groups" */
  update_blood_groups_by_pk?: Maybe<Blood_Groups>
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>
  /** update data of the table: "statuses" */
  update_statuses?: Maybe<Statuses_Mutation_Response>
  /** update single row of the table: "statuses" */
  update_statuses_by_pk?: Maybe<Statuses>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
}

/** mutation root */
export type Mutation_RootDelete_Blood_GroupsArgs = {
  where: Blood_Groups_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Blood_Groups_By_PkArgs = {
  type: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_StatusesArgs = {
  where: Statuses_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Statuses_By_PkArgs = {
  type: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  uid: Scalars['String']
}

/** mutation root */
export type Mutation_RootInsert_Blood_GroupsArgs = {
  objects: Array<Blood_Groups_Insert_Input>
  on_conflict?: InputMaybe<Blood_Groups_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Blood_Groups_OneArgs = {
  object: Blood_Groups_Insert_Input
  on_conflict?: InputMaybe<Blood_Groups_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>
  on_conflict?: InputMaybe<Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input
  on_conflict?: InputMaybe<Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>
  on_conflict?: InputMaybe<Posts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input
  on_conflict?: InputMaybe<Posts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_StatusesArgs = {
  objects: Array<Statuses_Insert_Input>
  on_conflict?: InputMaybe<Statuses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Statuses_OneArgs = {
  object: Statuses_Insert_Input
  on_conflict?: InputMaybe<Statuses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_Blood_GroupsArgs = {
  _set?: InputMaybe<Blood_Groups_Set_Input>
  where: Blood_Groups_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Blood_Groups_By_PkArgs = {
  _set?: InputMaybe<Blood_Groups_Set_Input>
  pk_columns: Blood_Groups_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _inc?: InputMaybe<Messages_Inc_Input>
  _set?: InputMaybe<Messages_Set_Input>
  where: Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _inc?: InputMaybe<Messages_Inc_Input>
  _set?: InputMaybe<Messages_Set_Input>
  pk_columns: Messages_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>
  _set?: InputMaybe<Posts_Set_Input>
  where: Posts_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>
  _set?: InputMaybe<Posts_Set_Input>
  pk_columns: Posts_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_StatusesArgs = {
  _set?: InputMaybe<Statuses_Set_Input>
  where: Statuses_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Statuses_By_PkArgs = {
  _set?: InputMaybe<Statuses_Set_Input>
  pk_columns: Statuses_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** This is where people post new requirements for their blood needs */
export type Posts = {
  __typename?: 'posts'
  address: Scalars['String']
  created_at: Scalars['timestamptz']
  emergency?: Maybe<Scalars['Boolean']>
  group: Blood_Groups_Enum
  id: Scalars['Int']
  lat: Scalars['Float']
  lng: Scalars['Float']
  message: Scalars['String']
  status: Scalars['String']
  uid: Scalars['String']
  updated_at: Scalars['timestamptz']
}

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate'
  aggregate?: Maybe<Posts_Aggregate_Fields>
  nodes: Array<Posts>
}

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields'
  avg?: Maybe<Posts_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Posts_Max_Fields>
  min?: Maybe<Posts_Min_Fields>
  stddev?: Maybe<Posts_Stddev_Fields>
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>
  sum?: Maybe<Posts_Sum_Fields>
  var_pop?: Maybe<Posts_Var_Pop_Fields>
  var_samp?: Maybe<Posts_Var_Samp_Fields>
  variance?: Maybe<Posts_Variance_Fields>
}

/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Posts_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields'
  id?: Maybe<Scalars['Float']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Posts_Bool_Exp>>
  _not?: InputMaybe<Posts_Bool_Exp>
  _or?: InputMaybe<Array<Posts_Bool_Exp>>
  address?: InputMaybe<String_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  emergency?: InputMaybe<Boolean_Comparison_Exp>
  group?: InputMaybe<Blood_Groups_Enum_Comparison_Exp>
  id?: InputMaybe<Int_Comparison_Exp>
  lat?: InputMaybe<Float_Comparison_Exp>
  lng?: InputMaybe<Float_Comparison_Exp>
  message?: InputMaybe<String_Comparison_Exp>
  status?: InputMaybe<String_Comparison_Exp>
  uid?: InputMaybe<String_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey',
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>
  lat?: InputMaybe<Scalars['Float']>
  lng?: InputMaybe<Scalars['Float']>
}

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  address?: InputMaybe<Scalars['String']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  emergency?: InputMaybe<Scalars['Boolean']>
  group?: InputMaybe<Blood_Groups_Enum>
  id?: InputMaybe<Scalars['Int']>
  lat?: InputMaybe<Scalars['Float']>
  lng?: InputMaybe<Scalars['Float']>
  message?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields'
  address?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  message?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields'
  address?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  message?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Posts>
}

/** on_conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint
  update_columns?: Array<Posts_Update_Column>
  where?: InputMaybe<Posts_Bool_Exp>
}

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  address?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  emergency?: InputMaybe<Order_By>
  group?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  lat?: InputMaybe<Order_By>
  lng?: InputMaybe<Order_By>
  message?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Emergency = 'emergency',
  /** column name */
  Group = 'group',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lng = 'lng',
  /** column name */
  Message = 'message',
  /** column name */
  Status = 'status',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  address?: InputMaybe<Scalars['String']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  emergency?: InputMaybe<Scalars['Boolean']>
  group?: InputMaybe<Blood_Groups_Enum>
  id?: InputMaybe<Scalars['Int']>
  lat?: InputMaybe<Scalars['Float']>
  lng?: InputMaybe<Scalars['Float']>
  message?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields'
  id?: Maybe<Scalars['Float']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields'
  id?: Maybe<Scalars['Int']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
}

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Emergency = 'emergency',
  /** column name */
  Group = 'group',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lng = 'lng',
  /** column name */
  Message = 'message',
  /** column name */
  Status = 'status',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields'
  id?: Maybe<Scalars['Float']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "blood_groups" */
  blood_groups: Array<Blood_Groups>
  /** fetch aggregated fields from the table: "blood_groups" */
  blood_groups_aggregate: Blood_Groups_Aggregate
  /** fetch data from the table: "blood_groups" using primary key columns */
  blood_groups_by_pk?: Maybe<Blood_Groups>
  /** fetch data from the table: "messages" */
  messages: Array<Messages>
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>
  /** fetch data from the table: "posts" */
  posts: Array<Posts>
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>
  /** fetch data from the table: "statuses" */
  statuses: Array<Statuses>
  /** fetch aggregated fields from the table: "statuses" */
  statuses_aggregate: Statuses_Aggregate
  /** fetch data from the table: "statuses" using primary key columns */
  statuses_by_pk?: Maybe<Statuses>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Query_RootBlood_GroupsArgs = {
  distinct_on?: InputMaybe<Array<Blood_Groups_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Blood_Groups_Order_By>>
  where?: InputMaybe<Blood_Groups_Bool_Exp>
}

export type Query_RootBlood_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blood_Groups_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Blood_Groups_Order_By>>
  where?: InputMaybe<Blood_Groups_Bool_Exp>
}

export type Query_RootBlood_Groups_By_PkArgs = {
  type: Scalars['String']
}

export type Query_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Messages_Order_By>>
  where?: InputMaybe<Messages_Bool_Exp>
}

export type Query_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Messages_Order_By>>
  where?: InputMaybe<Messages_Bool_Exp>
}

export type Query_RootMessages_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Posts_Order_By>>
  where?: InputMaybe<Posts_Bool_Exp>
}

export type Query_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Posts_Order_By>>
  where?: InputMaybe<Posts_Bool_Exp>
}

export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootStatusesArgs = {
  distinct_on?: InputMaybe<Array<Statuses_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Statuses_Order_By>>
  where?: InputMaybe<Statuses_Bool_Exp>
}

export type Query_RootStatuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Statuses_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Statuses_Order_By>>
  where?: InputMaybe<Statuses_Bool_Exp>
}

export type Query_RootStatuses_By_PkArgs = {
  type: Scalars['String']
}

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootUsers_By_PkArgs = {
  uid: Scalars['String']
}

/** The statuses that the the requirement posts will go through */
export type Statuses = {
  __typename?: 'statuses'
  type: Scalars['String']
}

/** aggregated selection of "statuses" */
export type Statuses_Aggregate = {
  __typename?: 'statuses_aggregate'
  aggregate?: Maybe<Statuses_Aggregate_Fields>
  nodes: Array<Statuses>
}

/** aggregate fields of "statuses" */
export type Statuses_Aggregate_Fields = {
  __typename?: 'statuses_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Statuses_Max_Fields>
  min?: Maybe<Statuses_Min_Fields>
}

/** aggregate fields of "statuses" */
export type Statuses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Statuses_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "statuses". All fields are combined with a logical 'AND'. */
export type Statuses_Bool_Exp = {
  _and?: InputMaybe<Array<Statuses_Bool_Exp>>
  _not?: InputMaybe<Statuses_Bool_Exp>
  _or?: InputMaybe<Array<Statuses_Bool_Exp>>
  type?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "statuses" */
export enum Statuses_Constraint {
  /** unique or primary key constraint */
  StatusesPkey = 'statuses_pkey',
}

/** input type for inserting data into table "statuses" */
export type Statuses_Insert_Input = {
  type?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Statuses_Max_Fields = {
  __typename?: 'statuses_max_fields'
  type?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Statuses_Min_Fields = {
  __typename?: 'statuses_min_fields'
  type?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "statuses" */
export type Statuses_Mutation_Response = {
  __typename?: 'statuses_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Statuses>
}

/** on_conflict condition type for table "statuses" */
export type Statuses_On_Conflict = {
  constraint: Statuses_Constraint
  update_columns?: Array<Statuses_Update_Column>
  where?: InputMaybe<Statuses_Bool_Exp>
}

/** Ordering options when selecting data from "statuses". */
export type Statuses_Order_By = {
  type?: InputMaybe<Order_By>
}

/** primary key columns input for table: statuses */
export type Statuses_Pk_Columns_Input = {
  type: Scalars['String']
}

/** select columns of table "statuses" */
export enum Statuses_Select_Column {
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "statuses" */
export type Statuses_Set_Input = {
  type?: InputMaybe<Scalars['String']>
}

/** update columns of table "statuses" */
export enum Statuses_Update_Column {
  /** column name */
  Type = 'type',
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "blood_groups" */
  blood_groups: Array<Blood_Groups>
  /** fetch aggregated fields from the table: "blood_groups" */
  blood_groups_aggregate: Blood_Groups_Aggregate
  /** fetch data from the table: "blood_groups" using primary key columns */
  blood_groups_by_pk?: Maybe<Blood_Groups>
  /** fetch data from the table: "messages" */
  messages: Array<Messages>
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>
  /** fetch data from the table: "posts" */
  posts: Array<Posts>
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>
  /** fetch data from the table: "statuses" */
  statuses: Array<Statuses>
  /** fetch aggregated fields from the table: "statuses" */
  statuses_aggregate: Statuses_Aggregate
  /** fetch data from the table: "statuses" using primary key columns */
  statuses_by_pk?: Maybe<Statuses>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Subscription_RootBlood_GroupsArgs = {
  distinct_on?: InputMaybe<Array<Blood_Groups_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Blood_Groups_Order_By>>
  where?: InputMaybe<Blood_Groups_Bool_Exp>
}

export type Subscription_RootBlood_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blood_Groups_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Blood_Groups_Order_By>>
  where?: InputMaybe<Blood_Groups_Bool_Exp>
}

export type Subscription_RootBlood_Groups_By_PkArgs = {
  type: Scalars['String']
}

export type Subscription_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Messages_Order_By>>
  where?: InputMaybe<Messages_Bool_Exp>
}

export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Messages_Order_By>>
  where?: InputMaybe<Messages_Bool_Exp>
}

export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Posts_Order_By>>
  where?: InputMaybe<Posts_Bool_Exp>
}

export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Posts_Order_By>>
  where?: InputMaybe<Posts_Bool_Exp>
}

export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootStatusesArgs = {
  distinct_on?: InputMaybe<Array<Statuses_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Statuses_Order_By>>
  where?: InputMaybe<Statuses_Bool_Exp>
}

export type Subscription_RootStatuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Statuses_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Statuses_Order_By>>
  where?: InputMaybe<Statuses_Bool_Exp>
}

export type Subscription_RootStatuses_By_PkArgs = {
  type: Scalars['String']
}

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_By_PkArgs = {
  uid: Scalars['String']
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>
  _gt?: InputMaybe<Scalars['timestamptz']>
  _gte?: InputMaybe<Scalars['timestamptz']>
  _in?: InputMaybe<Array<Scalars['timestamptz']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamptz']>
  _lte?: InputMaybe<Scalars['timestamptz']>
  _neq?: InputMaybe<Scalars['timestamptz']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>
}

/** User information */
export type Users = {
  __typename?: 'users'
  about?: Maybe<Scalars['String']>
  created_at: Scalars['timestamptz']
  group?: Maybe<Blood_Groups_Enum>
  last_seen: Scalars['timestamptz']
  name?: Maybe<Scalars['String']>
  uid: Scalars['String']
  updated_at: Scalars['timestamptz']
  username?: Maybe<Scalars['String']>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>
  _not?: InputMaybe<Users_Bool_Exp>
  _or?: InputMaybe<Array<Users_Bool_Exp>>
  about?: InputMaybe<String_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  group?: InputMaybe<Blood_Groups_Enum_Comparison_Exp>
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  uid?: InputMaybe<String_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  username?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint */
  UsersUsernameKey = 'users_username_key',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  about?: InputMaybe<Scalars['String']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  group?: InputMaybe<Blood_Groups_Enum>
  last_seen?: InputMaybe<Scalars['timestamptz']>
  name?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  username?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  about?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  last_seen?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  username?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  about?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  last_seen?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  username?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns?: Array<Users_Update_Column>
  where?: InputMaybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  about?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  group?: InputMaybe<Order_By>
  last_seen?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  uid?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  username?: InputMaybe<Order_By>
}

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  uid: Scalars['String']
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  About = 'about',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Group = 'group',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  about?: InputMaybe<Scalars['String']>
  created_at?: InputMaybe<Scalars['timestamptz']>
  group?: InputMaybe<Blood_Groups_Enum>
  last_seen?: InputMaybe<Scalars['timestamptz']>
  name?: InputMaybe<Scalars['String']>
  uid?: InputMaybe<Scalars['String']>
  updated_at?: InputMaybe<Scalars['timestamptz']>
  username?: InputMaybe<Scalars['String']>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  About = 'about',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Group = 'group',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username',
}

export type MyQueryQueryVariables = Exact<{ [key: string]: never }>

export type MyQueryQuery = {
  __typename?: 'query_root'
  blood_groups: Array<{ __typename?: 'blood_groups'; type: string }>
}

export type GetPostByIdQueryVariables = Exact<{
  id: Scalars['Int']
}>

export type GetPostByIdQuery = {
  __typename?: 'query_root'
  posts_by_pk?: {
    __typename?: 'posts'
    address: string
    created_at: any
    emergency?: boolean | null
    group: Blood_Groups_Enum
    id: number
    lat: number
    lng: number
    message: string
    status: string
    uid: string
    updated_at: any
  } | null
}

export type GetPostsQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Posts_Select_Column> | Posts_Select_Column>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Posts_Order_By> | Posts_Order_By>
  where?: InputMaybe<Posts_Bool_Exp>
}>

export type GetPostsQuery = {
  __typename?: 'query_root'
  posts: Array<{
    __typename?: 'posts'
    address: string
    created_at: any
    emergency?: boolean | null
    lat: number
    lng: number
    id: number
  }>
}

export type GetUsernamesQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>
}>

export type GetUsernamesQuery = {
  __typename?: 'query_root'
  users: Array<{ __typename?: 'users'; username?: string | null }>
}

export type GetUserQueryVariables = Exact<{
  uid: Scalars['String']
}>

export type GetUserQuery = {
  __typename?: 'query_root'
  users_by_pk?: {
    __typename?: 'users'
    about?: string | null
    created_at: any
    group?: Blood_Groups_Enum | null
    last_seen: any
    name?: string | null
    uid: string
    updated_at: any
    username?: string | null
  } | null
}

export type InsertUserIdMutationVariables = Exact<{
  uid: Scalars['String']
}>

export type InsertUserIdMutation = {
  __typename?: 'mutation_root'
  insert_users_one?: { __typename?: 'users'; uid: string } | null
}

export const namedOperations = {
  Query: {
    MyQuery: 'MyQuery',
    GetPostById: 'GetPostById',
    GetPosts: 'GetPosts',
    GetUsernames: 'GetUsernames',
    GetUser: 'GetUser',
  },
  Mutation: {
    InsertUserId: 'InsertUserId',
  },
}

export const MyQueryDocument = /*#__PURE__*/ gql`
  query MyQuery {
    blood_groups {
      type
    }
  }
`

export function useMyQueryQuery(
  options?: Omit<Urql.UseQueryArgs<MyQueryQueryVariables>, 'query'>
) {
  return Urql.useQuery<MyQueryQuery>({ query: MyQueryDocument, ...options })
}
export const GetPostByIdDocument = /*#__PURE__*/ gql`
  query GetPostById($id: Int!) {
    posts_by_pk(id: $id) {
      address
      created_at
      emergency
      group
      id
      lat
      lng
      message
      status
      uid
      updated_at
    }
  }
`

export function useGetPostByIdQuery(
  options: Omit<Urql.UseQueryArgs<GetPostByIdQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetPostByIdQuery>({
    query: GetPostByIdDocument,
    ...options,
  })
}
export const GetPostsDocument = /*#__PURE__*/ gql`
  query GetPosts(
    $distinct_on: [posts_select_column!]
    $limit: Int
    $offset: Int
    $order_by: [posts_order_by!]
    $where: posts_bool_exp
  ) {
    posts(
      distinct_on: $distinct_on
      limit: $limit
      offset: $offset
      order_by: $order_by
      where: $where
    ) {
      address
      created_at
      emergency
      lat
      lng
      id
    }
  }
`

export function useGetPostsQuery(
  options?: Omit<Urql.UseQueryArgs<GetPostsQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetPostsQuery>({ query: GetPostsDocument, ...options })
}
export const GetUsernamesDocument = /*#__PURE__*/ gql`
  query GetUsernames($username: String) {
    users(where: { username: { _eq: $username } }) {
      username
    }
  }
`

export function useGetUsernamesQuery(
  options?: Omit<Urql.UseQueryArgs<GetUsernamesQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetUsernamesQuery>({
    query: GetUsernamesDocument,
    ...options,
  })
}
export const GetUserDocument = /*#__PURE__*/ gql`
  query GetUser($uid: String!) {
    users_by_pk(uid: $uid) {
      about
      created_at
      group
      last_seen
      name
      uid
      updated_at
      username
    }
  }
`

export function useGetUserQuery(
  options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetUserQuery>({ query: GetUserDocument, ...options })
}
export const InsertUserIdDocument = /*#__PURE__*/ gql`
  mutation InsertUserId($uid: String!) {
    insert_users_one(object: { uid: $uid }) {
      uid
    }
  }
`

export function useInsertUserIdMutation() {
  return Urql.useMutation<InsertUserIdMutation, InsertUserIdMutationVariables>(
    InsertUserIdDocument
  )
}
