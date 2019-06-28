/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const Posts = gql`
  query Posts {
    posts {
      id text title author { id fullName }
    }
  }
`;
