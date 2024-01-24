"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { ProfileNavIndicator } from "styles/profileNav.style";
import Image from "next/image";
import ProfileNavBar from "components/profile/ProfileNavBar";
import GlobalButton from "components/Button/GlobalButton";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
  Avatar,
  IconButton,
  ListItemAvatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import GlobalTextField from "components/textFiled/GlobalTextField";
import {
  getUserFavoriteList,
  removeFromList,
} from "redux/reducers/userAuthReducer";
import { setCategory } from "redux/reducers/changeCategory";
import { EditUserInfo } from "services/authService";
const navMenu = ["Profile", "Favorite-Games", "Edit Profile"];
import ChangeDarkLightColors from "utils/ChangeDarkLightColors";
let _id;

export default function MyProfile() {
  // const [displayData, setDisplayData] = useState({
  //   profile: true,
  //   gamesList: true,
  //   edit: true,
  // });
  const userAuth = useSelector((state) => state.userAuth);
  const profileState = useSelector((state) => state.profileState);
  const [indicator, setIndicator] = useState(profileState);
  const [theValue, setTheValue] = useState("Profile");
  const [displayProfile, setDisplayProfile] = useState(false);
  const [displayGameList, setDisplayGameList] = useState(true);
  const [displayEdit, setDisplayEdit] = useState(true);
  const [user, setUser] = useState([]);
  const [userFavoriteList, setUserFavoriteList] = useState(
    userAuth.favoriteList
  );
  const [listEmpty, setListEmpty] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    age: 0,
    _id: _id,
  });
  // const userFromLocalStorage = JSON.parse(localStorage.getItem('user'))
  const getValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const navLinkChangeOnClick = async () => {
    if (profileState.category == "Profile") {
      if (!displayProfile) {
        return;
      }
      console.log("profile");
      setIndicator("Profile");
      setDisplayProfile(false);
      setDisplayGameList(true);
      setDisplayEdit(true);
      return;
    }
    if (profileState.category == "Favorite-Games") {
      if (!displayGameList) {
        return;
      }
      dispatch(getUserFavoriteList(user.userId));
      if (userAuth.favoriteList.length < 0) {
        setListEmpty(true);
      }
      setIndicator("Favorite-Games");
      setDisplayGameList(false);
      setDisplayProfile(true);
      setDisplayEdit(true);
      return;
    }
    if (profileState.category == "Edit Profile") {
      setIndicator("Edit Profile");
      setDisplayEdit(false);
      setDisplayProfile(true);
      setDisplayGameList(true);
      return;
    }
  };

  async function removeGame(e) {
    e.preventDefault();
    const gameId = e.currentTarget.value;
    dispatch(removeFromList({ _id, gameId }));
    dispatch(getUserFavoriteList(user.userId));
    setUserFavoriteList(userAuth.favoriteList);
  }

  const updateUsername = (e) => {
    let username = e.target.value;
    setInputs((inputs) => inputs.username == username);
  };

  const updateUsernameBtn = () => {
    EditUserInfo({ _id: _id, username: inputs.username });
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    } else {
      const userFromLocal = JSON.parse(localStorage.getItem("user"));
      setUser(userFromLocal);
      setUserFavoriteList(userAuth.favoriteList);
      _id = JSON.parse(localStorage.getItem("user")).userId || 0;
    }
    navLinkChangeOnClick();
  }, [userAuth, theValue, profileState, userFavoriteList]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          bgcolor: () => ChangeDarkLightColors("", "#EFF0F3"),
          color: "#fffe",
          height: "80vh",
        }}
      >
        <ProfileNavBar value={profileState} />
        <Box
          id="user-nav"
          sx={{
            width: "30vh",
            height: "80vh",
            bgcolor: () => ChangeDarkLightColors("", "#EFF0F3"),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRight: "2px solid #ff8906",
            p: 1,
            display: { xs: "none", sm: "flex" },
            color: () => ChangeDarkLightColors("#EFF0F3", "#0f0e17"),
          }}
        >
          <Avatar
            sx={{}}
            alt="username"
            src="https://th.bing.com/th/id/R.40d4f6dd63cdcd42ea0a69cad81a37b4?rik=wBIXHnxSwcvB8g&pid=ImgRaw&r=0"
          />
          {navMenu.map((item) => (
            <ProfileNavIndicator key={item} active={indicator === item}>
              <List
                color="red"
                data-value={item}
                value={item}
                onClick={() => {
                  dispatch(setCategory(item));
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    {/* <ListItemIcon> */}
                    {/* <InboxIcon /> */}
                    {/* </ListItemIcon> */}
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              </List>
            </ProfileNavIndicator>
          ))}
        </Box>
        <Box
          id="user-info-box"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "fill",
            bgcolor: () => ChangeDarkLightColors("", "#EFF0F3"),
            color: () => ChangeDarkLightColors("#EFF0F3", "#0f0e17"),
          }}
        >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {user.username}
            </Typography>
          <Box
            id="info-box"
            sx={{
              bgcolor: () => ChangeDarkLightColors("", "#EFF0F3"),
              color: () => ChangeDarkLightColors("#EFF0F3", "#0f0e17"),
              height: "80vh",
              borderTop: "2px solid #ff8906",
            }}
          >
            <Box id="display-profile">
              {displayProfile ? (
                <></>
              ) : (
                <>
                  <Box
                    id="profile-body"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        mt: 4,
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <Typography>First Name: {user.firstName}</Typography>
                      <Typography>Last Name: {user.lastName}</Typography>
                      <Typography>Email: {user.email}</Typography>
                      <Typography>Age: {user.age}</Typography>
                    </Box>
                  </Box>
                </>
              )}
            </Box>
            <Box
              id="display-game-list"
              sx={{
                overflowY: "auto",
              }}
            >
              {displayGameList ? (
                <></>
              ) : (
                <>
                  {listEmpty ? (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          mt: 5,
                        }}
                      >
                        List is empty
                      </Box>
                    </Box>
                  ) : (
                    <>
                      <Box sx={{ overFlowY: "scroll", height: "70vh" }}>
                        <List sx={{ p: 1 }} dense={true}>
                          {userAuth.favoriteList.map((game) => (
                            <ListItemButton
                              key={game.game_id}
                              sx={{
                                bgcolor: "#ff8906",
                                color: ()=> ChangeDarkLightColors('#000', '#fffffe'),
                                "&:hover": {
                                  borderBottom: "2px solid #000",
                                  borderTop: `2px solid`,
                                  borderTopColor:()=> ChangeDarkLightColors('#fffffe', '#000') ,
                                  borderBottomColor:()=> ChangeDarkLightColors('#fffffe', '#000') ,
                                  bgcolor: ()=> ChangeDarkLightColors('#000', '#fffffe'),
                                  color: "#ff8906",
                                  textDecoration: "underline",
                                  padding: 1,
                                },
                              }}
                              divider={true}
                              href={game.gameUrl}
                            >
                              <ListItemAvatar>
                                <Avatar
                                // sx={{ width: 56, height: 56, mr: 1 }}
                                >
                                  <img
                                    height="100%"
                                    src={game.thumbnail}
                                    alt={game.title}
                                  />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary={game.gameTitle} />
                              <IconButton
                                onClick={removeGame}
                                value={game._id}
                                edge="end"
                                aria-label="delete"
                                sx={{
                                  transition: "1s",
                                  color: "#000",
                                  "&:hover": {
                                    color: "red",
                                  },
                                }}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </ListItemButton>
                          ))}
                        </List>
                      </Box>
                    </>
                  )}
                </>
              )}
            </Box>
            <Box>
              {displayEdit ? (
                <></>
              ) : (
                <Box sx={{ p: 1 }} onChange={getValue}>
                  <GlobalTextField
                    onChange={updateUsername}
                    name="username"
                    label="username"
                  />
                  <GlobalButton
                    value={inputs.username}
                    text="update"
                    onClick={updateUsernameBtn}
                  />
                  <GlobalTextField name="email" label="email" />
                  <GlobalTextField name="age" label="age" />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
