"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "10vh",
        borderTop: "2px solid #fffffe",
        transition: "2s",
        display: 'flex',
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
        <Link href={'https://www.instagram.com/david_vasilyav/?img_index=1'}>
        <InstagramIcon
          sx={{
            transition: "1s",
            "&:hover": {
              color: "orange",
            },
          }}
          />
          </Link>
          <Link href={'https://www.facebook.com/vasilyav/'}>
        <FacebookIcon
          sx={{
            transition: "1s",
            "&:hover": {
              color: "blue",
            },
          }}
          />
          </Link>
        <WhatsAppIcon
          sx={{
            transition: "1s",
            "&:hover": {
              color: "green",
            },
          }}
        />
        <Link href={'https://www.linkedin.com/in/david-vasilyav-885245205/'}>
        <LinkedInIcon
          sx={{
            transition: "1s",
            "&:hover": {
              color: "lightblue",
            },
          }}
          />
      </Link>
      </Box>
      <Box sx={{
        height: '10vh',
        position: 'absolute',
        right: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Link href={'/about'}>
        <Typography>About the site</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
