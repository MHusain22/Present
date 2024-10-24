import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const ButtonLink = ({ children, onClick }) => (
  <Button
    onClick={onClick}
    sx={{
      color: "var(--primary-color)",
      fontFamily: "Krub, sans-serif",
      fontSize: "22px",
      fontWeight: 600,
    }}
  >
    {children}
  </Button>
);

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        padding:{
          xs: "0px 0px",
          sm: "0px 60px",
        },
        backgroundColor: "#fff",
        // boxShadow: "0px 4px 16px 4px rgba(0, 0, 0, 0.30)",
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: "#44B6AE",
            fontFamily: "Krub, sans-serif",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            marginTop: "10px",
          }}
        >
          <svg
            width="120"
            height="50"
            viewBox="0 0 231 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 93C0 95.7614 2.23858 98 5 98C7.76142 98 10 95.7614 10 93H0ZM0 41L0 93H10L10 41H0Z"
              fill="#44B6AE"
            />
            <circle cx="40" cy="40" r="40" fill="#44B6AE" />
            <circle cx="40" cy="40" r="30" fill="white" />
            <circle cx="40" cy="40" r="20" fill="#44B6AE" />
            <circle cx="47" cy="27" r="10" fill="white" />
            <path
              d="M229.216 51.3439C229.568 51.4399 229.84 51.6479 230.032 51.9679C230.224 52.2879 230.32 52.6719 230.32 53.1199C230.32 53.7919 230.112 54.3359 229.696 54.7519C229.184 55.2639 228.336 55.6799 227.152 55.9999C226 56.3199 224.72 56.4799 223.312 56.4799C221.104 56.4799 219.328 55.8719 217.984 54.6559C216.64 53.4079 215.968 51.7599 215.968 49.7119V34.1119H211.936V29.5999H215.968V22.3999H223.072V29.5999H228.064V34.1119H223.072V49.0879C223.072 50.2079 223.248 51.0079 223.6 51.4879C223.984 51.9359 224.64 52.1599 225.568 52.1599C226.592 52.1599 227.808 51.8879 229.216 51.3439Z"
              fill="#44B6AE"
            />
            <path
              d="M207.983 49.3759C207.983 50.9759 208.047 52.1759 208.175 52.9759C208.303 53.7759 208.543 54.5119 208.895 55.1839C207.007 55.8879 205.055 56.2399 203.039 56.2399C202.239 56.2399 201.679 55.8559 201.359 55.0879C201.039 54.3199 200.879 52.9919 200.879 51.1039V38.5759C200.879 36.9119 200.623 35.7599 200.111 35.1199C199.631 34.4479 198.767 34.1119 197.519 34.1119C195.855 34.1119 194.031 34.9279 192.047 36.5599V55.9999H184.943V38.2399C184.943 36.0959 184.895 34.4479 184.799 33.2959C184.735 32.1439 184.591 31.2159 184.367 30.5119C186.735 29.7759 188.671 29.4079 190.175 29.4079C190.847 29.4079 191.327 29.6319 191.615 30.0799C191.903 30.4959 192.047 31.1999 192.047 32.1919V32.7679C193.679 31.3919 195.055 30.4479 196.175 29.9359C197.327 29.3919 198.527 29.1199 199.775 29.1199C202.527 29.1199 204.575 29.8719 205.919 31.3759C207.295 32.8479 207.983 35.1039 207.983 38.1439V49.3759Z"
              fill="#44B6AE"
            />
            <path
              d="M180.619 41.0719C180.619 41.5199 180.539 42.5279 180.379 44.0959H163.387C163.547 46.5279 164.123 48.4159 165.115 49.7599C166.139 51.1039 167.467 51.7759 169.099 51.7759C169.835 51.7759 170.443 51.6799 170.923 51.4879C171.435 51.2959 171.947 50.9599 172.459 50.4799C173.003 49.9679 173.707 49.1519 174.571 48.0319C174.731 47.7759 175.067 47.6479 175.579 47.6479C176.123 47.6479 176.779 47.8399 177.547 48.2239C178.347 48.5759 179.195 49.0879 180.091 49.7599C178.011 54.2399 174.347 56.4799 169.099 56.4799C165.067 56.4799 161.899 55.2639 159.595 52.8319C157.291 50.3679 156.139 47.0079 156.139 42.7519C156.139 39.9679 156.651 37.5519 157.675 35.5039C158.731 33.4559 160.219 31.8879 162.139 30.7999C164.091 29.6799 166.395 29.1199 169.051 29.1199C172.731 29.1199 175.579 30.1599 177.595 32.2399C179.611 34.3199 180.619 37.2639 180.619 41.0719ZM173.419 40.0639C173.419 35.7759 171.915 33.6319 168.907 33.6319C167.371 33.6319 166.139 34.1759 165.211 35.2639C164.283 36.3519 163.707 37.9519 163.483 40.0639H173.419Z"
              fill="#44B6AE"
            />
            <path
              d="M141.744 56.4799C138.608 56.4799 136.128 55.9999 134.304 55.0399C132.512 54.0799 131.616 52.8479 131.616 51.3439C131.616 50.4479 131.92 49.6959 132.528 49.0879C133.168 48.4479 134.08 48.0959 135.264 48.0319C135.936 49.3119 136.8 50.2719 137.856 50.9119C138.944 51.5519 140.304 51.8719 141.936 51.8719C144.752 51.8719 146.16 50.8159 146.16 48.7039C146.16 47.8399 145.76 47.1839 144.96 46.7359C144.16 46.2879 142.848 45.7599 141.024 45.1519C139.168 44.5439 137.632 43.9519 136.416 43.3759C135.232 42.7999 134.208 41.9679 133.344 40.8799C132.48 39.7599 132.048 38.3199 132.048 36.5599C132.048 35.0559 132.512 33.7439 133.44 32.6239C134.4 31.4719 135.648 30.6079 137.184 30.0319C138.752 29.4239 140.448 29.1199 142.272 29.1199C144.608 29.1199 146.656 29.5679 148.416 30.4639C150.176 31.3599 151.552 32.5599 152.544 34.0639C152.128 34.8639 151.552 35.5679 150.816 36.1759C150.112 36.7519 149.472 37.0399 148.896 37.0399C148.576 37.0399 148.304 36.9919 148.08 36.8959C147.856 36.7679 147.632 36.5759 147.408 36.3199C145.968 34.5279 144.32 33.6319 142.464 33.6319C141.248 33.6319 140.304 33.8719 139.632 34.3519C138.992 34.7999 138.672 35.4879 138.672 36.4159C138.672 37.4079 139.104 38.1599 139.968 38.6719C140.864 39.1839 142.256 39.7119 144.144 40.2559C145.936 40.7359 147.408 41.2479 148.56 41.7919C149.744 42.3039 150.736 43.0879 151.536 44.1439C152.368 45.1679 152.784 46.5279 152.784 48.2239C152.784 50.8799 151.824 52.9279 149.904 54.3679C148.016 55.7759 145.296 56.4799 141.744 56.4799Z"
              fill="#44B6AE"
            />
            <path
              d="M128.541 41.0719C128.541 41.5199 128.461 42.5279 128.301 44.0959H111.309C111.469 46.5279 112.045 48.4159 113.037 49.7599C114.061 51.1039 115.389 51.7759 117.021 51.7759C117.757 51.7759 118.365 51.6799 118.845 51.4879C119.357 51.2959 119.869 50.9599 120.381 50.4799C120.925 49.9679 121.629 49.1519 122.493 48.0319C122.653 47.7759 122.989 47.6479 123.501 47.6479C124.045 47.6479 124.701 47.8399 125.469 48.2239C126.269 48.5759 127.117 49.0879 128.013 49.7599C125.933 54.2399 122.269 56.4799 117.021 56.4799C112.989 56.4799 109.821 55.2639 107.517 52.8319C105.213 50.3679 104.061 47.0079 104.061 42.7519C104.061 39.9679 104.573 37.5519 105.597 35.5039C106.653 33.4559 108.141 31.8879 110.061 30.7999C112.013 29.6799 114.317 29.1199 116.973 29.1199C120.653 29.1199 123.501 30.1599 125.517 32.2399C127.533 34.3199 128.541 37.2639 128.541 41.0719ZM121.341 40.0639C121.341 35.7759 119.837 33.6319 116.829 33.6319C115.293 33.6319 114.061 34.1759 113.133 35.2639C112.205 36.3519 111.629 37.9519 111.405 40.0639H121.341Z"
              fill="#44B6AE"
            />
            <path
              d="M97.1281 29.2639C98.6641 29.2639 99.7841 29.5999 100.488 30.2719C101.192 30.9119 101.544 31.9519 101.544 33.3919C101.544 33.9359 101.464 34.4799 101.304 35.0239C101.176 35.5359 100.984 35.9359 100.728 36.2239C100.344 35.9999 99.9121 35.8399 99.4321 35.7439C98.9521 35.6479 98.2641 35.5999 97.3681 35.5999C95.2881 35.5999 93.7361 36.2399 92.7121 37.5199C91.7201 38.7999 91.2241 40.7519 91.2241 43.3759V55.9999H84.1201V29.5999H91.2241V33.1039C91.8641 31.8559 92.6961 30.9119 93.7201 30.2719C94.7441 29.5999 95.8801 29.2639 97.1281 29.2639Z"
              fill="#44B6AE"
            />
          </svg>
        </Typography>

        {/* Navigation List for large screens */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <ButtonLink>
            <Link to="" style={{textDecoration:"none",color:'inherit'}}>Home</Link>
          </ButtonLink>
          <ButtonLink>
            <Link to="login" style={{textDecoration:"none",color:'inherit'}}>Login</Link>
          </ButtonLink>
          <ButtonLink>
            <Link to="capture" style={{textDecoration:"none",color:'inherit'}}>Capture</Link>
          </ButtonLink>
          <ButtonLink>
            <Link to="attendance" style={{textDecoration:"none",color:'inherit'}}>Attendance</Link>
          </ButtonLink>
          <ButtonLink>
            <Link to="about" style={{textDecoration:"none",color:'inherit'}}>About Us</Link>
          </ButtonLink>
        </Box>

        {/* Hamburger Menu for small screens */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon sx={{ color: "var(--primary-color)" }} />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Menu for small screens */}
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <ButtonLink>
            <Link to="" style={{textDecoration:"none",color:'inherit'}}>Home</Link>
          </ButtonLink>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ButtonLink>
            <Link to="login" style={{textDecoration:"none",color:'inherit'}}>Login</Link>
          </ButtonLink>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ButtonLink>
            <Link to="capture" style={{textDecoration:"none",color:'inherit'}}>Capture</Link>
          </ButtonLink>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ButtonLink>Attendance</ButtonLink>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ButtonLink>About Us</ButtonLink>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
