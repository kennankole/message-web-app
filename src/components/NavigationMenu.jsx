import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserAsync, logoutUserAsync } from '../features/authentication/authenticationSlice';
import { useNavigate } from 'react-router';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';

const NavigationMenu = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserAsync(user))
  }, [dispatch, user]);

  const handleLogout = () => {
    dispatch(logoutUserAsync(user))
    navigate("/customer/login");
  }
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Branch</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
}
export default NavigationMenu;