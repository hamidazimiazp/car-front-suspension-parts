import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { useTheme } from "@mui/material";
import propTypes from "prop-types";
import { logout } from "services/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "utils/cookies/cookies";
import { getCookie } from "utils/cookies/cookies";

const pages = ["خانه", "فروشگاه", "وبلاگ"];
const settings = ["پروفایل", "داشبورد", "خروج"];

function Header({ ThemeHandler }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { isPending, mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: async (data) => await logout(data),
  });

  const logoutHandler = async () => {
    mutate(getCookie("refresh"), {
      onSuccess: (data) => {
        if (data.response.status === 204) {
          // Remove tokens from cookies
          removeCookie("access");
          removeCookie("refresh");
          // Redirect user to login page
          navigate("/auth/login");
          toast.success("با موفقیت خارج شدید");
        } else {
          toast.error("خطایی رخ داده است.");
        }
      },
      onError: () => {
        toast.error("خطایی رخ داده است.");
      },
    });
  };

  return (
    <AppBar position="sticky">
      <div style={{ width: "100%", padding: "0px 24px" }}>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex" } }}>
            <img src="/icons/logo.svg" alt="" width={25} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 1,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              جلوبندی سورنا
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 1,
                display: { md: "none" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              جلوبندی سورنا
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mr: 2 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ ml: 3 }} onClick={ThemeHandler}>
              {theme.palette.mode === "dark" ? (
                <WbSunnyIcon color={theme.palette.primary.contrastText} />
              ) : (
                <NightlightIcon
                  sx={{ color: theme.palette.primary.contrastText }}
                />
              )}
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/icons/profile.svg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {setting === "خروج" ? (
                    <Typography
                      sx={{ textAlign: "center" }}
                      onClick={logoutHandler}
                    >
                      {isPending ? "درحال خروج" : setting}
                    </Typography>
                  ) : (
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  );
}
export default Header;

Header.propTypes = {
  ThemeHandler: propTypes.func,
};
