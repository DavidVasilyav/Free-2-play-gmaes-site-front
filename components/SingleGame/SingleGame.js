'use client'
import React from 'react'
import { Box, Container, } from "@mui/material";
import ChangeDarkLightColors from 'utils/ChangeDarkLightColors';
import Link from 'next/link';
import SliderShow from 'components/SliderShow/SliderShow'
import Image from "next/image";

export default function SingleGame(oneGame) {
  const game = oneGame.game
    const ifLive = () => {
    if (game.status.toLowerCase() === "live") {
      return "green";
    } else return "red";
  };
    return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: {xs:"center", md:'normal'},
        borderTop: "3px solid #ff8906",
        // height: { md: "80vh" },
        bgcolor: () => ChangeDarkLightColors('', '#EFF0F3')
      }}
    >
      <Container
        sx={{
          width: { md: 700 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRight: { md: "2px solid" },
          pb: 1,
          textAlign: "center",
        }}
      >
        <Box fontSize={50} color={'#ff8906'} sx={{textDecoration:'underline'}}>
          {game.title}
        </Box>
        <Box width={{ xs: 250, md: 350 }}>
          <Image src={game.thumbnail} width={500} height={200}></Image>
        </Box>
        <Box
          className="system-req game-info"
          sx={{ mt: 2, display: { md: "flex" }, flexDirection: {md:'column'} }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ textDecoration: "underline", textAlign: "center", color:'#ff8906' }}>
              Game info:
            </Box>
            <Box color={() => ChangeDarkLightColors('#fffffe', '#000')}>
            <ul>
              <li>Genre: {game.genre}.</li>
              <li>Platform: {game.platform}.</li>
              <li>Developer: {game.developer}.</li>
              <li>Release date: {game.release_date}.</li>
              <li>
                <Box display={"flex"} justifyContent={"center"} gap={1}>
                  Status: <Box color={() => ifLive()}>{game.status}</Box>
                </Box>
              </li>
            </ul>
            </Box>
          </Box>
          <Box>
            <Box sx={{ textDecoration: "underline", textAlign: "center", color:'#ff8906' }}>
              Minimum system requirements:
            </Box>
            <Box color={() => ChangeDarkLightColors('#fffffe', '#000')}>
            <ul>
              <li>{game.minimum_system_requirements.processor}.</li>
              <li>RAM: {game.minimum_system_requirements.memory}.</li>
              <li>OS: {game.minimum_system_requirements.os}.</li>
              <li>C{game.minimum_system_requirements.graphics}.</li>
              <li>Storage: {game.minimum_system_requirements.storage}.</li>
            </ul>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box className={'description'} sx={{ width: "100%", }}>
        <Container sx={{ mb: 1, display:'flex', flexDirection: 'column',  alignItems:' center' }}>
          <Box sx={{color: '#ff8906'}} fontSize={{ xs: 20, md: 30 }}>Description:</Box>
          <Box fontSize={{ xs: 16, md: 20 }} color={() => ChangeDarkLightColors('#fffffe', '#000')}>{game.description}</Box>
          <Box
          sx={{
            border: "1px solid white",
            width: 70,
            borderRadius: 2,
            m: 1,
            textAlign: "center",
            bgcolor: "#ff8906",
            transition: '1s',
            ":hover": {
              bgcolor: "black",
            },
          }}
        >
          <Link href={game.game_url}> Game Site</Link>
        </Box>
        <Box>
          <SliderShow imgs={game.screenshots} sx={{width: {xs: 300, md: 400}}} />
        </Box>
        </Container>
      </Box>
     
    </Box>
  </>
);
}

