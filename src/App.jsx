import { createBrowserRouter } from 'react-router-dom';
import AgentLoginForm from './components/agent/AgentLoginForm';
import ErrorPage from './ErroPage';
import CustomerLoginForm from './components/customers/CustomerLogin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AgentLoginForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "customer/",
    element: <CustomerLoginForm />,
  },
]);
export default router;