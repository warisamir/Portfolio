import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Initials } from "../../utils/getName";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
  text: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    fontSize: "120px",
  }
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className={classes.svgHover}
      >
        <text 
          x="50%" 
          y="50%" 
          dominantBaseline="central" 
          textAnchor="middle" 
          className={classes.text}
        >
          {Initials}
        </text>
      </svg>
    );
};
