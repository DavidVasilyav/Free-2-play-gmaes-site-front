import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CardActions,
  Card,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GlobalButton from "../Button/GlobalButton";
import Link from "next/link";
import Image from 'next/image'
import { addGameToFavorite } from "../../services/addGameToFavoriteService";
import { useDispatch, useSelector } from "react-redux";

export default function GamesContainer({ gamesList }) {
  const [disableBtn, setDisableBtn] = useState(true)
  const addGamesToProfileFavorite = (e) => {
    e.preventDefault
    const _id = JSON.parse(localStorage.getItem('user')).userId
    const gameInfo = JSON.parse(e.target.value);
    //  setFavoriteValues({
      // ...favoriteValues,
      // _id,
      // eTarget,
    // });
    addGameToFavorite(_id, gameInfo)
  };

  const [favoriteValues, setFavoriteValues] = useState([]);
  useEffect(() => {
    if(!localStorage.getItem('user')) {
      setDisableBtn(true)
    } else if(localStorage.getItem('user'))
    setDisableBtn(false)
  },[favoriteValues, disableBtn])

  return (
      <Grid
      container
      spacing={2}
      sx={{
        bgcolor: '#242629',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
      >
      {gamesList.map((game) => (
        <Grid key={game.id} xs={12} sm={6} md={4} sx={{
          display: 'flex',
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Card
            key={game.id}
            sx={{
              backgroundColor: "#16161a",
              border: '5px solid #010101',
              maxWidth: 345,
              height: 600,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: 'center',
            }}
            >
            <Link href={`/games/${game.id}`}>
              <Box
                sx={{
                  height: 230,
                  borderBottom: "3px solid #2cb67d",
                }}
                >
                <Image
                  height={500}
                  src={game.thumbnail}
                  width={500}
                  alt={game.title}
                  />
              </Box>
            </Link>
              <Link href={`/games/${game.id}`}>
                <Typography
                  gutterBottom
                  sx={{
                    height: 20,
                    color: "#fffffe",
                    "&:hover": {
                      color: "#2cb67d",
                    },
                  }}
                  variant="h5"
                  component="div"
                  >
                  {game.title}
                </Typography>
              </Link>
             
              <Typography variant="body1" sx={{ color: "#2cb67d", height: 80 }}>
                {game.short_description}
              </Typography>
             <Box sx={{display:'flex',flexDirection:'column', height: 70}}>

              <Typography 
              variant="caption"
              sx={{ color: "#94a1b2"}}
              >
                Release Date: {game.release_date}
              </Typography>
              <Typography 
              variant="caption"
              sx={{ color: "#94a1b2" }}
              >
                 Developer: {game.developer}
              </Typography>
                </Box>
            <CardActions>
              {disableBtn ? <>
                <GlobalButton text="Game Card" href={`/games/${game.id}`} />
              </> : 
              <>
                <GlobalButton text="Game Card" href={`/games/${game.id}`} />
              {/* <GlobalButton text="add game" onClick={addGamesToProfileFavorite} value={[{ game_id: game.id, title: game.title, thumbnail: game.thumbnail, gameUrl: game.game_url}]} /> */}
              <GlobalButton
                text="add game"
                onClick={addGamesToProfileFavorite}
                value={`{"gameId": ${game.id}, "gameTitle": "${game.title}", "gameUrl": "${game.game_url}", "thumbnail": "${game.thumbnail}", "gameGenre": "${game.genre}"}`}
                />
              </>}
              
            </CardActions>
          </Card>
      </Grid>
  ))}
    </Grid>
  );
}
