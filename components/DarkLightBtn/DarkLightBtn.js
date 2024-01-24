import { useEffect, useState } from "react";
import { Box, Button, Chip } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "redux/reducers/setDarkLightMode";
import ChangeDarkLightColors from "utils/ChangeDarkLightColors";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import { useMediaQuery } from "@mui/material";

export default function DarkLightBtn() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const darkOrlightState = useSelector(
    (state) => state.darkOrlightMode.darkOrLight
  );
  const [changeIcon, setChangeIcon] = useState(prefersDarkMode);
  const dispatch = useDispatch();

  const turnOnAndOff = async () => {
    darkOrlightState == true
      ? dispatch(setTheme(false))
      : dispatch(setTheme(true));
  };
  const checkIdSystemInDarkMode = () => {
    prefersDarkMode == true ? setChangeIcon(false) : setChangeIcon(true);
  };
  useEffect(() => {
    // checkIdSystemInDarkMode()
    setChangeIcon(darkOrlightState);
  }, [darkOrlightState, changeIcon]);
  return (
    <>
      {changeIcon ? (
        <>
          <Chip
            onClick={turnOnAndOff}
            icon={<LightModeTwoToneIcon color='black' sx={{color:'black'}} />}
            label="Light"
            sx={{
              transition: '1s',
              color: "black",
              height: 24,
              bgcolor: '#fffffe',
              "&:hover": { color: "#ff8906", bgcolor:'#FFFFFE' },
            }}
          ></Chip>
        </>
      ) : (
        <>

          <Chip
            onClick={turnOnAndOff}
            icon={<DarkModeTwoToneIcon color='white' sx={{color:'white', ':&hover':{color: '#ff8906'}}}/>}
            label="Dark"
            sx={{
              transition: '1s',
              color: "#fffffe",
              bgcolor: 'black',
              height: 24,
              "&:hover": { color: "#ff8906", bgcolor:'black' },
            }}
            ></Chip>
        </>
      )}

    </>
  );
}
