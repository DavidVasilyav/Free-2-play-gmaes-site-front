'use client' 
import { React, useState } from "react";

import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  InputBase,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import GamesContainer from "../../components/GamesContainer/GamesContainer";
import Select from "@mui/material/Select";
import GlobalTextField from "../textFiled/GlobalTextField";
import ChangeDarkLightColors from "utils/ChangeDarkLightColors";

export default function SearchBar({ listFromApi, searchResult }) {
  const [search, setSearch] = useState(listFromApi);
  const [searchInput, setSearchInput] = useState([]);
  const [gameList, setGameList] = useState(listFromApi);
  const [sortInput, setSortInput] = useState("Abc");
  const sortBy = ["Abc", "Release-date"];
  const SortGames = (filterArgument) => {
    gameList.sort((a, b) => {
      const nameA = a[filterArgument].toUpperCase();
      const nameB = b[filterArgument].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  };
  const Option = sortBy.map((option) => (
    <MenuItem key={option} value={option}>
      <em> {option} </em>
    </MenuItem>
  ))
  const handleSearchInput = (e) => {
    e.preventDefault();
    const keyword = e.target.value;
    setSearchInput(e.target.value);
    if (!keyword) {
      return setSearch(listFromApi);
    } else {
      setGameList(listFromApi);
      const gamesTitle = gameList.filter((game) => {
        const gameName = game.title.toLowerCase();
        return gameName
          .toString()
          .toLowerCase()
          .includes(keyword.toString().toLowerCase());
      });
      setSearch(gamesTitle);
    }
  };

  const handleSortChange = (e) => {
    const correctInput = e.target.value;
    setSortInput(correctInput);
    if (correctInput == "Release-date") {
      SortGames("release_date");
    }
    if (correctInput == "Abc") {
      SortGames("title");
    }
  };

  return (
    <>
      <Box>
        <FormControl variant="filled"
        sx={{
          bgcolor: () => ChangeDarkLightColors("", "#EFF0F3"),
          position: 'sticky',
          display: 'flex',
          flexDirection: 'row',
          height: 'max-content',
          padding: 1,
          gap: 1,
          mb: 1,
          borderBottom: '2px solid #ff8906'
         
        }}>
          <GlobalTextField
          onChange={handleSearchInput}
          name='Search'
          value={searchInput}
          label={'Search'}
          />
          <Box
           sx={{
            '& .MuiSvgIcon-root': {
              color: '#ff8906',
             }
           }}
          >
          <GlobalTextField
          select={true}
          onChange={handleSortChange}
          name='Search'
          value={sortInput}
          label={'Sort By:'}
          option={Option}
          >
            {sortBy.map((option) => (
              <MenuItem key={option} value={option}>
                <em> {option} </em>
              </MenuItem>
            ))}
          </GlobalTextField>
          </Box>
        </FormControl>
          <GamesContainer gamesList={search} />
      </Box>
    </>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

/* <Box> */
{
  /* <Search> */
}
{
  /* <SearchIconWrapper> */
}
{
  /* <SearchIcon /> */
}
{
  /* </SearchIconWrapper> */
}
{
  /* <StyledInputBase */
}
// placeholder="Search…"
// inputProps={{ "aria-label": "search" }}
// onChange={handleSearchInput}
// value={searchInput}
// />
{
  /* </Search> */
}
{
  /* </Box> */
}
// <Box>
