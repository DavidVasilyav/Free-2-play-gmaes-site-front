'use client'
import {useEffect, useState} from 'react'
import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
export default function ChangeDarkLightColors(dark?: string, light?: string) {
  const darkLightState = useSelector((state: any) => state.darkOrlightMode.darkOrLight)
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [systemDefault, setSystemDefualt ] = useState()
  const [darkLight, setDarkOrLight] = useState()
  useEffect(() => {
      setDarkOrLight(darkLightState)
  },[ darkLight, darkLightState, prefersDarkMode])
  

    if (darkLight ) {
      return dark || "#0d0d0d";
    } else if (!darkLight) return light || "#eff0f3";
}
