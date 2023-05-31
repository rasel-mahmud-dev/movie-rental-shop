import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client';
import client from './graphql';
import App from './App.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
            <App />
      </ApolloProvider>
  </React.StrictMode>,
)
