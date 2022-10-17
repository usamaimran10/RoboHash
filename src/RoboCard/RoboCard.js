import React from "react";
import classes from "./RoboCard.module.css";
const RoboCard = ({ name, id, place }) => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.card}>
        <div>
          <img src={`https://robohash.org/${name}?size=180x180`} />
        </div>
        <div>
          <span className={classes.name}>{name}</span>
        </div>
        <div>
          <span className={classes.place}>{place}</span>
        </div>
      </div>
    </div>
  );
};

export default RoboCard;
