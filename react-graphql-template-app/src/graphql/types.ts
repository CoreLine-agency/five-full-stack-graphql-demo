/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreatePost
// ====================================================

export interface CreatePost_createPost {
  __typename: "Post";
  id: any;
}

export interface CreatePost {
  createPost: CreatePost_createPost;
}

export interface CreatePostVariables {
  input: PostCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_emailLogin {
  __typename: "LoginResponse";
  token: string;
}

export interface Login {
  emailLogin: Login_emailLogin;
}

export interface LoginVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Posts
// ====================================================

export interface Posts_posts_author {
  __typename: "User";
  id: any;
  fullName: string;
}

export interface Posts_posts {
  __typename: "Post";
  id: any;
  text: string;
  title: string | null;
  author: Posts_posts_author;
}

export interface Posts {
  posts: Posts_posts[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface PostCreateInput {
  text: string;
  title?: string | null;
  parentPost?: PostNestedInput | null;
}

export interface PostNestedInput {
  id?: any | null;
  text?: string | null;
  title?: string | null;
  parentPost?: PostNestedInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
