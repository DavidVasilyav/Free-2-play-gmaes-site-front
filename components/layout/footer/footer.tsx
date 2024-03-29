"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import changeDarkLightColors from "../../../utils/ChangeDarkLightColors";

function Footer() {
  return (
    <Box
      color="primary"
      sx={{
        height: "10vh",
        borderTop: "solid",
        borderColor: "#ff8e3c",
        transition: "2s",
        display: "flex",
        backgroundColor: changeDarkLightColors("#232323", "#EFF0F3"),
      }}
    >
      <Box
        sx={{
          width: "150px",
          display: "flex",
          justifyContent: "space-evenly",
          pt: 3,
        }}
      >

        {/* <Link href={"https://www.instagram.com/david_vasilyav/?img_index=1"}>
          <InstagramIcon
            sx={{
              transition: "1s",
              "&:hover": {
                color: "orange",
              },
            }}
          />
        </Link> */}
        <Link href={"https://www.facebook.com/vasilyav/"}>
          <FacebookIcon
            sx={{
              transition: "1s",
              color: "blue",

              "&:hover": {
                color: "blue",
              },
            }}
          />
        </Link>
        <WhatsAppIcon
          sx={{
            transition: "1s",
            color: "green",

            "&:hover": {
              color: "green",
            },
          }}
        />
        <Link href={"https://www.linkedin.com/in/david-vasilyav-885245205/"}>
          <LinkedInIcon
            sx={{
              transition: "1s",
              color: "#180294ed",

              "&:hover": {
                color: "#180294ed",
              },
            }}
          />
        </Link>
      </Box>
      <Box
        sx={{
          height: "10vh",
          position: "absolute",
          right: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href={"/about"}>
          <Typography>About the site</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
