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
import QuestionDetail from './components/agent/QuestionDetail';
import CustomerDashBoard from './components/customers/CustomerDashboard';
import Customer from './components/customers/Customer';
import AskQuestion from './components/customers/AskQuestion';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/customer",
    element: <Customer />,
    errorElement: <ErrorPage />, 

    children: [
      {
        index: "/customer/dashboard",
        element: <CustomerDashBoard />,
      },
      {
        path: "/customer/login",
        element: <CustomerLoginForm />,
      },
      {
        path: "/customer/ask",
        element: <AskQuestion />
      }
    ]
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
        path: "/agent/login",
        element: <LoginForm />,
      },
      {
        index: true,
        element: <AgentDashBoard />,
      },
      {
        path: "/agent/question-detail/:id/",
        element: <QuestionDetail />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
