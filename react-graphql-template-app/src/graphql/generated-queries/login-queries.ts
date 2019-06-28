/* tslint:disable:max-line-length */
import gql from 'graphql-tag';

export const Login = gql`
  mutation Login($email: String!, $password: String!) {
    emailLogin(email: $email, password: $password) {
      token
    }
  }
`;
