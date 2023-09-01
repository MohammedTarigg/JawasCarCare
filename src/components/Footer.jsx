import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{ bgcolor: "rgb(9,27,40)", color: "white", pt: "50px", pb: "10px" }}>
      <Typography textAlign="center" fontSize={14}>
        © 2023 Jawas Car Care. all rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
