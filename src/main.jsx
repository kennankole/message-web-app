import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App';
import './index.css'

import ErrorPage from './ErroPage';
import CustomerLoginForm from './components/customers/CustomerLogin';
import Signup from './components/Signup';
import Agent from './components/agent/Agent';
import LoginForm from './components/agent/LoginForm';
import AgentDashBoard from './components/agent/AgentDashBoard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/customer",
    element: <CustomerLoginForm />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />
  },
  {
    path: "/agent",
    element: <Agent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/agent/profile",
        element: <div>Hello</div>,
      },
      {
        path: "/agent/login",
        element: <LoginForm />,
      },
      {
        path: "/agent/dashboard",
        element: <AgentDashBoard />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
