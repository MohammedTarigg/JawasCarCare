import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
const PrimaryButton = styled(Button)((props) => ({
  // Custom CSS
  backgroundColor: "#323232",
  color: "white",
  "&:hover": {
    color: "black",
    backgroundColor: "yellow",
  },
}));
export default PrimaryButton;
