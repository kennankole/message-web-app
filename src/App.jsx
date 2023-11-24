import { createBrowserRouter } from 'react-router-dom';
import AgentLoginForm from './components/agent/AgentLoginForm';
import ErrorPage from './ErroPage';

const router = createBrowserRouter([
  {
    path: "agent/",
    element: <AgentLoginForm />,
    errorElement: <ErrorPage />,
  }
]);
export default router;