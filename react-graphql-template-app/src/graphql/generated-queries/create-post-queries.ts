/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const CreatePost = gql`
  mutation CreatePost($input: PostCreateInput!) {
    createPost(input: $input) {
      id
    }
  }
`;
