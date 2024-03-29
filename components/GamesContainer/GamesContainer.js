import { useEffect, useState } from "react";
import { Box, Typography, CardActions, Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GlobalButton from "../Button/GlobalButton";
import Link from "next/link";
import Image from "next/image";
import { addGameToFavorite } from "../../services/addGameToFavoriteService";
import { useDispatch, useSelector } from "react-redux";
import changeDarkLightColors from "utils/ChangeDarkLightColors";
export default function GamesContainer({ gamesList }) {
  const [disableBtn, setDisableBtn] = useState(true);
  const addGamesToProfileFavorite = (e) => {
    e.preventDefault;
    const _id = JSON.parse(localStorage.getItem("user")).userId;
    const gameInfo = JSON.parse(e.target.value);
    //  setFavoriteValues({
    // ...favoriteValues,
    // _id,
    // eTarget,
    // });
    addGameToFavorite(_id, gameInfo);
  };

  const [favoriteValues, setFavoriteValues] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      setDisableBtn(true);
    } else if (localStorage.getItem("user")) setDisableBtn(false);
  }, [favoriteValues, disableBtn]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        bgcolor: () => changeDarkLightColors(),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {gamesList.map((game) => (
        <Grid
          key={game.id}
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            raised={true}
            key={game.id}
            sx={{
              backgroundColor: () =>
                changeDarkLightColors("#0f0e17", "#fffffe"),
              maxWidth: 345,
              height: 600,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Link href={`/games/${game.id}`}>
              <Box
                sx={{
                  height: 230,
                  borderBottom: "3px solid #ff8e3c",
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
                  color: () => changeDarkLightColors("#fffffe", "#0f0e17"),
                  "&:hover": {
                    color: "#ff8e3c",
                  },
                }}
                variant="h5"
                component="div"
              >
                {game.title}
              </Typography>
            </Link>

            <Typography
              variant="body1"
              sx={{
                color: () => changeDarkLightColors("#a7a9be", "#2e2f3e"),
                height: 80,
              }}
            >
              {game.short_description}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", height: 70 }}>
              <Typography
                variant="caption"
                sx={{
                  color: () => changeDarkLightColors("#a7a9be", "#2e2f3e"),
                }}
              >
                Release Date: {game.release_date}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: () => changeDarkLightColors("#a7a9be", "#2e2f3e"),
                }}
              >
                Developer: {game.developer}
              </Typography>
            </Box>
            <CardActions>
              {disableBtn ? (
                <>
                  <GlobalButton
                    sx={{
                     bgcolor: () =>
                        changeDarkLightColors("#2e2f3e", "#FFFFFE"), 
                      color: () => changeDarkLightColors("#fffffe", "#2e2f3e"),
                    }}
                    text="Game Card"
                    href={`/games/${game.id}`}
                  />
                </>
              ) : (
                <>
                  <GlobalButton
                    sx={{
                      bgcolor: () =>
                        changeDarkLightColors("#2e2f3e", "#FFFFFE"), 
                      color: () => changeDarkLightColors("#fffffe", "#2e2f3e"),
                    }}
                    text="Game Card"
                    href={`/games/${game.id}`}
                  />
                  {/* <GlobalButton text="add game" onClick={addGamesToProfileFavorite} value={[{ game_id: game.id, title: game.title, thumbnail: game.thumbnail, gameUrl: game.game_url}]} /> */}
                  <GlobalButton
                    sx={{
                      bgcolor: 'red',
                      color: () => changeDarkLightColors("#fffffe", "#2e2f3e"),
                    }}
                    text="add game"
                    onClick={addGamesToProfileFavorite}
                    value={`{"gameId": ${game.id}, "gameTitle": "${game.title}", "gameUrl": "${game.game_url}", "thumbnail": "${game.thumbnail}", "gameGenre": "${game.genre}"}`}
                  />
                </>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
