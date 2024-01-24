import React from "react";
import { Box, Container, Slide } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import getSingleGameById from "@/app/api/singleGame";
import Image from "next/image";
import Link from "next/link";
import ChangeDarkLightColors from "utils/ChangeDarkLightColors";
import SingleGame from "components/SingleGame/SingleGame";
async function getGame(paramsId) {
  const res = await getSingleGameById(paramsId);
  return res

}

export default async function gameDetails({ params }) {
  const game = await getGame(params.id)
  return (
    <>
      <SingleGame game={game}/>
    </>
  );
}

