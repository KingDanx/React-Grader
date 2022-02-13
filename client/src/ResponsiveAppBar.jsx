import * as React from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../src/images/flexion.png";
import "../src/ResponsiveAppBar.css";

const pages = ["Grade Test", "Create Test"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            className="css-1t6c9ts"
            style={{ flexGrow: 0 }}
            src={Logo}
            width="50px"
            height="50px"
            alt="Flexion Logo"
          />
          <div className="css-1t6c9ts logo-font">
            <b>Flexion</b> Grader
          </div>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-start",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  to={
                    page.replace(" ", "").toLowerCase() === "gradetest"
                      ? "/"
                      : page.replace(" ", "").toLowerCase()
                  }
                >
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <div className="right-slam-logo">
            <img
              className="css-h7cdpm-MuiTypography-root"
              style={{ flexGrow: 0 }}
              src={Logo}
              height="50px"
              alt="Flexion Logo"
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <b>Flexion</b> Grader
            </Typography>
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                style={{ textDecoration: "none" }}
                to={
                  page.replace(" ", "").toLowerCase() === "gradetest"
                    ? "/"
                    : page.replace(" ", "").toLowerCase()
                }
              >
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu()}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    "&:hover": { backgroundColor: "#fb2d17" },
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
