"use client";
import Image from "next/image";
import { Box, Paper, useTheme, Typography } from "@mui/material";
import styles from "../../styles/home.module.css";
import Link from "next/link";
import mainBackground from "../../public/img/HomeBackground.jpg";
import mmorpgBackGround from "../../public/img/MmorpgBackGroundPaper.jpg";
import shooterBackGround from "../../public/img/ShoterBackgroundPaper.jpg";
import survivialBackGround from "../../public/img/SurvivalBackgroundPaper.jpg";
import HomePageSlider from "components/homePageSlider/HomePageSlider";
import changeDarkLightColors from 'utils/ChangeDarkLightColors'

const pages = [
  {
    name: "Shooter",
    href: "/games/shooter",
    img: `${shooterBackGround.src}`,
  },
  { name: "Mmorpg", href: "/games/mmorpg", img: `${mmorpgBackGround.src}` },
  {
    name: "Survival",
    href: "/games/survival",
    img: `${survivialBackGround.src}`,
  },
];
export default function Home() {
  return (
    <>
      <main>
      
        <Box
          sx={{
            position: "relative",
            p: 1,
            textAlign: "center",
            backgroundImage: `url(${mainBackground.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "80vh",
            color: '#fffffe'
          }}
        >
          <Box>
          <h2>
            Find something new to play for free!
          </h2>
          </Box>
          <HomePageSlider />

          <Box
            sx={{
              fontSize: 30,
              position: 'relative',
              top: 7,
              textDecoration: "underline",
              textDecorationColor: '#ff8e3c',
              color:changeDarkLightColors('#0d0d0d','#fffffe'),
            }}
          >
            Categories:
          </Box>
          <Box
            className={styles.category_links}
            sx={{
              p:1,
              width: "100%",
              display: "flex",
              gap: { xs: 0, sm: 2 },
              justifyContent: "center",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            {pages.map((page) => (
              <>
                <Link href={page.href}>
                  <Paper
                    className={styles.paper_category}
                    elevation={3}
                    sx={{
                      position: "relative",
                      fontSize: { xs: "50px", sm: "15px" },
                      color: "black",
                      height: { xs: "400px", sm: "150px", md: "170px" },
                      width: { xs: "100%", sm: "130px", md: "150px" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundImage: `url(${page.img})`,
                      backgroundAttachment: { xs: "fixed", sm: "scroll" },
                      mb: 1,
                    }}
                  >
                    <h4 className={styles.category_text}>{page.name}</h4>
                  </Paper>
                </Link>
              </>
            ))}
          </Box>
        </Box>
      </main>
    </>
  );
}
