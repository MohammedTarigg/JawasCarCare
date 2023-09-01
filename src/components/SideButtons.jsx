import React, { useEffect } from "react";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BackArrowButton = ({ setBg, bgNo }) => {
  function handleDecreade(no) {
    if (no > 0) {
      setBg(`${parseInt(no) - 1}`);
    } else {
      setBg("4");
    }
  }

  return (
    <Button
      onClick={() => {
        handleDecreade(bgNo);
      }}
      sx={{
        display: { xs: "none", md: "block" },
        position: "absolute",
        width: "10%",
        left: "0",
        height: "100%",
        color: "white",
        zIndex: "1",
      }}>
      <ArrowBackIosIcon />
    </Button>
  );
};
const ForwardArrowButton = ({ setBg, bgNo }) => {
  function handleIncrease(no) {
    if (no < 4) {
      setBg(`${parseInt(no) + 1}`);
    } else {
      setBg("0");
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      handleIncrease(bgNo.toString());
    }, 3000);

    return () => clearInterval(interval);
  }, [bgNo]);
  return (
    <Button
      onClick={() => {
        handleIncrease(bgNo);
      }}
      sx={{
        display: { xs: "none", md: "block" },
        position: "absolute",
        width: "10%",
        right: "0",
        height: "100%",
        color: "white",
        zIndex: "1",
      }}>
      <ArrowForwardIosIcon />
    </Button>
  );
};
export { BackArrowButton, ForwardArrowButton };
