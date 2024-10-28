export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
  EmailAddress: { input: string; output: string; }
  JSON: { input: Record<string, unknown>; output: Record<string, unknown>; }
  JSONObject: { input: Record<string, unknown>; output: Record<string, unknown>; }
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean']['output'];
  categories?: Maybe<CategoriesAccess>;
  customers?: Maybe<CustomersAccess>;
  media?: Maybe<MediaAccess>;
  pages?: Maybe<PagesAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  tenants?: Maybe<TenantsAccess>;
  users?: Maybe<UsersAccess>;
};

export type Categories = {
  __typename?: 'Categories';
  docs?: Maybe<Array<Maybe<Category>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type CategoriesCreateAccess = {
  __typename?: 'CategoriesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesCreateDocAccess = {
  __typename?: 'CategoriesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesDeleteAccess = {
  __typename?: 'CategoriesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesDeleteDocAccess = {
  __typename?: 'CategoriesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesDocAccessFields = {
  __typename?: 'CategoriesDocAccessFields';
  createdAt?: Maybe<CategoriesDocAccessFields_CreatedAt>;
  slug?: Maybe<CategoriesDocAccessFields_Slug>;
  title?: Maybe<CategoriesDocAccessFields_Title>;
  updatedAt?: Maybe<CategoriesDocAccessFields_UpdatedAt>;
};

export type CategoriesDocAccessFields_CreatedAt = {
  __typename?: 'CategoriesDocAccessFields_createdAt';
  create?: Maybe<CategoriesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<CategoriesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<CategoriesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CategoriesDocAccessFields_CreatedAt_Update>;
};

export type CategoriesDocAccessFields_CreatedAt_Create = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_CreatedAt_Read = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_CreatedAt_Update = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Slug = {
  __typename?: 'CategoriesDocAccessFields_slug';
  create?: Maybe<CategoriesDocAccessFields_Slug_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Slug_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Slug_Read>;
  update?: Maybe<CategoriesDocAccessFields_Slug_Update>;
};

export type CategoriesDocAccessFields_Slug_Create = {
  __typename?: 'CategoriesDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Slug_Delete = {
  __typename?: 'CategoriesDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Slug_Read = {
  __typename?: 'CategoriesDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Slug_Update = {
  __typename?: 'CategoriesDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title = {
  __typename?: 'CategoriesDocAccessFields_title';
  create?: Maybe<CategoriesDocAccessFields_Title_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Title_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Title_Read>;
  update?: Maybe<CategoriesDocAccessFields_Title_Update>;
};

export type CategoriesDocAccessFields_Title_Create = {
  __typename?: 'CategoriesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title_Delete = {
  __typename?: 'CategoriesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title_Read = {
  __typename?: 'CategoriesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title_Update = {
  __typename?: 'CategoriesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt = {
  __typename?: 'CategoriesDocAccessFields_updatedAt';
  create?: Maybe<CategoriesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<CategoriesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<CategoriesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CategoriesDocAccessFields_UpdatedAt_Update>;
};

export type CategoriesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields = {
  __typename?: 'CategoriesFields';
  createdAt?: Maybe<CategoriesFields_CreatedAt>;
  slug?: Maybe<CategoriesFields_Slug>;
  title?: Maybe<CategoriesFields_Title>;
  updatedAt?: Maybe<CategoriesFields_UpdatedAt>;
};

export type CategoriesFields_CreatedAt = {
  __typename?: 'CategoriesFields_createdAt';
  create?: Maybe<CategoriesFields_CreatedAt_Create>;
  delete?: Maybe<CategoriesFields_CreatedAt_Delete>;
  read?: Maybe<CategoriesFields_CreatedAt_Read>;
  update?: Maybe<CategoriesFields_CreatedAt_Update>;
};

export type CategoriesFields_CreatedAt_Create = {
  __typename?: 'CategoriesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_CreatedAt_Delete = {
  __typename?: 'CategoriesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_CreatedAt_Read = {
  __typename?: 'CategoriesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_CreatedAt_Update = {
  __typename?: 'CategoriesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Slug = {
  __typename?: 'CategoriesFields_slug';
  create?: Maybe<CategoriesFields_Slug_Create>;
  delete?: Maybe<CategoriesFields_Slug_Delete>;
  read?: Maybe<CategoriesFields_Slug_Read>;
  update?: Maybe<CategoriesFields_Slug_Update>;
};

export type CategoriesFields_Slug_Create = {
  __typename?: 'CategoriesFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Slug_Delete = {
  __typename?: 'CategoriesFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Slug_Read = {
  __typename?: 'CategoriesFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Slug_Update = {
  __typename?: 'CategoriesFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title = {
  __typename?: 'CategoriesFields_title';
  create?: Maybe<CategoriesFields_Title_Create>;
  delete?: Maybe<CategoriesFields_Title_Delete>;
  read?: Maybe<CategoriesFields_Title_Read>;
  update?: Maybe<CategoriesFields_Title_Update>;
};

export type CategoriesFields_Title_Create = {
  __typename?: 'CategoriesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title_Delete = {
  __typename?: 'CategoriesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title_Read = {
  __typename?: 'CategoriesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title_Update = {
  __typename?: 'CategoriesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt = {
  __typename?: 'CategoriesFields_updatedAt';
  create?: Maybe<CategoriesFields_UpdatedAt_Create>;
  delete?: Maybe<CategoriesFields_UpdatedAt_Delete>;
  read?: Maybe<CategoriesFields_UpdatedAt_Read>;
  update?: Maybe<CategoriesFields_UpdatedAt_Update>;
};

export type CategoriesFields_UpdatedAt_Create = {
  __typename?: 'CategoriesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt_Delete = {
  __typename?: 'CategoriesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt_Read = {
  __typename?: 'CategoriesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt_Update = {
  __typename?: 'CategoriesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesReadAccess = {
  __typename?: 'CategoriesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesReadDocAccess = {
  __typename?: 'CategoriesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesUpdateAccess = {
  __typename?: 'CategoriesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesUpdateDocAccess = {
  __typename?: 'CategoriesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Category_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Category_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Category_Where = {
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  slug?: InputMaybe<Category_Slug_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Category_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  slug?: InputMaybe<Category_Slug_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Category_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  slug?: InputMaybe<Category_Slug_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Customer = {
  __typename?: 'Customer';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  firstName: Scalars['String']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  password: Scalars['String']['output'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Customer_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Customer_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type Customer_FirstName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Customer_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Customer_LastName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Customer_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Customer_Where = {
  AND?: InputMaybe<Array<InputMaybe<Customer_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Customer_Where_Or>>>;
  createdAt?: InputMaybe<Customer_CreatedAt_Operator>;
  email?: InputMaybe<Customer_Email_Operator>;
  firstName?: InputMaybe<Customer_FirstName_Operator>;
  id?: InputMaybe<Customer_Id_Operator>;
  lastName?: InputMaybe<Customer_LastName_Operator>;
  updatedAt?: InputMaybe<Customer_UpdatedAt_Operator>;
};

export type Customer_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Customer_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Customer_Where_Or>>>;
  createdAt?: InputMaybe<Customer_CreatedAt_Operator>;
  email?: InputMaybe<Customer_Email_Operator>;
  firstName?: InputMaybe<Customer_FirstName_Operator>;
  id?: InputMaybe<Customer_Id_Operator>;
  lastName?: InputMaybe<Customer_LastName_Operator>;
  updatedAt?: InputMaybe<Customer_UpdatedAt_Operator>;
};

export type Customer_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Customer_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Customer_Where_Or>>>;
  createdAt?: InputMaybe<Customer_CreatedAt_Operator>;
  email?: InputMaybe<Customer_Email_Operator>;
  firstName?: InputMaybe<Customer_FirstName_Operator>;
  id?: InputMaybe<Customer_Id_Operator>;
  lastName?: InputMaybe<Customer_LastName_Operator>;
  updatedAt?: InputMaybe<Customer_UpdatedAt_Operator>;
};

export type Customers = {
  __typename?: 'Customers';
  docs?: Maybe<Array<Maybe<Customer>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type CustomersCreateAccess = {
  __typename?: 'CustomersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CustomersCreateDocAccess = {
  __typename?: 'CustomersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CustomersDeleteAccess = {
  __typename?: 'CustomersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CustomersDeleteDocAccess = {
  __typename?: 'CustomersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CustomersDocAccessFields = {
  __typename?: 'CustomersDocAccessFields';
  createdAt?: Maybe<CustomersDocAccessFields_CreatedAt>;
  email?: Maybe<CustomersDocAccessFields_Email>;
  firstName?: Maybe<CustomersDocAccessFields_FirstName>;
  lastName?: Maybe<CustomersDocAccessFields_LastName>;
  password?: Maybe<CustomersDocAccessFields_Password>;
  updatedAt?: Maybe<CustomersDocAccessFields_UpdatedAt>;
};

export type CustomersDocAccessFields_CreatedAt = {
  __typename?: 'CustomersDocAccessFields_createdAt';
  create?: Maybe<CustomersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<CustomersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<CustomersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CustomersDocAccessFields_CreatedAt_Update>;
};

export type CustomersDocAccessFields_CreatedAt_Create = {
  __typename?: 'CustomersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'CustomersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_CreatedAt_Read = {
  __typename?: 'CustomersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_CreatedAt_Update = {
  __typename?: 'CustomersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_Email = {
  __typename?: 'CustomersDocAccessFields_email';
  create?: Maybe<CustomersDocAccessFields_Email_Create>;
  delete?: Maybe<CustomersDocAccessFields_Email_Delete>;
  read?: Maybe<CustomersDocAccessFields_Email_Read>;
  update?: Maybe<CustomersDocAccessFields_Email_Update>;
};

export type CustomersDocAccessFields_Email_Create = {
  __typename?: 'CustomersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_Email_Delete = {
  __typename?: 'CustomersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_Email_Read = {
  __typename?: 'CustomersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_Email_Update = {
  __typename?: 'CustomersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_FirstName = {
  __typename?: 'CustomersDocAccessFields_firstName';
  create?: Maybe<CustomersDocAccessFields_FirstName_Create>;
  delete?: Maybe<CustomersDocAccessFields_FirstName_Delete>;
  read?: Maybe<CustomersDocAccessFields_FirstName_Read>;
  update?: Maybe<CustomersDocAccessFields_FirstName_Update>;
};

export type CustomersDocAccessFields_FirstName_Create = {
  __typename?: 'CustomersDocAccessFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_FirstName_Delete = {
  __typename?: 'CustomersDocAccessFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_FirstName_Read = {
  __typename?: 'CustomersDocAccessFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_FirstName_Update = {
  __typename?: 'CustomersDocAccessFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_LastName = {
  __typename?: 'CustomersDocAccessFields_lastName';
  create?: Maybe<CustomersDocAccessFields_LastName_Create>;
  delete?: Maybe<CustomersDocAccessFields_LastName_Delete>;
  read?: Maybe<CustomersDocAccessFields_LastName_Read>;
  update?: Maybe<CustomersDocAccessFields_LastName_Update>;
};

export type CustomersDocAccessFields_LastName_Create = {
  __typename?: 'CustomersDocAccessFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_LastName_Delete = {
  __typename?: 'CustomersDocAccessFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_LastName_Read = {
  __typename?: 'CustomersDocAccessFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_LastName_Update = {
  __typename?: 'CustomersDocAccessFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_Password = {
  __typename?: 'CustomersDocAccessFields_password';
  create?: Maybe<CustomersDocAccessFields_Password_Create>;
  delete?: Maybe<CustomersDocAccessFields_Password_Delete>;
  read?: Maybe<CustomersDocAccessFields_Password_Read>;
  update?: Maybe<CustomersDocAccessFields_Password_Update>;
};

export type CustomersDocAccessFields_Password_Create = {
  __typename?: 'CustomersDocAccessFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_Password_Delete = {
  __typename?: 'CustomersDocAccessFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_Password_Read = {
  __typename?: 'CustomersDocAccessFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_Password_Update = {
  __typename?: 'CustomersDocAccessFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_UpdatedAt = {
  __typename?: 'CustomersDocAccessFields_updatedAt';
  create?: Maybe<CustomersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<CustomersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<CustomersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CustomersDocAccessFields_UpdatedAt_Update>;
};

export type CustomersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'CustomersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'CustomersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'CustomersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CustomersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'CustomersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields = {
  __typename?: 'CustomersFields';
  createdAt?: Maybe<CustomersFields_CreatedAt>;
  email?: Maybe<CustomersFields_Email>;
  firstName?: Maybe<CustomersFields_FirstName>;
  lastName?: Maybe<CustomersFields_LastName>;
  password?: Maybe<CustomersFields_Password>;
  updatedAt?: Maybe<CustomersFields_UpdatedAt>;
};

export type CustomersFields_CreatedAt = {
  __typename?: 'CustomersFields_createdAt';
  create?: Maybe<CustomersFields_CreatedAt_Create>;
  delete?: Maybe<CustomersFields_CreatedAt_Delete>;
  read?: Maybe<CustomersFields_CreatedAt_Read>;
  update?: Maybe<CustomersFields_CreatedAt_Update>;
};

export type CustomersFields_CreatedAt_Create = {
  __typename?: 'CustomersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_CreatedAt_Delete = {
  __typename?: 'CustomersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_CreatedAt_Read = {
  __typename?: 'CustomersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_CreatedAt_Update = {
  __typename?: 'CustomersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_Email = {
  __typename?: 'CustomersFields_email';
  create?: Maybe<CustomersFields_Email_Create>;
  delete?: Maybe<CustomersFields_Email_Delete>;
  read?: Maybe<CustomersFields_Email_Read>;
  update?: Maybe<CustomersFields_Email_Update>;
};

export type CustomersFields_Email_Create = {
  __typename?: 'CustomersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_Email_Delete = {
  __typename?: 'CustomersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_Email_Read = {
  __typename?: 'CustomersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_Email_Update = {
  __typename?: 'CustomersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_FirstName = {
  __typename?: 'CustomersFields_firstName';
  create?: Maybe<CustomersFields_FirstName_Create>;
  delete?: Maybe<CustomersFields_FirstName_Delete>;
  read?: Maybe<CustomersFields_FirstName_Read>;
  update?: Maybe<CustomersFields_FirstName_Update>;
};

export type CustomersFields_FirstName_Create = {
  __typename?: 'CustomersFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_FirstName_Delete = {
  __typename?: 'CustomersFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_FirstName_Read = {
  __typename?: 'CustomersFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_FirstName_Update = {
  __typename?: 'CustomersFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_LastName = {
  __typename?: 'CustomersFields_lastName';
  create?: Maybe<CustomersFields_LastName_Create>;
  delete?: Maybe<CustomersFields_LastName_Delete>;
  read?: Maybe<CustomersFields_LastName_Read>;
  update?: Maybe<CustomersFields_LastName_Update>;
};

export type CustomersFields_LastName_Create = {
  __typename?: 'CustomersFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_LastName_Delete = {
  __typename?: 'CustomersFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_LastName_Read = {
  __typename?: 'CustomersFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_LastName_Update = {
  __typename?: 'CustomersFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_Password = {
  __typename?: 'CustomersFields_password';
  create?: Maybe<CustomersFields_Password_Create>;
  delete?: Maybe<CustomersFields_Password_Delete>;
  read?: Maybe<CustomersFields_Password_Read>;
  update?: Maybe<CustomersFields_Password_Update>;
};

export type CustomersFields_Password_Create = {
  __typename?: 'CustomersFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_Password_Delete = {
  __typename?: 'CustomersFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_Password_Read = {
  __typename?: 'CustomersFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_Password_Update = {
  __typename?: 'CustomersFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_UpdatedAt = {
  __typename?: 'CustomersFields_updatedAt';
  create?: Maybe<CustomersFields_UpdatedAt_Create>;
  delete?: Maybe<CustomersFields_UpdatedAt_Delete>;
  read?: Maybe<CustomersFields_UpdatedAt_Read>;
  update?: Maybe<CustomersFields_UpdatedAt_Update>;
};

export type CustomersFields_UpdatedAt_Create = {
  __typename?: 'CustomersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_UpdatedAt_Delete = {
  __typename?: 'CustomersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_UpdatedAt_Read = {
  __typename?: 'CustomersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CustomersFields_UpdatedAt_Update = {
  __typename?: 'CustomersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CustomersReadAccess = {
  __typename?: 'CustomersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CustomersReadDocAccess = {
  __typename?: 'CustomersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CustomersUnlockAccess = {
  __typename?: 'CustomersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CustomersUnlockDocAccess = {
  __typename?: 'CustomersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CustomersUpdateAccess = {
  __typename?: 'CustomersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CustomersUpdateDocAccess = {
  __typename?: 'CustomersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media = {
  __typename?: 'Media';
  alt: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  sizes?: Maybe<Media_Sizes>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  sizes?: Maybe<MediaDocAccessFields_Sizes>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes = {
  __typename?: 'MediaDocAccessFields_sizes';
  create?: Maybe<MediaDocAccessFields_Sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  __typename?: 'MediaDocAccessFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  card?: Maybe<MediaDocAccessFields_Sizes_Card>;
  feature?: Maybe<MediaDocAccessFields_Sizes_Feature>;
};

export type MediaDocAccessFields_Sizes_Read = {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Update = {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card = {
  __typename?: 'MediaDocAccessFields_sizes_card';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Card_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_card_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Card_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Card_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Card_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Card_Width>;
};

export type MediaDocAccessFields_Sizes_Card_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height = {
  __typename?: 'MediaDocAccessFields_sizes_card_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url = {
  __typename?: 'MediaDocAccessFields_sizes_card_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width = {
  __typename?: 'MediaDocAccessFields_sizes_card_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature = {
  __typename?: 'MediaDocAccessFields_sizes_feature';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Feature_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Feature_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Feature_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Feature_Width>;
};

export type MediaDocAccessFields_Sizes_Feature_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  sizes?: Maybe<MediaFields_Sizes>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_FocalX_Create>;
  delete?: Maybe<MediaFields_FocalX_Delete>;
  read?: Maybe<MediaFields_FocalX_Read>;
  update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_FocalY_Create>;
  delete?: Maybe<MediaFields_FocalY_Delete>;
  read?: Maybe<MediaFields_FocalY_Read>;
  update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes = {
  __typename?: 'MediaFields_sizes';
  create?: Maybe<MediaFields_Sizes_Create>;
  delete?: Maybe<MediaFields_Sizes_Delete>;
  fields?: Maybe<MediaFields_Sizes_Fields>;
  read?: Maybe<MediaFields_Sizes_Read>;
  update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  __typename?: 'MediaFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Delete = {
  __typename?: 'MediaFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Fields = {
  __typename?: 'MediaFields_sizes_Fields';
  card?: Maybe<MediaFields_Sizes_Card>;
  feature?: Maybe<MediaFields_Sizes_Feature>;
};

export type MediaFields_Sizes_Read = {
  __typename?: 'MediaFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Update = {
  __typename?: 'MediaFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card = {
  __typename?: 'MediaFields_sizes_card';
  create?: Maybe<MediaFields_Sizes_Card_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Delete>;
  fields?: Maybe<MediaFields_Sizes_Card_Fields>;
  read?: Maybe<MediaFields_Sizes_Card_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Update>;
};

export type MediaFields_Sizes_Card_Create = {
  __typename?: 'MediaFields_sizes_card_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Delete = {
  __typename?: 'MediaFields_sizes_card_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Fields = {
  __typename?: 'MediaFields_sizes_card_Fields';
  filename?: Maybe<MediaFields_Sizes_Card_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Card_Filesize>;
  height?: Maybe<MediaFields_Sizes_Card_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Card_MimeType>;
  url?: Maybe<MediaFields_Sizes_Card_Url>;
  width?: Maybe<MediaFields_Sizes_Card_Width>;
};

export type MediaFields_Sizes_Card_Read = {
  __typename?: 'MediaFields_sizes_card_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Update = {
  __typename?: 'MediaFields_sizes_card_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename = {
  __typename?: 'MediaFields_sizes_card_filename';
  create?: Maybe<MediaFields_Sizes_Card_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filename_Update>;
};

export type MediaFields_Sizes_Card_Filename_Create = {
  __typename?: 'MediaFields_sizes_card_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Delete = {
  __typename?: 'MediaFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Read = {
  __typename?: 'MediaFields_sizes_card_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Update = {
  __typename?: 'MediaFields_sizes_card_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize = {
  __typename?: 'MediaFields_sizes_card_filesize';
  create?: Maybe<MediaFields_Sizes_Card_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filesize_Update>;
};

export type MediaFields_Sizes_Card_Filesize_Create = {
  __typename?: 'MediaFields_sizes_card_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Read = {
  __typename?: 'MediaFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Update = {
  __typename?: 'MediaFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height = {
  __typename?: 'MediaFields_sizes_card_height';
  create?: Maybe<MediaFields_Sizes_Card_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Height_Update>;
};

export type MediaFields_Sizes_Card_Height_Create = {
  __typename?: 'MediaFields_sizes_card_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Delete = {
  __typename?: 'MediaFields_sizes_card_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Read = {
  __typename?: 'MediaFields_sizes_card_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Update = {
  __typename?: 'MediaFields_sizes_card_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType = {
  __typename?: 'MediaFields_sizes_card_mimeType';
  create?: Maybe<MediaFields_Sizes_Card_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Card_MimeType_Update>;
};

export type MediaFields_Sizes_Card_MimeType_Create = {
  __typename?: 'MediaFields_sizes_card_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Read = {
  __typename?: 'MediaFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Update = {
  __typename?: 'MediaFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url = {
  __typename?: 'MediaFields_sizes_card_url';
  create?: Maybe<MediaFields_Sizes_Card_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Url_Update>;
};

export type MediaFields_Sizes_Card_Url_Create = {
  __typename?: 'MediaFields_sizes_card_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Delete = {
  __typename?: 'MediaFields_sizes_card_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Read = {
  __typename?: 'MediaFields_sizes_card_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Update = {
  __typename?: 'MediaFields_sizes_card_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width = {
  __typename?: 'MediaFields_sizes_card_width';
  create?: Maybe<MediaFields_Sizes_Card_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Width_Update>;
};

export type MediaFields_Sizes_Card_Width_Create = {
  __typename?: 'MediaFields_sizes_card_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Delete = {
  __typename?: 'MediaFields_sizes_card_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Read = {
  __typename?: 'MediaFields_sizes_card_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Update = {
  __typename?: 'MediaFields_sizes_card_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature = {
  __typename?: 'MediaFields_sizes_feature';
  create?: Maybe<MediaFields_Sizes_Feature_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Delete>;
  fields?: Maybe<MediaFields_Sizes_Feature_Fields>;
  read?: Maybe<MediaFields_Sizes_Feature_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Update>;
};

export type MediaFields_Sizes_Feature_Create = {
  __typename?: 'MediaFields_sizes_feature_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Delete = {
  __typename?: 'MediaFields_sizes_feature_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Fields = {
  __typename?: 'MediaFields_sizes_feature_Fields';
  filename?: Maybe<MediaFields_Sizes_Feature_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Feature_Filesize>;
  height?: Maybe<MediaFields_Sizes_Feature_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Feature_MimeType>;
  url?: Maybe<MediaFields_Sizes_Feature_Url>;
  width?: Maybe<MediaFields_Sizes_Feature_Width>;
};

export type MediaFields_Sizes_Feature_Read = {
  __typename?: 'MediaFields_sizes_feature_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Update = {
  __typename?: 'MediaFields_sizes_feature_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename = {
  __typename?: 'MediaFields_sizes_feature_filename';
  create?: Maybe<MediaFields_Sizes_Feature_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Filename_Update>;
};

export type MediaFields_Sizes_Feature_Filename_Create = {
  __typename?: 'MediaFields_sizes_feature_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename_Delete = {
  __typename?: 'MediaFields_sizes_feature_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename_Read = {
  __typename?: 'MediaFields_sizes_feature_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename_Update = {
  __typename?: 'MediaFields_sizes_feature_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize = {
  __typename?: 'MediaFields_sizes_feature_filesize';
  create?: Maybe<MediaFields_Sizes_Feature_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Filesize_Update>;
};

export type MediaFields_Sizes_Feature_Filesize_Create = {
  __typename?: 'MediaFields_sizes_feature_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_feature_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize_Read = {
  __typename?: 'MediaFields_sizes_feature_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize_Update = {
  __typename?: 'MediaFields_sizes_feature_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height = {
  __typename?: 'MediaFields_sizes_feature_height';
  create?: Maybe<MediaFields_Sizes_Feature_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Height_Update>;
};

export type MediaFields_Sizes_Feature_Height_Create = {
  __typename?: 'MediaFields_sizes_feature_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height_Delete = {
  __typename?: 'MediaFields_sizes_feature_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height_Read = {
  __typename?: 'MediaFields_sizes_feature_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height_Update = {
  __typename?: 'MediaFields_sizes_feature_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType = {
  __typename?: 'MediaFields_sizes_feature_mimeType';
  create?: Maybe<MediaFields_Sizes_Feature_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_MimeType_Update>;
};

export type MediaFields_Sizes_Feature_MimeType_Create = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType_Read = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType_Update = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url = {
  __typename?: 'MediaFields_sizes_feature_url';
  create?: Maybe<MediaFields_Sizes_Feature_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Url_Update>;
};

export type MediaFields_Sizes_Feature_Url_Create = {
  __typename?: 'MediaFields_sizes_feature_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url_Delete = {
  __typename?: 'MediaFields_sizes_feature_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url_Read = {
  __typename?: 'MediaFields_sizes_feature_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url_Update = {
  __typename?: 'MediaFields_sizes_feature_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width = {
  __typename?: 'MediaFields_sizes_feature_width';
  create?: Maybe<MediaFields_Sizes_Feature_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Width_Update>;
};

export type MediaFields_Sizes_Feature_Width_Create = {
  __typename?: 'MediaFields_sizes_feature_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width_Delete = {
  __typename?: 'MediaFields_sizes_feature_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width_Read = {
  __typename?: 'MediaFields_sizes_feature_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width_Update = {
  __typename?: 'MediaFields_sizes_feature_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Sizes = {
  __typename?: 'Media_Sizes';
  card?: Maybe<Media_Sizes_Card>;
  feature?: Maybe<Media_Sizes_Feature>;
};

export type Media_Sizes_Card = {
  __typename?: 'Media_Sizes_Card';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Feature = {
  __typename?: 'Media_Sizes_Feature';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Card__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<Category>;
  createCustomer?: Maybe<Customer>;
  createMedia?: Maybe<Media>;
  createPage?: Maybe<Page>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createTenant?: Maybe<Tenant>;
  createUser?: Maybe<User>;
  deleteCategory?: Maybe<Category>;
  deleteCustomer?: Maybe<Customer>;
  deleteMedia?: Maybe<Media>;
  deletePage?: Maybe<Page>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteTenant?: Maybe<Tenant>;
  deleteUser?: Maybe<User>;
  forgotPasswordCustomer: Scalars['Boolean']['output'];
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginCustomer?: Maybe<CustomersLoginResult>;
  loginUser?: Maybe<UsersLoginResult>;
  logoutCustomer?: Maybe<Scalars['String']['output']>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenCustomer?: Maybe<CustomersRefreshedCustomer>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordCustomer?: Maybe<CustomersResetPassword>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockCustomer: Scalars['Boolean']['output'];
  unlockUser: Scalars['Boolean']['output'];
  updateCategory?: Maybe<Category>;
  updateCustomer?: Maybe<Customer>;
  updateMedia?: Maybe<Media>;
  updatePage?: Maybe<Page>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateTenant?: Maybe<Tenant>;
  updateUser?: Maybe<User>;
  verifyEmailCustomer?: Maybe<Scalars['Boolean']['output']>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateCategoryArgs = {
  data: MutationCategoryInput;
};


export type MutationCreateCustomerArgs = {
  data: MutationCustomerInput;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
};


export type MutationCreatePageArgs = {
  data: MutationPageInput;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
};


export type MutationCreateTenantArgs = {
  data: MutationTenantInput;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePageArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTenantArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordCustomerArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginCustomerArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResetPasswordCustomerArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockCustomerArgs = {
  email: Scalars['String']['input'];
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateCategoryArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationCategoryUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateCustomerArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationCustomerUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdatePageArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPageUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateTenantArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationTenantUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationVerifyEmailCustomerArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Page = {
  __typename?: 'Page';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  keywords?: Maybe<Scalars['String']['output']>;
  pageTitle: Scalars['String']['output'];
  richText: Scalars['JSON']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Tenant>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageRichTextArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Page_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Page_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Keywords_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_PageTitle_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_RichText_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Page_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Tenant_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Page_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Where = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  description?: InputMaybe<Page_Description_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  keywords?: InputMaybe<Page_Keywords_Operator>;
  pageTitle?: InputMaybe<Page_PageTitle_Operator>;
  richText?: InputMaybe<Page_RichText_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  tenant?: InputMaybe<Page_Tenant_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  description?: InputMaybe<Page_Description_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  keywords?: InputMaybe<Page_Keywords_Operator>;
  pageTitle?: InputMaybe<Page_PageTitle_Operator>;
  richText?: InputMaybe<Page_RichText_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  tenant?: InputMaybe<Page_Tenant_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  description?: InputMaybe<Page_Description_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  keywords?: InputMaybe<Page_Keywords_Operator>;
  pageTitle?: InputMaybe<Page_PageTitle_Operator>;
  richText?: InputMaybe<Page_RichText_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  tenant?: InputMaybe<Page_Tenant_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Pages = {
  __typename?: 'Pages';
  docs?: Maybe<Array<Maybe<Page>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PagesCreateAccess = {
  __typename?: 'PagesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesCreateDocAccess = {
  __typename?: 'PagesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteAccess = {
  __typename?: 'PagesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteDocAccess = {
  __typename?: 'PagesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDocAccessFields = {
  __typename?: 'PagesDocAccessFields';
  createdAt?: Maybe<PagesDocAccessFields_CreatedAt>;
  description?: Maybe<PagesDocAccessFields_Description>;
  keywords?: Maybe<PagesDocAccessFields_Keywords>;
  pageTitle?: Maybe<PagesDocAccessFields_PageTitle>;
  richText?: Maybe<PagesDocAccessFields_RichText>;
  slug?: Maybe<PagesDocAccessFields_Slug>;
  tenant?: Maybe<PagesDocAccessFields_Tenant>;
  title?: Maybe<PagesDocAccessFields_Title>;
  updatedAt?: Maybe<PagesDocAccessFields_UpdatedAt>;
};

export type PagesDocAccessFields_CreatedAt = {
  __typename?: 'PagesDocAccessFields_createdAt';
  create?: Maybe<PagesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PagesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PagesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PagesDocAccessFields_CreatedAt_Update>;
};

export type PagesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PagesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PagesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PagesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PagesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Description = {
  __typename?: 'PagesDocAccessFields_description';
  create?: Maybe<PagesDocAccessFields_Description_Create>;
  delete?: Maybe<PagesDocAccessFields_Description_Delete>;
  read?: Maybe<PagesDocAccessFields_Description_Read>;
  update?: Maybe<PagesDocAccessFields_Description_Update>;
};

export type PagesDocAccessFields_Description_Create = {
  __typename?: 'PagesDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Description_Delete = {
  __typename?: 'PagesDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Description_Read = {
  __typename?: 'PagesDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Description_Update = {
  __typename?: 'PagesDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Keywords = {
  __typename?: 'PagesDocAccessFields_keywords';
  create?: Maybe<PagesDocAccessFields_Keywords_Create>;
  delete?: Maybe<PagesDocAccessFields_Keywords_Delete>;
  read?: Maybe<PagesDocAccessFields_Keywords_Read>;
  update?: Maybe<PagesDocAccessFields_Keywords_Update>;
};

export type PagesDocAccessFields_Keywords_Create = {
  __typename?: 'PagesDocAccessFields_keywords_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Keywords_Delete = {
  __typename?: 'PagesDocAccessFields_keywords_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Keywords_Read = {
  __typename?: 'PagesDocAccessFields_keywords_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Keywords_Update = {
  __typename?: 'PagesDocAccessFields_keywords_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PageTitle = {
  __typename?: 'PagesDocAccessFields_pageTitle';
  create?: Maybe<PagesDocAccessFields_PageTitle_Create>;
  delete?: Maybe<PagesDocAccessFields_PageTitle_Delete>;
  read?: Maybe<PagesDocAccessFields_PageTitle_Read>;
  update?: Maybe<PagesDocAccessFields_PageTitle_Update>;
};

export type PagesDocAccessFields_PageTitle_Create = {
  __typename?: 'PagesDocAccessFields_pageTitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PageTitle_Delete = {
  __typename?: 'PagesDocAccessFields_pageTitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PageTitle_Read = {
  __typename?: 'PagesDocAccessFields_pageTitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PageTitle_Update = {
  __typename?: 'PagesDocAccessFields_pageTitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_RichText = {
  __typename?: 'PagesDocAccessFields_richText';
  create?: Maybe<PagesDocAccessFields_RichText_Create>;
  delete?: Maybe<PagesDocAccessFields_RichText_Delete>;
  read?: Maybe<PagesDocAccessFields_RichText_Read>;
  update?: Maybe<PagesDocAccessFields_RichText_Update>;
};

export type PagesDocAccessFields_RichText_Create = {
  __typename?: 'PagesDocAccessFields_richText_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_RichText_Delete = {
  __typename?: 'PagesDocAccessFields_richText_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_RichText_Read = {
  __typename?: 'PagesDocAccessFields_richText_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_RichText_Update = {
  __typename?: 'PagesDocAccessFields_richText_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug = {
  __typename?: 'PagesDocAccessFields_slug';
  create?: Maybe<PagesDocAccessFields_Slug_Create>;
  delete?: Maybe<PagesDocAccessFields_Slug_Delete>;
  read?: Maybe<PagesDocAccessFields_Slug_Read>;
  update?: Maybe<PagesDocAccessFields_Slug_Update>;
};

export type PagesDocAccessFields_Slug_Create = {
  __typename?: 'PagesDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Delete = {
  __typename?: 'PagesDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Read = {
  __typename?: 'PagesDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Update = {
  __typename?: 'PagesDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Tenant = {
  __typename?: 'PagesDocAccessFields_tenant';
  create?: Maybe<PagesDocAccessFields_Tenant_Create>;
  delete?: Maybe<PagesDocAccessFields_Tenant_Delete>;
  read?: Maybe<PagesDocAccessFields_Tenant_Read>;
  update?: Maybe<PagesDocAccessFields_Tenant_Update>;
};

export type PagesDocAccessFields_Tenant_Create = {
  __typename?: 'PagesDocAccessFields_tenant_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Tenant_Delete = {
  __typename?: 'PagesDocAccessFields_tenant_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Tenant_Read = {
  __typename?: 'PagesDocAccessFields_tenant_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Tenant_Update = {
  __typename?: 'PagesDocAccessFields_tenant_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title = {
  __typename?: 'PagesDocAccessFields_title';
  create?: Maybe<PagesDocAccessFields_Title_Create>;
  delete?: Maybe<PagesDocAccessFields_Title_Delete>;
  read?: Maybe<PagesDocAccessFields_Title_Read>;
  update?: Maybe<PagesDocAccessFields_Title_Update>;
};

export type PagesDocAccessFields_Title_Create = {
  __typename?: 'PagesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Delete = {
  __typename?: 'PagesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Read = {
  __typename?: 'PagesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Update = {
  __typename?: 'PagesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt = {
  __typename?: 'PagesDocAccessFields_updatedAt';
  create?: Maybe<PagesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PagesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PagesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PagesDocAccessFields_UpdatedAt_Update>;
};

export type PagesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PagesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PagesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PagesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PagesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields = {
  __typename?: 'PagesFields';
  createdAt?: Maybe<PagesFields_CreatedAt>;
  description?: Maybe<PagesFields_Description>;
  keywords?: Maybe<PagesFields_Keywords>;
  pageTitle?: Maybe<PagesFields_PageTitle>;
  richText?: Maybe<PagesFields_RichText>;
  slug?: Maybe<PagesFields_Slug>;
  tenant?: Maybe<PagesFields_Tenant>;
  title?: Maybe<PagesFields_Title>;
  updatedAt?: Maybe<PagesFields_UpdatedAt>;
};

export type PagesFields_CreatedAt = {
  __typename?: 'PagesFields_createdAt';
  create?: Maybe<PagesFields_CreatedAt_Create>;
  delete?: Maybe<PagesFields_CreatedAt_Delete>;
  read?: Maybe<PagesFields_CreatedAt_Read>;
  update?: Maybe<PagesFields_CreatedAt_Update>;
};

export type PagesFields_CreatedAt_Create = {
  __typename?: 'PagesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Delete = {
  __typename?: 'PagesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Read = {
  __typename?: 'PagesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Update = {
  __typename?: 'PagesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Description = {
  __typename?: 'PagesFields_description';
  create?: Maybe<PagesFields_Description_Create>;
  delete?: Maybe<PagesFields_Description_Delete>;
  read?: Maybe<PagesFields_Description_Read>;
  update?: Maybe<PagesFields_Description_Update>;
};

export type PagesFields_Description_Create = {
  __typename?: 'PagesFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Description_Delete = {
  __typename?: 'PagesFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Description_Read = {
  __typename?: 'PagesFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Description_Update = {
  __typename?: 'PagesFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Keywords = {
  __typename?: 'PagesFields_keywords';
  create?: Maybe<PagesFields_Keywords_Create>;
  delete?: Maybe<PagesFields_Keywords_Delete>;
  read?: Maybe<PagesFields_Keywords_Read>;
  update?: Maybe<PagesFields_Keywords_Update>;
};

export type PagesFields_Keywords_Create = {
  __typename?: 'PagesFields_keywords_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Keywords_Delete = {
  __typename?: 'PagesFields_keywords_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Keywords_Read = {
  __typename?: 'PagesFields_keywords_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Keywords_Update = {
  __typename?: 'PagesFields_keywords_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PageTitle = {
  __typename?: 'PagesFields_pageTitle';
  create?: Maybe<PagesFields_PageTitle_Create>;
  delete?: Maybe<PagesFields_PageTitle_Delete>;
  read?: Maybe<PagesFields_PageTitle_Read>;
  update?: Maybe<PagesFields_PageTitle_Update>;
};

export type PagesFields_PageTitle_Create = {
  __typename?: 'PagesFields_pageTitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PageTitle_Delete = {
  __typename?: 'PagesFields_pageTitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PageTitle_Read = {
  __typename?: 'PagesFields_pageTitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PageTitle_Update = {
  __typename?: 'PagesFields_pageTitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_RichText = {
  __typename?: 'PagesFields_richText';
  create?: Maybe<PagesFields_RichText_Create>;
  delete?: Maybe<PagesFields_RichText_Delete>;
  read?: Maybe<PagesFields_RichText_Read>;
  update?: Maybe<PagesFields_RichText_Update>;
};

export type PagesFields_RichText_Create = {
  __typename?: 'PagesFields_richText_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_RichText_Delete = {
  __typename?: 'PagesFields_richText_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_RichText_Read = {
  __typename?: 'PagesFields_richText_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_RichText_Update = {
  __typename?: 'PagesFields_richText_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug = {
  __typename?: 'PagesFields_slug';
  create?: Maybe<PagesFields_Slug_Create>;
  delete?: Maybe<PagesFields_Slug_Delete>;
  read?: Maybe<PagesFields_Slug_Read>;
  update?: Maybe<PagesFields_Slug_Update>;
};

export type PagesFields_Slug_Create = {
  __typename?: 'PagesFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Delete = {
  __typename?: 'PagesFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Read = {
  __typename?: 'PagesFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Update = {
  __typename?: 'PagesFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Tenant = {
  __typename?: 'PagesFields_tenant';
  create?: Maybe<PagesFields_Tenant_Create>;
  delete?: Maybe<PagesFields_Tenant_Delete>;
  read?: Maybe<PagesFields_Tenant_Read>;
  update?: Maybe<PagesFields_Tenant_Update>;
};

export type PagesFields_Tenant_Create = {
  __typename?: 'PagesFields_tenant_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Tenant_Delete = {
  __typename?: 'PagesFields_tenant_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Tenant_Read = {
  __typename?: 'PagesFields_tenant_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Tenant_Update = {
  __typename?: 'PagesFields_tenant_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title = {
  __typename?: 'PagesFields_title';
  create?: Maybe<PagesFields_Title_Create>;
  delete?: Maybe<PagesFields_Title_Delete>;
  read?: Maybe<PagesFields_Title_Read>;
  update?: Maybe<PagesFields_Title_Update>;
};

export type PagesFields_Title_Create = {
  __typename?: 'PagesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Delete = {
  __typename?: 'PagesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Read = {
  __typename?: 'PagesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Update = {
  __typename?: 'PagesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt = {
  __typename?: 'PagesFields_updatedAt';
  create?: Maybe<PagesFields_UpdatedAt_Create>;
  delete?: Maybe<PagesFields_UpdatedAt_Delete>;
  read?: Maybe<PagesFields_UpdatedAt_Read>;
  update?: Maybe<PagesFields_UpdatedAt_Update>;
};

export type PagesFields_UpdatedAt_Create = {
  __typename?: 'PagesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Delete = {
  __typename?: 'PagesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Read = {
  __typename?: 'PagesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Update = {
  __typename?: 'PagesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesReadAccess = {
  __typename?: 'PagesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadDocAccess = {
  __typename?: 'PagesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateAccess = {
  __typename?: 'PagesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateDocAccess = {
  __typename?: 'PagesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Customers = 'customers',
  Users = 'users'
}

export type PayloadPreference_User = Customer | User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Customers = 'customers',
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Customers = 'customers',
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Customers = 'customers',
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Categories?: Maybe<Categories>;
  Category?: Maybe<Category>;
  Customer?: Maybe<Customer>;
  Customers?: Maybe<Customers>;
  Media?: Maybe<Media>;
  Page?: Maybe<Page>;
  Pages?: Maybe<Pages>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  Tenant?: Maybe<Tenant>;
  Tenants?: Maybe<Tenants>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  countCategories?: Maybe<CountCategories>;
  countCustomers?: Maybe<CountCustomers>;
  countPages?: Maybe<CountPages>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  countTenants?: Maybe<CountTenants>;
  countUsers?: Maybe<CountUsers>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessCategory?: Maybe<CategoriesDocAccess>;
  docAccessCustomer?: Maybe<CustomersDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPage?: Maybe<PagesDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessTenant?: Maybe<TenantsDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedCustomer?: Maybe<Scalars['Boolean']['output']>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meCustomer?: Maybe<CustomersMe>;
  meUser?: Maybe<UsersMe>;
};


export type QueryCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Category_Where>;
};


export type QueryCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryCustomerArgs = {
  id: Scalars['String']['input'];
};


export type QueryCustomersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Customer_Where>;
};


export type QueryMediaArgs = {
  id: Scalars['String']['input'];
};


export type QueryPageArgs = {
  id: Scalars['String']['input'];
};


export type QueryPagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Page_Where>;
};


export type QueryPayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type QueryPayloadPreferencesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryTenantArgs = {
  id: Scalars['String']['input'];
};


export type QueryTenantsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Tenant_Where>;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryCountCategoriesArgs = {
  where?: InputMaybe<Category_Where>;
};


export type QueryCountCustomersArgs = {
  where?: InputMaybe<Customer_Where>;
};


export type QueryCountPagesArgs = {
  where?: InputMaybe<Page_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountTenantsArgs = {
  where?: InputMaybe<Tenant_Where>;
};


export type QueryCountUsersArgs = {
  where?: InputMaybe<User_Where>;
};


export type QueryCountallMediaArgs = {
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessCustomerArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPageArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessTenantArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String']['input'];
};

export type Tenant = {
  __typename?: 'Tenant';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  domains?: Maybe<Array<Tenant_Domains>>;
  id?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Tenant_Domains = {
  __typename?: 'Tenant_Domains';
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Tenant_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tenant_Domains__Domain_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tenant_Domains__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tenant_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tenant_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tenant_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tenant_Where = {
  AND?: InputMaybe<Array<InputMaybe<Tenant_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tenant_Where_Or>>>;
  createdAt?: InputMaybe<Tenant_CreatedAt_Operator>;
  domains__domain?: InputMaybe<Tenant_Domains__Domain_Operator>;
  domains__id?: InputMaybe<Tenant_Domains__Id_Operator>;
  id?: InputMaybe<Tenant_Id_Operator>;
  name?: InputMaybe<Tenant_Name_Operator>;
  updatedAt?: InputMaybe<Tenant_UpdatedAt_Operator>;
};

export type Tenant_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Tenant_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tenant_Where_Or>>>;
  createdAt?: InputMaybe<Tenant_CreatedAt_Operator>;
  domains__domain?: InputMaybe<Tenant_Domains__Domain_Operator>;
  domains__id?: InputMaybe<Tenant_Domains__Id_Operator>;
  id?: InputMaybe<Tenant_Id_Operator>;
  name?: InputMaybe<Tenant_Name_Operator>;
  updatedAt?: InputMaybe<Tenant_UpdatedAt_Operator>;
};

export type Tenant_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Tenant_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tenant_Where_Or>>>;
  createdAt?: InputMaybe<Tenant_CreatedAt_Operator>;
  domains__domain?: InputMaybe<Tenant_Domains__Domain_Operator>;
  domains__id?: InputMaybe<Tenant_Domains__Id_Operator>;
  id?: InputMaybe<Tenant_Id_Operator>;
  name?: InputMaybe<Tenant_Name_Operator>;
  updatedAt?: InputMaybe<Tenant_UpdatedAt_Operator>;
};

export type Tenants = {
  __typename?: 'Tenants';
  docs?: Maybe<Array<Maybe<Tenant>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type TenantsCreateAccess = {
  __typename?: 'TenantsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TenantsCreateDocAccess = {
  __typename?: 'TenantsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TenantsDeleteAccess = {
  __typename?: 'TenantsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TenantsDeleteDocAccess = {
  __typename?: 'TenantsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TenantsDocAccessFields = {
  __typename?: 'TenantsDocAccessFields';
  createdAt?: Maybe<TenantsDocAccessFields_CreatedAt>;
  domains?: Maybe<TenantsDocAccessFields_Domains>;
  name?: Maybe<TenantsDocAccessFields_Name>;
  updatedAt?: Maybe<TenantsDocAccessFields_UpdatedAt>;
};

export type TenantsDocAccessFields_CreatedAt = {
  __typename?: 'TenantsDocAccessFields_createdAt';
  create?: Maybe<TenantsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<TenantsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<TenantsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<TenantsDocAccessFields_CreatedAt_Update>;
};

export type TenantsDocAccessFields_CreatedAt_Create = {
  __typename?: 'TenantsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'TenantsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_CreatedAt_Read = {
  __typename?: 'TenantsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_CreatedAt_Update = {
  __typename?: 'TenantsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Domains = {
  __typename?: 'TenantsDocAccessFields_domains';
  create?: Maybe<TenantsDocAccessFields_Domains_Create>;
  delete?: Maybe<TenantsDocAccessFields_Domains_Delete>;
  fields?: Maybe<TenantsDocAccessFields_Domains_Fields>;
  read?: Maybe<TenantsDocAccessFields_Domains_Read>;
  update?: Maybe<TenantsDocAccessFields_Domains_Update>;
};

export type TenantsDocAccessFields_Domains_Create = {
  __typename?: 'TenantsDocAccessFields_domains_Create';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Domains_Delete = {
  __typename?: 'TenantsDocAccessFields_domains_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Domains_Fields = {
  __typename?: 'TenantsDocAccessFields_domains_Fields';
  domain?: Maybe<TenantsDocAccessFields_Domains_Domain>;
  id?: Maybe<TenantsDocAccessFields_Domains_Id>;
};

export type TenantsDocAccessFields_Domains_Read = {
  __typename?: 'TenantsDocAccessFields_domains_Read';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Domains_Update = {
  __typename?: 'TenantsDocAccessFields_domains_Update';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Domains_Domain = {
  __typename?: 'TenantsDocAccessFields_domains_domain';
  create?: Maybe<TenantsDocAccessFields_Domains_Domain_Create>;
  delete?: Maybe<TenantsDocAccessFields_Domains_Domain_Delete>;
  read?: Maybe<TenantsDocAccessFields_Domains_Domain_Read>;
  update?: Maybe<TenantsDocAccessFields_Domains_Domain_Update>;
};

export type TenantsDocAccessFields_Domains_Domain_Create = {
  __typename?: 'TenantsDocAccessFields_domains_domain_Create';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Domains_Domain_Delete = {
  __typename?: 'TenantsDocAccessFields_domains_domain_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Domains_Domain_Read = {
  __typename?: 'TenantsDocAccessFields_domains_domain_Read';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Domains_Domain_Update = {
  __typename?: 'TenantsDocAccessFields_domains_domain_Update';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Domains_Id = {
  __typename?: 'TenantsDocAccessFields_domains_id';
  create?: Maybe<TenantsDocAccessFields_Domains_Id_Create>;
  delete?: Maybe<TenantsDocAccessFields_Domains_Id_Delete>;
  read?: Maybe<TenantsDocAccessFields_Domains_Id_Read>;
  update?: Maybe<TenantsDocAccessFields_Domains_Id_Update>;
};

export type TenantsDocAccessFields_Domains_Id_Create = {
  __typename?: 'TenantsDocAccessFields_domains_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Domains_Id_Delete = {
  __typename?: 'TenantsDocAccessFields_domains_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Domains_Id_Read = {
  __typename?: 'TenantsDocAccessFields_domains_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Domains_Id_Update = {
  __typename?: 'TenantsDocAccessFields_domains_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Name = {
  __typename?: 'TenantsDocAccessFields_name';
  create?: Maybe<TenantsDocAccessFields_Name_Create>;
  delete?: Maybe<TenantsDocAccessFields_Name_Delete>;
  read?: Maybe<TenantsDocAccessFields_Name_Read>;
  update?: Maybe<TenantsDocAccessFields_Name_Update>;
};

export type TenantsDocAccessFields_Name_Create = {
  __typename?: 'TenantsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Name_Delete = {
  __typename?: 'TenantsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Name_Read = {
  __typename?: 'TenantsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_Name_Update = {
  __typename?: 'TenantsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_UpdatedAt = {
  __typename?: 'TenantsDocAccessFields_updatedAt';
  create?: Maybe<TenantsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<TenantsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<TenantsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<TenantsDocAccessFields_UpdatedAt_Update>;
};

export type TenantsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'TenantsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'TenantsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'TenantsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TenantsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'TenantsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields = {
  __typename?: 'TenantsFields';
  createdAt?: Maybe<TenantsFields_CreatedAt>;
  domains?: Maybe<TenantsFields_Domains>;
  name?: Maybe<TenantsFields_Name>;
  updatedAt?: Maybe<TenantsFields_UpdatedAt>;
};

export type TenantsFields_CreatedAt = {
  __typename?: 'TenantsFields_createdAt';
  create?: Maybe<TenantsFields_CreatedAt_Create>;
  delete?: Maybe<TenantsFields_CreatedAt_Delete>;
  read?: Maybe<TenantsFields_CreatedAt_Read>;
  update?: Maybe<TenantsFields_CreatedAt_Update>;
};

export type TenantsFields_CreatedAt_Create = {
  __typename?: 'TenantsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_CreatedAt_Delete = {
  __typename?: 'TenantsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_CreatedAt_Read = {
  __typename?: 'TenantsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_CreatedAt_Update = {
  __typename?: 'TenantsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Domains = {
  __typename?: 'TenantsFields_domains';
  create?: Maybe<TenantsFields_Domains_Create>;
  delete?: Maybe<TenantsFields_Domains_Delete>;
  fields?: Maybe<TenantsFields_Domains_Fields>;
  read?: Maybe<TenantsFields_Domains_Read>;
  update?: Maybe<TenantsFields_Domains_Update>;
};

export type TenantsFields_Domains_Create = {
  __typename?: 'TenantsFields_domains_Create';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Domains_Delete = {
  __typename?: 'TenantsFields_domains_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Domains_Fields = {
  __typename?: 'TenantsFields_domains_Fields';
  domain?: Maybe<TenantsFields_Domains_Domain>;
  id?: Maybe<TenantsFields_Domains_Id>;
};

export type TenantsFields_Domains_Read = {
  __typename?: 'TenantsFields_domains_Read';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Domains_Update = {
  __typename?: 'TenantsFields_domains_Update';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Domains_Domain = {
  __typename?: 'TenantsFields_domains_domain';
  create?: Maybe<TenantsFields_Domains_Domain_Create>;
  delete?: Maybe<TenantsFields_Domains_Domain_Delete>;
  read?: Maybe<TenantsFields_Domains_Domain_Read>;
  update?: Maybe<TenantsFields_Domains_Domain_Update>;
};

export type TenantsFields_Domains_Domain_Create = {
  __typename?: 'TenantsFields_domains_domain_Create';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Domains_Domain_Delete = {
  __typename?: 'TenantsFields_domains_domain_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Domains_Domain_Read = {
  __typename?: 'TenantsFields_domains_domain_Read';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Domains_Domain_Update = {
  __typename?: 'TenantsFields_domains_domain_Update';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Domains_Id = {
  __typename?: 'TenantsFields_domains_id';
  create?: Maybe<TenantsFields_Domains_Id_Create>;
  delete?: Maybe<TenantsFields_Domains_Id_Delete>;
  read?: Maybe<TenantsFields_Domains_Id_Read>;
  update?: Maybe<TenantsFields_Domains_Id_Update>;
};

export type TenantsFields_Domains_Id_Create = {
  __typename?: 'TenantsFields_domains_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Domains_Id_Delete = {
  __typename?: 'TenantsFields_domains_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Domains_Id_Read = {
  __typename?: 'TenantsFields_domains_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Domains_Id_Update = {
  __typename?: 'TenantsFields_domains_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Name = {
  __typename?: 'TenantsFields_name';
  create?: Maybe<TenantsFields_Name_Create>;
  delete?: Maybe<TenantsFields_Name_Delete>;
  read?: Maybe<TenantsFields_Name_Read>;
  update?: Maybe<TenantsFields_Name_Update>;
};

export type TenantsFields_Name_Create = {
  __typename?: 'TenantsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Name_Delete = {
  __typename?: 'TenantsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Name_Read = {
  __typename?: 'TenantsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_Name_Update = {
  __typename?: 'TenantsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_UpdatedAt = {
  __typename?: 'TenantsFields_updatedAt';
  create?: Maybe<TenantsFields_UpdatedAt_Create>;
  delete?: Maybe<TenantsFields_UpdatedAt_Delete>;
  read?: Maybe<TenantsFields_UpdatedAt_Read>;
  update?: Maybe<TenantsFields_UpdatedAt_Update>;
};

export type TenantsFields_UpdatedAt_Create = {
  __typename?: 'TenantsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_UpdatedAt_Delete = {
  __typename?: 'TenantsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_UpdatedAt_Read = {
  __typename?: 'TenantsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TenantsFields_UpdatedAt_Update = {
  __typename?: 'TenantsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TenantsReadAccess = {
  __typename?: 'TenantsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TenantsReadDocAccess = {
  __typename?: 'TenantsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TenantsUpdateAccess = {
  __typename?: 'TenantsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TenantsUpdateDocAccess = {
  __typename?: 'TenantsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastLoggedInTenant?: Maybe<Tenant>;
  lastName?: Maybe<Scalars['String']['output']>;
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  password: Scalars['String']['output'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<User_Roles>>;
  salt?: Maybe<Scalars['String']['output']>;
  tenants?: Maybe<Array<User_Tenants>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum UserUpdate_Tenants_Roles_MutationInput {
  Admin = 'admin',
  User = 'user'
}

export enum UserUpdate_Roles_MutationInput {
  SuperAdmin = 'super_admin',
  User = 'user'
}

export type User_Tenants = {
  __typename?: 'User_Tenants';
  id?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<User_Tenants_Roles>>;
  tenant?: Maybe<Tenant>;
};

export enum User_Tenants_Roles {
  Admin = 'admin',
  User = 'user'
}

export enum User_Tenants_Roles_MutationInput {
  Admin = 'admin',
  User = 'user'
}

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_FirstName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_LastLoggedInTenant_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type User_LastName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum User_Roles {
  SuperAdmin = 'super_admin',
  User = 'user'
}

export enum User_Roles_Input {
  SuperAdmin = 'super_admin',
  User = 'user'
}

export enum User_Roles_MutationInput {
  SuperAdmin = 'super_admin',
  User = 'user'
}

export type User_Roles_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  equals?: InputMaybe<User_Roles_Input>;
  in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  not_equals?: InputMaybe<User_Roles_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
};

export type User_Tenants__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum User_Tenants__Roles_Input {
  Admin = 'admin',
  User = 'user'
}

export type User_Tenants__Roles_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Tenants__Roles_Input>>>;
  equals?: InputMaybe<User_Tenants__Roles_Input>;
  in?: InputMaybe<Array<InputMaybe<User_Tenants__Roles_Input>>>;
  not_equals?: InputMaybe<User_Tenants__Roles_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Tenants__Roles_Input>>>;
};

export type User_Tenants__Tenant_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  firstName?: InputMaybe<User_FirstName_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  lastLoggedInTenant?: InputMaybe<User_LastLoggedInTenant_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  tenants__id?: InputMaybe<User_Tenants__Id_Operator>;
  tenants__roles?: InputMaybe<User_Tenants__Roles_Operator>;
  tenants__tenant?: InputMaybe<User_Tenants__Tenant_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  firstName?: InputMaybe<User_FirstName_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  lastLoggedInTenant?: InputMaybe<User_LastLoggedInTenant_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  tenants__id?: InputMaybe<User_Tenants__Id_Operator>;
  tenants__roles?: InputMaybe<User_Tenants__Roles_Operator>;
  tenants__tenant?: InputMaybe<User_Tenants__Tenant_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  firstName?: InputMaybe<User_FirstName_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  lastLoggedInTenant?: InputMaybe<User_LastLoggedInTenant_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  tenants__id?: InputMaybe<User_Tenants__Id_Operator>;
  tenants__roles?: InputMaybe<User_Tenants__Roles_Operator>;
  tenants__tenant?: InputMaybe<User_Tenants__Tenant_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  firstName?: Maybe<UsersDocAccessFields_FirstName>;
  lastLoggedInTenant?: Maybe<UsersDocAccessFields_LastLoggedInTenant>;
  lastName?: Maybe<UsersDocAccessFields_LastName>;
  password?: Maybe<UsersDocAccessFields_Password>;
  roles?: Maybe<UsersDocAccessFields_Roles>;
  tenants?: Maybe<UsersDocAccessFields_Tenants>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_FirstName = {
  __typename?: 'UsersDocAccessFields_firstName';
  create?: Maybe<UsersDocAccessFields_FirstName_Create>;
  delete?: Maybe<UsersDocAccessFields_FirstName_Delete>;
  read?: Maybe<UsersDocAccessFields_FirstName_Read>;
  update?: Maybe<UsersDocAccessFields_FirstName_Update>;
};

export type UsersDocAccessFields_FirstName_Create = {
  __typename?: 'UsersDocAccessFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_FirstName_Delete = {
  __typename?: 'UsersDocAccessFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_FirstName_Read = {
  __typename?: 'UsersDocAccessFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_FirstName_Update = {
  __typename?: 'UsersDocAccessFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastLoggedInTenant = {
  __typename?: 'UsersDocAccessFields_lastLoggedInTenant';
  create?: Maybe<UsersDocAccessFields_LastLoggedInTenant_Create>;
  delete?: Maybe<UsersDocAccessFields_LastLoggedInTenant_Delete>;
  read?: Maybe<UsersDocAccessFields_LastLoggedInTenant_Read>;
  update?: Maybe<UsersDocAccessFields_LastLoggedInTenant_Update>;
};

export type UsersDocAccessFields_LastLoggedInTenant_Create = {
  __typename?: 'UsersDocAccessFields_lastLoggedInTenant_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastLoggedInTenant_Delete = {
  __typename?: 'UsersDocAccessFields_lastLoggedInTenant_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastLoggedInTenant_Read = {
  __typename?: 'UsersDocAccessFields_lastLoggedInTenant_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastLoggedInTenant_Update = {
  __typename?: 'UsersDocAccessFields_lastLoggedInTenant_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastName = {
  __typename?: 'UsersDocAccessFields_lastName';
  create?: Maybe<UsersDocAccessFields_LastName_Create>;
  delete?: Maybe<UsersDocAccessFields_LastName_Delete>;
  read?: Maybe<UsersDocAccessFields_LastName_Read>;
  update?: Maybe<UsersDocAccessFields_LastName_Update>;
};

export type UsersDocAccessFields_LastName_Create = {
  __typename?: 'UsersDocAccessFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastName_Delete = {
  __typename?: 'UsersDocAccessFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastName_Read = {
  __typename?: 'UsersDocAccessFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastName_Update = {
  __typename?: 'UsersDocAccessFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles = {
  __typename?: 'UsersDocAccessFields_roles';
  create?: Maybe<UsersDocAccessFields_Roles_Create>;
  delete?: Maybe<UsersDocAccessFields_Roles_Delete>;
  read?: Maybe<UsersDocAccessFields_Roles_Read>;
  update?: Maybe<UsersDocAccessFields_Roles_Update>;
};

export type UsersDocAccessFields_Roles_Create = {
  __typename?: 'UsersDocAccessFields_roles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Delete = {
  __typename?: 'UsersDocAccessFields_roles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Read = {
  __typename?: 'UsersDocAccessFields_roles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Update = {
  __typename?: 'UsersDocAccessFields_roles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants = {
  __typename?: 'UsersDocAccessFields_tenants';
  create?: Maybe<UsersDocAccessFields_Tenants_Create>;
  delete?: Maybe<UsersDocAccessFields_Tenants_Delete>;
  fields?: Maybe<UsersDocAccessFields_Tenants_Fields>;
  read?: Maybe<UsersDocAccessFields_Tenants_Read>;
  update?: Maybe<UsersDocAccessFields_Tenants_Update>;
};

export type UsersDocAccessFields_Tenants_Create = {
  __typename?: 'UsersDocAccessFields_tenants_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants_Delete = {
  __typename?: 'UsersDocAccessFields_tenants_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants_Fields = {
  __typename?: 'UsersDocAccessFields_tenants_Fields';
  id?: Maybe<UsersDocAccessFields_Tenants_Id>;
  roles?: Maybe<UsersDocAccessFields_Tenants_Roles>;
  tenant?: Maybe<UsersDocAccessFields_Tenants_Tenant>;
};

export type UsersDocAccessFields_Tenants_Read = {
  __typename?: 'UsersDocAccessFields_tenants_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants_Update = {
  __typename?: 'UsersDocAccessFields_tenants_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants_Id = {
  __typename?: 'UsersDocAccessFields_tenants_id';
  create?: Maybe<UsersDocAccessFields_Tenants_Id_Create>;
  delete?: Maybe<UsersDocAccessFields_Tenants_Id_Delete>;
  read?: Maybe<UsersDocAccessFields_Tenants_Id_Read>;
  update?: Maybe<UsersDocAccessFields_Tenants_Id_Update>;
};

export type UsersDocAccessFields_Tenants_Id_Create = {
  __typename?: 'UsersDocAccessFields_tenants_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants_Id_Delete = {
  __typename?: 'UsersDocAccessFields_tenants_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants_Id_Read = {
  __typename?: 'UsersDocAccessFields_tenants_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants_Id_Update = {
  __typename?: 'UsersDocAccessFields_tenants_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants_Roles = {
  __typename?: 'UsersDocAccessFields_tenants_roles';
  create?: Maybe<UsersDocAccessFields_Tenants_Roles_Create>;
  delete?: Maybe<UsersDocAccessFields_Tenants_Roles_Delete>;
  read?: Maybe<UsersDocAccessFields_Tenants_Roles_Read>;
  update?: Maybe<UsersDocAccessFields_Tenants_Roles_Update>;
};

export type UsersDocAccessFields_Tenants_Roles_Create = {
  __typename?: 'UsersDocAccessFields_tenants_roles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants_Roles_Delete = {
  __typename?: 'UsersDocAccessFields_tenants_roles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants_Roles_Read = {
  __typename?: 'UsersDocAccessFields_tenants_roles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants_Roles_Update = {
  __typename?: 'UsersDocAccessFields_tenants_roles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants_Tenant = {
  __typename?: 'UsersDocAccessFields_tenants_tenant';
  create?: Maybe<UsersDocAccessFields_Tenants_Tenant_Create>;
  delete?: Maybe<UsersDocAccessFields_Tenants_Tenant_Delete>;
  read?: Maybe<UsersDocAccessFields_Tenants_Tenant_Read>;
  update?: Maybe<UsersDocAccessFields_Tenants_Tenant_Update>;
};

export type UsersDocAccessFields_Tenants_Tenant_Create = {
  __typename?: 'UsersDocAccessFields_tenants_tenant_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants_Tenant_Delete = {
  __typename?: 'UsersDocAccessFields_tenants_tenant_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants_Tenant_Read = {
  __typename?: 'UsersDocAccessFields_tenants_tenant_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Tenants_Tenant_Update = {
  __typename?: 'UsersDocAccessFields_tenants_tenant_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  firstName?: Maybe<UsersFields_FirstName>;
  lastLoggedInTenant?: Maybe<UsersFields_LastLoggedInTenant>;
  lastName?: Maybe<UsersFields_LastName>;
  password?: Maybe<UsersFields_Password>;
  roles?: Maybe<UsersFields_Roles>;
  tenants?: Maybe<UsersFields_Tenants>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_FirstName = {
  __typename?: 'UsersFields_firstName';
  create?: Maybe<UsersFields_FirstName_Create>;
  delete?: Maybe<UsersFields_FirstName_Delete>;
  read?: Maybe<UsersFields_FirstName_Read>;
  update?: Maybe<UsersFields_FirstName_Update>;
};

export type UsersFields_FirstName_Create = {
  __typename?: 'UsersFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_FirstName_Delete = {
  __typename?: 'UsersFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_FirstName_Read = {
  __typename?: 'UsersFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_FirstName_Update = {
  __typename?: 'UsersFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastLoggedInTenant = {
  __typename?: 'UsersFields_lastLoggedInTenant';
  create?: Maybe<UsersFields_LastLoggedInTenant_Create>;
  delete?: Maybe<UsersFields_LastLoggedInTenant_Delete>;
  read?: Maybe<UsersFields_LastLoggedInTenant_Read>;
  update?: Maybe<UsersFields_LastLoggedInTenant_Update>;
};

export type UsersFields_LastLoggedInTenant_Create = {
  __typename?: 'UsersFields_lastLoggedInTenant_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastLoggedInTenant_Delete = {
  __typename?: 'UsersFields_lastLoggedInTenant_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastLoggedInTenant_Read = {
  __typename?: 'UsersFields_lastLoggedInTenant_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastLoggedInTenant_Update = {
  __typename?: 'UsersFields_lastLoggedInTenant_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastName = {
  __typename?: 'UsersFields_lastName';
  create?: Maybe<UsersFields_LastName_Create>;
  delete?: Maybe<UsersFields_LastName_Delete>;
  read?: Maybe<UsersFields_LastName_Read>;
  update?: Maybe<UsersFields_LastName_Update>;
};

export type UsersFields_LastName_Create = {
  __typename?: 'UsersFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastName_Delete = {
  __typename?: 'UsersFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastName_Read = {
  __typename?: 'UsersFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastName_Update = {
  __typename?: 'UsersFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles = {
  __typename?: 'UsersFields_roles';
  create?: Maybe<UsersFields_Roles_Create>;
  delete?: Maybe<UsersFields_Roles_Delete>;
  read?: Maybe<UsersFields_Roles_Read>;
  update?: Maybe<UsersFields_Roles_Update>;
};

export type UsersFields_Roles_Create = {
  __typename?: 'UsersFields_roles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Delete = {
  __typename?: 'UsersFields_roles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Read = {
  __typename?: 'UsersFields_roles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Update = {
  __typename?: 'UsersFields_roles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants = {
  __typename?: 'UsersFields_tenants';
  create?: Maybe<UsersFields_Tenants_Create>;
  delete?: Maybe<UsersFields_Tenants_Delete>;
  fields?: Maybe<UsersFields_Tenants_Fields>;
  read?: Maybe<UsersFields_Tenants_Read>;
  update?: Maybe<UsersFields_Tenants_Update>;
};

export type UsersFields_Tenants_Create = {
  __typename?: 'UsersFields_tenants_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants_Delete = {
  __typename?: 'UsersFields_tenants_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants_Fields = {
  __typename?: 'UsersFields_tenants_Fields';
  id?: Maybe<UsersFields_Tenants_Id>;
  roles?: Maybe<UsersFields_Tenants_Roles>;
  tenant?: Maybe<UsersFields_Tenants_Tenant>;
};

export type UsersFields_Tenants_Read = {
  __typename?: 'UsersFields_tenants_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants_Update = {
  __typename?: 'UsersFields_tenants_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants_Id = {
  __typename?: 'UsersFields_tenants_id';
  create?: Maybe<UsersFields_Tenants_Id_Create>;
  delete?: Maybe<UsersFields_Tenants_Id_Delete>;
  read?: Maybe<UsersFields_Tenants_Id_Read>;
  update?: Maybe<UsersFields_Tenants_Id_Update>;
};

export type UsersFields_Tenants_Id_Create = {
  __typename?: 'UsersFields_tenants_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants_Id_Delete = {
  __typename?: 'UsersFields_tenants_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants_Id_Read = {
  __typename?: 'UsersFields_tenants_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants_Id_Update = {
  __typename?: 'UsersFields_tenants_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants_Roles = {
  __typename?: 'UsersFields_tenants_roles';
  create?: Maybe<UsersFields_Tenants_Roles_Create>;
  delete?: Maybe<UsersFields_Tenants_Roles_Delete>;
  read?: Maybe<UsersFields_Tenants_Roles_Read>;
  update?: Maybe<UsersFields_Tenants_Roles_Update>;
};

export type UsersFields_Tenants_Roles_Create = {
  __typename?: 'UsersFields_tenants_roles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants_Roles_Delete = {
  __typename?: 'UsersFields_tenants_roles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants_Roles_Read = {
  __typename?: 'UsersFields_tenants_roles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants_Roles_Update = {
  __typename?: 'UsersFields_tenants_roles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants_Tenant = {
  __typename?: 'UsersFields_tenants_tenant';
  create?: Maybe<UsersFields_Tenants_Tenant_Create>;
  delete?: Maybe<UsersFields_Tenants_Tenant_Delete>;
  read?: Maybe<UsersFields_Tenants_Tenant_Read>;
  update?: Maybe<UsersFields_Tenants_Tenant_Update>;
};

export type UsersFields_Tenants_Tenant_Create = {
  __typename?: 'UsersFields_tenants_tenant_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants_Tenant_Delete = {
  __typename?: 'UsersFields_tenants_tenant_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants_Tenant_Read = {
  __typename?: 'UsersFields_tenants_tenant_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Tenants_Tenant_Update = {
  __typename?: 'UsersFields_tenants_tenant_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type CategoriesAccess = {
  __typename?: 'categoriesAccess';
  create?: Maybe<CategoriesCreateAccess>;
  delete?: Maybe<CategoriesDeleteAccess>;
  fields?: Maybe<CategoriesFields>;
  read?: Maybe<CategoriesReadAccess>;
  update?: Maybe<CategoriesUpdateAccess>;
};

export type CategoriesDocAccess = {
  __typename?: 'categoriesDocAccess';
  create?: Maybe<CategoriesCreateDocAccess>;
  delete?: Maybe<CategoriesDeleteDocAccess>;
  fields?: Maybe<CategoriesDocAccessFields>;
  read?: Maybe<CategoriesReadDocAccess>;
  update?: Maybe<CategoriesUpdateDocAccess>;
};

export type CountCategories = {
  __typename?: 'countCategories';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountCustomers = {
  __typename?: 'countCustomers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPages = {
  __typename?: 'countPages';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountTenants = {
  __typename?: 'countTenants';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CustomersAccess = {
  __typename?: 'customersAccess';
  create?: Maybe<CustomersCreateAccess>;
  delete?: Maybe<CustomersDeleteAccess>;
  fields?: Maybe<CustomersFields>;
  read?: Maybe<CustomersReadAccess>;
  unlock?: Maybe<CustomersUnlockAccess>;
  update?: Maybe<CustomersUpdateAccess>;
};

export type CustomersDocAccess = {
  __typename?: 'customersDocAccess';
  create?: Maybe<CustomersCreateDocAccess>;
  delete?: Maybe<CustomersDeleteDocAccess>;
  fields?: Maybe<CustomersDocAccessFields>;
  read?: Maybe<CustomersReadDocAccess>;
  unlock?: Maybe<CustomersUnlockDocAccess>;
  update?: Maybe<CustomersUpdateDocAccess>;
};

export type CustomersJwt = {
  __typename?: 'customersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type CustomersLoginResult = {
  __typename?: 'customersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Customer>;
};

export type CustomersMe = {
  __typename?: 'customersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Customer>;
};

export type CustomersRefreshedCustomer = {
  __typename?: 'customersRefreshedCustomer';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<CustomersJwt>;
};

export type CustomersResetPassword = {
  __typename?: 'customersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Customer>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationCategoryInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCategoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCustomerInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCustomerUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  alt: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_SizesInput = {
  card?: InputMaybe<MutationMediaUpdate_Sizes_CardInput>;
  feature?: InputMaybe<MutationMediaUpdate_Sizes_FeatureInput>;
};

export type MutationMediaUpdate_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_FeatureInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_SizesInput = {
  card?: InputMaybe<MutationMedia_Sizes_CardInput>;
  feature?: InputMaybe<MutationMedia_Sizes_FeatureInput>;
};

export type MutationMedia_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_FeatureInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationPageInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  pageTitle: Scalars['String']['input'];
  richText: Scalars['JSON']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  richText?: InputMaybe<Scalars['JSON']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationTenantInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  domains?: InputMaybe<Array<InputMaybe<MutationTenant_DomainsInput>>>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTenantUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  domains?: InputMaybe<Array<InputMaybe<MutationTenantUpdate_DomainsInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTenantUpdate_DomainsInput = {
  domain: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTenant_DomainsInput = {
  domain: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lastLoggedInTenant?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<User_Roles_MutationInput>>>;
  salt?: InputMaybe<Scalars['String']['input']>;
  tenants?: InputMaybe<Array<InputMaybe<MutationUser_TenantsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lastLoggedInTenant?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<UserUpdate_Roles_MutationInput>>>;
  salt?: InputMaybe<Scalars['String']['input']>;
  tenants?: InputMaybe<Array<InputMaybe<MutationUserUpdate_TenantsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdate_TenantsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  roles: Array<InputMaybe<UserUpdate_Tenants_Roles_MutationInput>>;
  tenant?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUser_TenantsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  roles: Array<InputMaybe<User_Tenants_Roles_MutationInput>>;
  tenant?: InputMaybe<Scalars['String']['input']>;
};

export type PagesAccess = {
  __typename?: 'pagesAccess';
  create?: Maybe<PagesCreateAccess>;
  delete?: Maybe<PagesDeleteAccess>;
  fields?: Maybe<PagesFields>;
  read?: Maybe<PagesReadAccess>;
  update?: Maybe<PagesUpdateAccess>;
};

export type PagesDocAccess = {
  __typename?: 'pagesDocAccess';
  create?: Maybe<PagesCreateDocAccess>;
  delete?: Maybe<PagesDeleteDocAccess>;
  fields?: Maybe<PagesDocAccessFields>;
  read?: Maybe<PagesReadDocAccess>;
  update?: Maybe<PagesUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type TenantsAccess = {
  __typename?: 'tenantsAccess';
  create?: Maybe<TenantsCreateAccess>;
  delete?: Maybe<TenantsDeleteAccess>;
  fields?: Maybe<TenantsFields>;
  read?: Maybe<TenantsReadAccess>;
  update?: Maybe<TenantsUpdateAccess>;
};

export type TenantsDocAccess = {
  __typename?: 'tenantsDocAccess';
  create?: Maybe<TenantsCreateDocAccess>;
  delete?: Maybe<TenantsDeleteDocAccess>;
  fields?: Maybe<TenantsDocAccessFields>;
  read?: Maybe<TenantsReadDocAccess>;
  update?: Maybe<TenantsUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};
