import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App';
import './index.css'

import AgentLoginForm from './components/agent/AgentLoginForm';
import ErrorPage from './ErroPage';
import CustomerLoginForm from './components/customers/CustomerLogin';
import Signup from './components/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "agent/",
        element: <AgentLoginForm />,
      },
      {
        path: "customers/",
        element: <CustomerLoginForm />,
      },
      {
        path: "signup/",
        element: <Signup />,
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
