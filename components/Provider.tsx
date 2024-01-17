
"use client"

// import {ThemeProvider} from 'next-themes';
// import { useState, useEffect } from 'react'



// const Provider = ({children} : Props) => {

// const [mounted,setMounted] = useState<boolean>(false);

// useEffect (() => {
//     setMounted(true);
// },[]);

// if(!mounted){
//     return <>{children}</>;
// }


//   return (
//     <ThemeProvider enableSystem={true} attribute='class'>
//       {children}
//     </ThemeProvider>
//   )
// }

// export default Provider;

import {useMemo, useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from 'redux/reducers/setDarkLightMode';

type Props = {
  children: string | React.JSX.Element | React.JSX.Element[];
}
function Provider({children} : Props) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const darkOrlightState = useSelector((state: any) => state.darkOrlightMode.darkOrLight)
  const dispatch = useDispatch();

  const [darkOrlight, setDarkOrLight] = useState(prefersDarkMode)
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: '#eff0f3',
            contrastText: '#0d0d0d'
          },
          mode: darkOrlightState ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode, darkOrlightState],
  );

  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default Provider