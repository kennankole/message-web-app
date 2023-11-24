import { Outlet } from "react-router"
import HomePage from "./components/HomePage";

const App = () => (
  <>
    <HomePage />
    <main>
      <Outlet />
    </main>
  </>
);
export default App;
