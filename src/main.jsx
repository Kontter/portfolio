import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss'
import App from './App.jsx'
import ActivePageContext from './contexts/ActivePageContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ActivePageContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ActivePageContext>
  </React.StrictMode>
)
