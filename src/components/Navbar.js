import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar'; // This is the top bar of the website.
import Toolbar from '@mui/material/Toolbar'; // A container for the Navbar.
import Typography from '@mui/material/Typography'; // For adding text to the Navbar.
import Button from '@mui/material/Button'; // For creating buttons.
import { Link } from 'react-router-dom'; // To navigate to different pages.
import UserStore from '../contexts/UserStore';
import Logout from './signout';

function Navbar() {
  const titleStyle = {
    textDecoration: 'none', // Remove the underline typically associated with links.
    color: 'inherit', // Use the same color as the surrounding text.
    cursor: 'pointer', // Change the cursor to a pointer to indicate it's clickable.
  };

  const navbarStyle = {
    width: '100%', // Set the width to 100% to occupy the entire horizontal width.
    display: 'flex',
    justifyContent: 'center',
  };

  const {getSession} = useContext(UserStore);
  return (
    <AppBar position="static" color="primary" style={navbarStyle}>
      {/* The AppBar holds the Navbar and is positioned at the top. It has a blue background. */}
      <Toolbar>
        {/* The Toolbar contains the Navbar content. */}
        <Typography variant="h6" style={{ flexGrow: 1 }} >
          {/* Typography is for text. This is our website's title. */}
          <Link to="/" style={titleStyle}>
            LangNinja
          </Link>
        </Typography>
        {getSession() ? (
          /* If the user is logged in, show these buttons. */
          <div>
            <Button component={Link} to="/progress" color="inherit">
              My progress
            </Button>
            <Button component={Link} to="/stats" color="inherit">
              My Stats
            </Button>
            <Button component={Link} to="/leaderboard" color="inherit">
              Leaderboard
            </Button>
            <Button component={Link} to="/settings" color="inherit">
              Settings
            </Button>
            <Button color="secondary">
              {<Logout />}
            </Button>
          </div>
        ) : (
          /* If the user is not logged in, show this button. */
          <div>
              <Button component={Link} to="/signup" color="inherit">
                Sign Up
              </Button>
              <Button component={Link} to="/signin" color="inherit">
                Sign In
              </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
