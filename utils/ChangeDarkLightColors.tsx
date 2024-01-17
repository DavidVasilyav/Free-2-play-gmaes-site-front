// import React from "react";
// function changeDarkLightColors(dark?: string, light?: string) {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // if (prefersDarkMode) {
    // return dark || "#0d0d0d";
  // } else if (!prefersDarkMode) return light || "#eff0f3";
// }


import {useEffect, useState} from 'react'
import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from 'redux/reducers/setDarkLightMode';
export default function ChangeDarkLightColors(dark?: string, light?: string) {
  const darkOrlightState = useSelector((state: any) => state.darkOrlightMode.darkOrLight)
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkOrlight, setDarkOrLight] = useState(prefersDarkMode)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTheme(prefersDarkMode))
  },[prefersDarkMode])
  

    if (darkOrlightState) {
      return dark || "#0d0d0d";
    } else if (!darkOrlightState) return light || "#eff0f3";
}
