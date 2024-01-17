import { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "redux/reducers/setDarkLightMode";
import ChangeDarkLightColors from "utils/ChangeDarkLightColors";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
export default function DarkLightBtn() {
  const darkOrlightState = useSelector(
    (state) => state.darkOrlightMode.darkOrLight
  );
  const dispatch = useDispatch();
  console.log(darkOrlightState);

  const turnOnAndOff = () => {
    if (darkOrlightState) {
      return dispatch(setTheme(false));
    }
    if (!darkOrlightState) {
      console.log(darkOrlightState);

      return dispatch(setTheme(true));
    }
  };

  useEffect(() => {}, [darkOrlightState]);
  return (
    <>
      <Button
            disableRipple={true}
            onClick={() => turnOnAndOff()}
        sx={{
          "&:hover": { bgcolor: ChangeDarkLightColors("#232323", "#EFF0F3") },
        }}
      >
        {darkOrlightState ? (
          <>
            <LightModeTwoToneIcon
            disableRipple={true}
            sx={{
                transition: '1s',
                color: "#fffffe",
                width: 20,
                "&:hover": { color: "#ff8906" },
              }}
            />
          </>
        ) : (
          <>
            <DarkModeTwoToneIcon
            disableRipple={true}
              sx={{ transition: '1s', color: "#ff8906", "&:hover": { color: "#0f0e17" } }}
            />
          </>
        )}
      </Button>
    </>
  );
}
