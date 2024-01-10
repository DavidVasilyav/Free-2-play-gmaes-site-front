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

const sortBy = ["Abc", "Release-date"];

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.black, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

export default function SearchBar({ listFromApi, searchResult }) {
  const [search, setSearch] = useState(listFromApi);
  const [searchInput, setSearchInput] = useState([]);
  const [gameList, setGameList] = useState(listFromApi);
  const [sortInput, setSortInput] = useState("Abc");
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
          position: 'sticky',
          display: 'flex',
          flexDirection: 'row',
          height: 'max-content',
          padding: 1,
          gap: 1,
          mb: 1,
          bgcolor: '#242629',
          borderBottom: '2px solid #fffffe'
         
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
              color: '#2cb67d',
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
