import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import getGames from "@/app/api/getGames";
import "keen-slider/keen-slider.min.css";
import "./HomePageSlider.css";
import { Box, Typography, CircularProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ChangeDarkLightColors from "utils/ChangeDarkLightColors";

export default function HomePageSlider() {
  const [games, setGames] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getGames();
      if (data == Object.error) {
        console.log("failed to catch");
      } else setLoaded(true);
      return setGames(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {games ? (
        <>
          <Box
            className="navigation-wrapper"
            sx={{
              width: { xs: "100%", sm: "50vh", md: "60vh" },
              height: { xs: "300px", sm: "30vh", md: "35vh" },
              display: "grid",
            }}
          >
            <Box ref={sliderRef} className="keen-slider">
              {games.map((game) => (
                <>
                  <div className="keen-slider__slide the-slide">
                    <Link href={game.game_url}>
                      <Image
                        alt="Loading.."
                        src={game.thumbnail}
                        // fill={true}
                        layout="fill"
                      ></Image>
                    </Link>
                  </div>
                </>
              ))}
            </Box>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </Box>
          {loaded && instanceRef.current && (
            <div className="dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Box
          className="navigation-wrapper"
          sx={{
            width: { xs: "100%", sm: "60%", md: "45%" },
            height: { xs: "250px", sm: "250px", md: "350px" },
            mb: { xs: 15, sm: 1 },
            border: "3px solid",
            borderColor: () => ChangeDarkLightColors(),
            display: "flex",
            alignItems: "center",
            bgcolor: "black",
          }}
        >
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <CircularProgress sx={{ color: "#fffffe" }} />
                <Typography variant="h4" sx={{ ml: 3 }}>
                  Loading...
                </Typography>
              </Box>
            </div>
          </div>
        </Box>
      )}
    </>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
