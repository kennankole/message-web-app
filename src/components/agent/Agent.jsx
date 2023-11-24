import { Outlet } from "react-router";
import NavigationMenu from "../NavigationMenu";

const Agent = () => (
  <>
    <NavigationMenu />
    <Outlet />
  </>
);
export default Agent;
