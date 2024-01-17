"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  MenuItem,
  Box,
  Button
} from "@mui/material";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import Image from "next/image";
import Link from "next/link";
import { NavBarIndcitor } from "./navbar.style";
import styles from "./navbar.module.css";
import { logoutReducer } from "redux/reducers/userAuthReducer";
import { setTheme } from "redux/reducers/setDarkLightMode";
import NavBarDropMenu from "./NavBarDropMenu";
import logo from "../../../public/img/logo.png";
import ChangeDarkLightColors from "utils/ChangeDarkLightColors";
import DarkLightBtn from "components/DarkLightBtn/DarkLightBtn";
const pages = [
  { name: "Home", href: "/", icon: `${(<BlurOnIcon />)}` },
  { name: "Shooter", href: "/games/shooter" },
  { name: "Mmorpg", href: "/games/mmorpg" },
  { name: "Survival", href: "/games/survival" },
];

function Navbar({}) {
  const [user, setUser] = useState([]);
  const [userInfo, setUserInfo] = useState(Boolean);
  const [dropMenu, setDropMenu] = useState(Boolean);
  const [menuItem, setMenuItem] = useState("");
  const [changeIcon, setChangeIcon] = useState(Boolean);
  const userAuth = useSelector((state) => state.userAuth);

  const dispatch = useDispatch();
  const router = useRouter();
  const pathName = usePathname();

  const checkIfUserLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("no token");
      setUserInfo(false);
    } else setUserInfo(true);
  };

  const logoutAndRedirected = () => {
    dispatch(logoutReducer());
    router.push("/");
  };
  
  useEffect(() => {
    const userFromLocal = JSON.parse(localStorage.getItem("user"));
    setUser(userFromLocal);
    checkIfUserLoggedIn();
  }, [userAuth]);
  return (
    <AppBar
      sx={{ position: "sticky", bgcolor: ChangeDarkLightColors('#0D0D0D') }}
      className={styles.main_nav}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            right: 0,
            bottom: 0,
          }}
        >
          <NavBarDropMenu />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              position: { xs: "relative", sm: "absolute" },
              left: { xs: "0px" },
              p: 1,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <Image src={logo} width={100} />
          </Typography>
          <MenuItem
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-evenly",
              gap: 1,
              position: "absolute",
              left: 120,
              bgcolor: ChangeDarkLightColors("#232323", "#EFF0F3"),
              ":hover": {
                bgcolor: ChangeDarkLightColors("#232323", "#EFF0F3"),
              },
            }}
          >
            {pages.map((page) => (
              <NavBarIndcitor key={page.name} active={pathName === page.href}>
                <Link href={page.href}>
                  <Box
                    sx={{
                      color: ChangeDarkLightColors("#EFF0F3", "#000"),
                      fontSize: { xs: 15, md: 19 },
                      transition: "0.8s",
                      borderRadius: 1,
                      "&:hover": {
                        textDecoration: "underline 2px",
                        textDecorationColor: "#ff8906",
                        color: ChangeDarkLightColors("#fff", "#000"),
                      },
                    }}
                  >
                    {page.name}
                  </Box>
                </Link>
              </NavBarIndcitor>
            ))}
          </MenuItem>
        </Toolbar>
        <MenuItem
        disableRipple
          sx={{
            // position: "block",
            float: "right",
            bottom: 0,
            position: "absolute",
            right: 0,
            // top: { xs: 10, sm: 5, md: 5 },
            "&:hover": {
              bgcolor: ChangeDarkLightColors("#232323", "#EFF0F3"),
            },
          }}
        >
          <DarkLightBtn />
          {userInfo ? (
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                p: 1,
                borderRadius: 1,
                bgcolor: "#ff8906",
                height: 25,
                fontSize: { sm: 12, md: 20 },
              }}
            >
              <Box
                sx={{
                  color: "#fffffe",
                }}
              >
                Welcome:
              </Box>
              <Link href={"/profile"}>
                <Typography
                  sx={{
                    transition: "0.5s",
                    borderRadius: 1,
                    color: "white",
                    display: "block",
                    fontSize: { sm: 12, md: 20 },

                    "&:hover": {
                      color: "#232323",
                    },
                  }}
                >
                  {user.username}
                </Typography>
              </Link>
              <Box
                sx={{ color: "#fffffe", display: { xs: "none", sm: "block" } }}
              >
                /
              </Box>
              <Typography
                onClick={logoutAndRedirected}
                sx={{
                  display: { xs: "none", sm: "block" },
                  borderRadius: 1,
                  transition: "0.5s",
                  color: "#fffffe",
                  fontSize: { sm: 12, md: 20 },

                  "&:hover": {
                    color: "#232323",
                    textDecoration: "underline",
                  },
                }}
              >
                Log-out
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                gap: 1,
                display: { xs: "none", sm: "flex" },
              }}
            >
              <NavBarIndcitor active={pathName === "/login"}>
                <Box
                  sx={{
                    transition: "0.8s",
                    "&:hover": {
                      textDecoration: "underline",
                      textDecorationColor: "#ff8906",
                      borderRadius: 1,
                    },
                  }}
                >
                  <Link href={"/login"}>Log-in</Link>
                </Box>
              </NavBarIndcitor>
              /
              <NavBarIndcitor active={pathName === "/register"}>
                <Box
                  sx={{
                    "&:hover": {
                      transition: "0.8s",
                      textDecoration: "underline",
                      textDecorationColor: "#ff8906",
                      borderRadius: 1,
                    },
                  }}
                >
                  <Link href={"/register"}>Register</Link>
                </Box>
              </NavBarIndcitor>
            </Box>
          )}
        </MenuItem>
      </Container>
    </AppBar>
  );
}

export default Navbar;
