import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserAsync, logoutUserAsync } from '../features/authentication/authenticationSlice';
import { useNavigate } from 'react-router';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  const user = useSelector((state) => state.auth.user);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserAsync())
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUserAsync(user))
    navigate("/")
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
          {user && loggedIn ? (
            <>
              <Dropdown.Header>
                <span className="block text-sm">User ID:{user.user_identity}</span>
                <span className="block truncate text-sm font-medium">
                  Email: {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item onClick={handleLogout}>
                Sign out
              </Dropdown.Item>
            </>
          ) : (
            <>
              <Dropdown.Header>
                <span className="block text-sm">Your Are Not logged In</span>
              </Dropdown.Header>
              <Dropdown.Item>
                <Link to="/login">
                  Login
                </Link>
              </Dropdown.Item>
            </>
          )}
        </Dropdown>
      </div>
    </Navbar>
  );
}
export default NavigationMenu;