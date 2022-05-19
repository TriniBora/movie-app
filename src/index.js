import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
// import AuthProvider from "./context/AuthContext";
import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AuthProvider> */ }
    <BrowserRouter>
      <UserProvider>
      <App />
      </UserProvider>
    </BrowserRouter>
    {/* </AuthProvider> */ }
  </React.StrictMode>
);

