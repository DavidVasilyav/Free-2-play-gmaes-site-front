"use client";

import React, { useState, useEffect } from "react";
import "./sliderShow.css";
import { Box } from "@mui/material";
import Image from "next/image";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
const Thumbnail = ({ arr, image, index }) => {
  return (
    <div className="tumbnail">
      {arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default function Slideshow({ imgs, sx }) {
  console.log(imgs);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <Box sx={sx}>
        <Box className='img_container'>
        <Image className="theImage" src={imgs[index].image} width={500} height={200} />
        </Box>
        <Box className='slider_btn' sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <button onClick={prev}>
            <KeyboardDoubleArrowLeftIcon
              sx={{
                color: "#2cb67d",
                transition: "1s",
                ":hover": {
                  color: "#fffffe",
                },
              }}
            />
          </button>
          <button onClick={next}>
            <KeyboardDoubleArrowRightIcon
              sx={{
                color: "#2cb67d",
                transition: "1s",
                ":hover": {
                  color: "#fffffe",
                },
              }}
            />
          </button>
        </Box>
      </Box>
    </>
  );
}
