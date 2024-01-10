import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { logoutReducer } from "redux/reducers/userAuthReducer";
import styles from "./navbar.module.css";
import Link from "next/link";
import { Typography, Box, Button, Fade } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CircleIcon from "@mui/icons-material/Circle";
import { NavBarMenuIconIndictor, ChangeIconColor } from "./navbar.style";
const pages = [
  { name: "Home", href: "/" },
  { name: "Shooter", href: "/games/shooter" },
  { name: "Mmorpg", href: "/games/mmorpg" },
  { name: "Survival", href: "/games/survival" },
];
export default function NavBarDropMenu() {
  const [dropMenu, setDropMenu] = useState(Boolean);
  const [userInfo, setUserInfo] = useState(Boolean);
  const userAuth = useSelector((state) => state.userAuth);
  const pathName = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const checkIfUserLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUserInfo(false);
    } else setUserInfo(true);
  };
  const toggleDropMenu = (e) => {
    return dropMenu == true ? setDropMenu(false) : setDropMenu(true);
  };

  const logoutAndRedirected = () => {
    dispatch(logoutReducer());
    setDropMenu(false);
    router.push("/login");
  };

  useEffect(() => {
    checkIfUserLoggedIn();
  }, [userAuth]);

  return (
    <Box
      className="buttonDropMenu"
      sx={{
        position: "absolute",
        left: 0,
        display: { xs: "block", sm: "none" },
      }}
    >
      <Button
        sx={{
          color: "#2cb67d",
          transition: "1s",
          "&:hover": {
            rotate: "90deg",
            color: 'white'
          },
        }}
        onClick={toggleDropMenu}
      >
        <DensityMediumIcon />
      </Button>

      {dropMenu ? (
        <>
          <Fade in={dropMenu} timeout={500}>
            <Box
              sx={{
                p: 1,
                position: "absolute",
                top: "5vh",
                bgcolor: "#000000",
                border: "2px solid #fffffe",
                borderRadius: 2,
                maxHeight: "400px",
                minHeight: "300px",
                width: "fill",
              }}
            >
              {pages.map((page) => (
                <NavBarMenuIconIndictor
                  key={page.name}
                  value={page.name}
                  active={page.href === pathName}
                >
                  <Box
                    className={styles.dropMenu}
                    id={page.name}
                    sx={{
                      width: 100,
                      display: "flex",
                      transition: "0.5s",
                      borderRadius: 1,
                      p: 1,
                      m: 1,
                      gap: 1,
                      "&:hover": {
                        bgcolor: "#2cb67d",
                      },
                      "&:active ":{
                        bgcolor: "#2cb67d",

                      }
                    }}
                  >
                    <>
                      <ChangeIconColor active={page.href === pathName}>
                        <CircleIcon
                          className={styles.dropMenuIcon}
                          sx={{
                            fontSize: 20,
                          }}
                        />
                      </ChangeIconColor>
                    </>
                    <Link onClick={toggleDropMenu} href={page.href}>
                      {page.name}
                    </Link>
                  </Box>
                </NavBarMenuIconIndictor>
              ))}
              <Box
                sx={{
                  borderTop: "1px solid white",
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                }}
              >
                {userInfo ? (

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                  <NavBarMenuIconIndictor active={'/profile' === pathName}>
                    <Link href={"profile"} onClick={toggleDropMenu}>
                      <Typography
                        sx={{
                          transition: "0.5s",
                          borderRadius: 1,
                          "&:hover": {
                            bgcolor: "#2cb67d",
                          },
                        }}
                      >
                        Profile
                      </Typography>
                    </Link>
                  </NavBarMenuIconIndictor>

                    <Typography
                      onClick={logoutAndRedirected}
                      sx={{
                        mt: '20px',
                        cursor: "pointer",
                        borderRadius: 1,
                        transition: "0.5s",
                        "&:hover": {
                          bgcolor: "red",
                        },
                      }}
                    >
                      Logout
                    </Typography>
                  </Box>

                ) : (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        transition: "1s",
                        position: "absolute",
                        bottom: "5px",
                      }}
                    >
                      <Link href={"/login"} onClick={toggleDropMenu}>
                        <Typography
                          sx={{
                            transition: "1s",
                            "&:hover": {
                              color: "#2cb67d",
                            },
                          }}
                        >
                          Login
                        </Typography>
                      </Link>
                      /
                      <Link href={"register"} onClick={toggleDropMenu}>
                        <Typography
                          sx={{
                            transition: "0.5s",
                            "&:hover": {
                              textDecoration: "underline",
                              textDecorationColor: "#2cb67d",
                            },
                          }}
                        >
                          Register
                        </Typography>
                      </Link>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          </Fade>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
}
