import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Box
        sx={{
          height: "80vh",
        }}
      >
        <Box typography={'h4'}>
            This site build by David Vasilyav use Api to show all the available free to play game to PC platform.
        </Box>
        <br />
        <Box typography={"h5"}>
          Fullstack web-app build in nextJs and NodeJs for server side, MongoDB
          for database.
          <br /> The games data fetched from Api (rapid api).
          <br /> Responsive. <br /> user password protected by bcrypt.
          <br />
          JsonWebToken. <br /> Mui material for design.
        </Box>
        <br />
        <Box typography={'h5'}>
            My Github and Linkedin Profile:
            <Box sx={{color:'yellow'}}>
            <Link href={'https://github.com/DavidVasilyav'}>Github</Link>
            </Box>
            <Box sx={{color: 'blue'}}>
            <Link href={'https://www.linkedin.com/in/david-vasilyav-885245205/'}>Linkedin</Link>
            </Box>
        </Box>
      </Box>
    </>
  );
}
