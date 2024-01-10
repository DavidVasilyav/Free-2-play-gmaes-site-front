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
} from "@mui/material";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import Image from "next/image";
import Link from "next/link";
import {
  NavBarIndcitor,
} from "./navbar.style";
import styles from "./navbar.module.css";
import { logoutReducer } from "redux/reducers/userAuthReducer";
import NavBarDropMenu from './NavBarDropMenu'
import logo from "../../../public/img/logo.png"
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
    <AppBar sx={{ position: "sticky", bgcolor: '#16161a' }} className={styles.main_nav}>
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
            bottom: 0
          }}
        >
          <NavBarDropMenu  />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              position: { xs: "relative", sm: "absolute" },
              left: { xs: "0px",},
              p: 1,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#fffffe",
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
            }}
          >
            {pages.map((page) => (
              <NavBarIndcitor key={page.name} active={pathName === page.href}>
                <Link href={page.href}>
                  <Box
                    sx={{
                      color: "#fffffe",
                      fontSize: { xs: 15, md: 19 },
                      transition: "0.8s",
                      borderRadius: 1,
                      "&:hover": {
                        textDecoration: "underline",
                        textDecorationColor: "#2cb67d",
                        bgcolor: "#fffffe",
                        color: "#16161a",
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
          sx={{
            // position: "block",
            float: "right",
            bottom: 0,
            position: "absolute",
            right: 0,
            // top: { xs: 10, sm: 5, md: 5 },
          }}
        >
          {userInfo ? (
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                p: 1,
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: { sm: 12, md: 20 },
                }}
              >
                Welcome:
              </Typography>
              <Link href={"/profile"}>
                <Typography
                  sx={{
                    transition: "0.5s",
                    borderRadius: 1,
                    color: "white",
                    fontSize: { sm: 12, md: 20 },
                    display: "block",
                    "&:hover": {
                      bgcolor: "#2cb67d",
                      color: "#16161a",
                    },
                  }}
                >
                  {user.username}
                </Typography>
              </Link>
              <Typography
                onClick={logoutAndRedirected}
                sx={{
                  display: { xs: "none", sm: "block" },
                  borderRadius: 1,
                  fontSize: { sm: 12, md: 20 },
                  transition: "0.5s",
                  color: "red",
                  bgcolor: "#16161a",
                  "&:hover": {
                    bgcolor: "red",
                    color: "#16161a",
                    textDecoration: "underline",
                  },
                }}
              >
               logout
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
                      textDecorationColor: "#2cb67d",
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
                      textDecorationColor: "#2cb67d",
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