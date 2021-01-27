import React from 'react';
import Global from './global'
import Login from './Pages/Login'
import client from './Hooks/AuthProvider'
import { ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const App = () => (
  <ApolloProvider client={client}>
    <Global />
    <Login />
  </ApolloProvider>
);

export default App;