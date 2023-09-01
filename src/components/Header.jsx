import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  AppBar,
  IconButton,
  Menu,
  Toolbar,
  Typography,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../components/PrimaryButton.jsx";
import logo from "../img/logo.png";
import i18n from "../i18n.js";

const Header = ({ homeRef, servicesRef, contactRef, aboutRef }) => {
  const { t } = useTranslation();

  const pages = [t("Home"), t("Services"), t("About")];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleSectionNavigation = (e) => {
    console.log(e.target.innerText);
    setAnchorElNav(null);
    let page = e.target.innerText;
    if (page.toLowerCase().includes(`${t("Home").toLowerCase()}`)) {
      homeRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (page.toLowerCase().includes(`${t("Services").toLowerCase()}`)) {
      servicesRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (page.toLowerCase().includes(`${t("Contact us").toLowerCase()}`)) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (page.toLowerCase().includes(`${t("About").toLowerCase()}`)) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value ?? "");
    localStorage.setItem("lang", e.target.value ?? "");
  };
  return (
    <AppBar
      sx={{
        position: "static",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        height: { xs: "150px", md: "200px" },
        boxShadow: "none",
      }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "end",
            flexDirection: `${
              t("Language") === "English" ? "row-reverse" : "row"
            }`,
          }}>
          <Button>
            <Box
              onClick={() => {
                homeRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              sx={{
                backgroundImage: `url( ${logo})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `100%`,
                backgroundPosition: "0% 100%",
                height: "90px",
                width: "250px",
                mx: "20px",
              }}></Box>
          </Button>
          {
            //                     MOBILE HEADER
          }
          <Box
            sx={{
              // flexGrow: 1,
              flexDirection: `${
                t("Language") === "English" ? "row" : "row-reverse"
              }`,
              display: {
                xs: "flex",
                md: "none",
              },
              alignItems: "center",
            }}>
            <IconButton
              size="large"
              aria-label="Navbar"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <FormControl
              sx={{
                m: 1,
                minWidth: 80,
                display: {
                  xs: "flex",
                  md: "none",
                },

                "> .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {
                  backgroundColor: "rgba(255,255,255,0.5)",
                  mixBlendMode: "darken",
                  p: 1,
                },
              }}>
              <Select
                MenuProps={{
                  disableScrollLock: true,
                }}
                value={selectedLanguage}
                onChange={chooseLanguage}
                autoWidth
                sx={{
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.3)",
                }}>
                <MenuItem value={"ar"}>العربية</MenuItem>
                <MenuItem value={"en"}>English</MenuItem>
              </Select>
            </FormControl>
            <Menu
              disableScrollLock={true}
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
              }}>
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleSectionNavigation}
                  sx={{ justifyContent: "center" }}>
                  <Typography textAlign="center" fontWeight={"bold"}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem
                sx={{
                  backgroundColor: "#323232",
                  color: "white",
                  display: "flex",
                  flexDirection: `${
                    t("Language") === "English" ? "row-reverse" : "row"
                  }`,
                  "&:hover": {
                    color: "black",
                  },
                }}
                onClick={handleSectionNavigation}>
                <Typography fontWeight="bold">{t("Contact us")}</Typography>
                {t("Language") === "English" ? (
                  <PhoneIcon sx={{ mr: 1, pointerEvents: "none" }} />
                ) : (
                  <PhoneIcon
                    sx={{
                      ml: 1,
                      transform: "rotate(270deg)",
                      pointerEvents: "none",
                    }}
                  />
                )}
              </MenuItem>
            </Menu>
          </Box>
          {
            //                      DESKTOP HEADER
          }
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },

              flexDirection: `${
                t("Language") === "English" ? "row-reverse" : "row"
              }`,
            }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleSectionNavigation}
                sx={{ my: 2, color: "white", display: "block" }}>
                <Typography variant="h6" fontWeight="bold">
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: `${
                t("Language") === "English" ? "row-reverse" : "row"
              }`,
            }}>
            <PrimaryButton
              onClick={handleSectionNavigation}
              sx={{
                my: 1,
                mx: 2,
                px: 3,
                display: { xs: "none", md: "block" },
              }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: `${
                    t("Language") === "English" ? "row-reverse" : "row"
                  }`,
                }}>
                <Typography fontWeight={"bold"}>{t("Contact us")}</Typography>
                {t("Language") === "English" ? (
                  <PhoneIcon sx={{ mr: 1, pointerEvents: "none" }} />
                ) : (
                  <PhoneIcon
                    sx={{
                      ml: 1,
                      transform: "rotate(270deg)",
                      pointerEvents: "none",
                    }}
                  />
                )}
              </Box>
            </PrimaryButton>
            <FormControl
              sx={{
                m: 1,
                minWidth: 80,
                display: {
                  xs: "none",
                  md: "flex",
                },
                "> .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {
                  display: "none",
                },
              }}>
              <Select
                MenuProps={{
                  disableScrollLock: true,
                }}
                value={selectedLanguage}
                onChange={chooseLanguage}
                autoWidth
                sx={{
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.3)",
                }}>
                <MenuItem value={"ar"} sx={{ justifyContent: "center" }}>
                  العربية
                </MenuItem>
                <MenuItem value={"en"}>English</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
