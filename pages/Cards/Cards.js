import React from "react";
import classes from "./Cards.module.css";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import RoboCard from "../../src/RoboCard/RoboCard";
import { robos } from "../../src/RoboData/RoboData";

const Cards = () => {
  const [data, setData] = React.useState(robos);

  const filterFunc = (e) => {
    const value = e.target.value;
    const filtered = robos.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(filtered);
  };

  return (
    <div className={classes.card}>
      <div>
        <h1 className={classes.h1}>Super Robos</h1>
      </div>
      <div>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            onChange={filterFunc}
            placeholder="Search Super Robos...."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
      <div className={classes.RoboCard}>
        {data.map((val) => {
          return <RoboCard name={val.name} id={val.id} place={val.place} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   width: "22ch",
    //   "&:focus": {
    //     width: "20ch",
    //   },
    // },
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  marginTop: 20,
  width: "100%",
}));
