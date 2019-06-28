import ApolloClient from 'apollo-boost';
import { createGraphqlClient } from 'apollox';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
if (!REACT_APP_SERVER_URL) {
  throw new Error('Missing REACT_APP_SERVER_URL variable');
}

export const client = new ApolloClient({
  uri: REACT_APP_SERVER_URL,
  credentials: 'include',
  fetchOptions: {
    useGETForQueries: true,
  }
});

export const { mutation, query } = createGraphqlClient(client, console.error);
