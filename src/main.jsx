import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { postApi } from './api/postApi'
import App from './App.jsx'
import './App.scss';
import { ApiProvider } from '@reduxjs/toolkit/query/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={postApi}>
      <Router>
        <App />
      </Router>
    </ApiProvider>
  </React.StrictMode>,
)
