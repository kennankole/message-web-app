import { Outlet } from "react-router";
import NavigationMenu from "../NavigationMenu";

const Customer = () => (
  <>
    <NavigationMenu />
    <Outlet />
  </>
);
export default Customer;
