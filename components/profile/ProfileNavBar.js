import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Avatar,
} from "@mui/material";
import {getUserFavoriteList, removeFromList} from "redux/reducers/userAuthReducer";
import { ProfileNavIndicator } from "styles/profileNav.style";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Slide from "@mui/material/Slide";
import { setCategory } from '../../redux/reducers/changeCategory'
const navMenu = ["Profile", "Favorite-Games", "Edit Profile"];

export default function ProfileNavBar(value) {
  const userAuth = useSelector((state) => state.userAuth);
  const profileState = useSelector((state) => state.profileState);
  const [user, setUser] = useState([]);
  const [userFavoriteList, setUserFavoriteList] = useState(userAuth.favoriteList);
  const [indicator, setIndicator] = useState(profileState);
  const [showMenu, setShowMenu] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [displayProfile, setDisplayProfile] = useState(false);
  const [displayGameList, setDisplayGameList] = useState(true);
  const [displayEdit, setDisplayEdit] = useState(true);

  const dispatch = useDispatch();

const navLinkChangeOnClick = async () => {
  if (profileState.category == "Profile") {
    if (!displayProfile) {
      return;
    }
    console.log('profile');
    setIndicator("Profile");
    setDisplayProfile(false);
    setDisplayGameList(true);
    setDisplayEdit(true);
    return;
  } else if (profileState.category == "Favorite-Games") {
    console.log('Favorite');
    if (!displayGameList) {
      return;
    }
    dispatch(getUserFavoriteList(user.userId));
    setIndicator("Favorite-Games");
    setDisplayGameList(false);
    setDisplayProfile(true);
    setDisplayEdit(true);
    return;
  }  if (profileState.category == "Edit Profile") {
    setIndicator("Edit Profile");
    setDisplayEdit(false);
    setDisplayProfile(true);
    setDisplayGameList(true);
    return;

  }
};
  useEffect(() => {
    const userFromLocal = JSON.parse(localStorage.getItem("user"));
    setUser(userFromLocal);
    setUserFavoriteList(userAuth.favoriteList)
  navLinkChangeOnClick()
  }, [userAuth, profileState]);

  return (
    <>
      <Slide direction="right" in={showMenu} mountOnEnter unmountOnExit>
        <Box
          id="user-nav"
          sx={{
            width: "30vh",
            height: "80vh",
            bgcolor: "#16161a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRight: "2px solid #fffe",
            p: 1,
            display: { xs: "flex", sm: "none" },
          }}
        >
          <ArrowCircleRightIcon
            onClick={() => {
              setShowMenu(false),
                setTimeout(() => {
                  setShowIcon(true);
                }, 500);
            }}
            sx={{
              position: "absolute",
              left: 145,
              bottom: "50%",
              color: "green",
              rotate: "180deg",
              bgcolor: "#ffffff",
              borderRadius: 5,
            }}
          />

          <Avatar
            sx={{}}
            alt="username"
            src="https://th.bing.com/th/id/R.40d4f6dd63cdcd42ea0a69cad81a37b4?rik=wBIXHnxSwcvB8g&pid=ImgRaw&r=0"
          />
          {navMenu.map((item) => (
            <ProfileNavIndicator key={item} active={indicator === item}>
              <List data-value={item} onClick={() => {dispatch(setCategory(item)); setShowMenu(false); setTimeout(() => {
                  setShowIcon(true);
                }, 500);}}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              </List>
            </ProfileNavIndicator>
          ))}
        </Box>
      </Slide>
      {showIcon ? (
        <>
          <ArrowCircleRightIcon
            onClick={() => {
              setShowMenu(true);
              setShowIcon(false);
            }}
            sx={{
              position: "absolute",
              bottom: "50%",
              color: "green",
              bgcolor: "#ffffff",
              borderRadius: 5,
            }}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
