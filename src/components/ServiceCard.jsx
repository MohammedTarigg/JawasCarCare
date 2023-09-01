import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ name, desc, icon, img }) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        height: "50%",
        bgcolor: "white",
        width: "350px",
        borderRadius: 4,
        minHeight: "250px",
        position: "relative",
        boxShadow: "1px 5px 10px 	rgb(105,105,105)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}>
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100px",
          height: "100px",
          p: 0.8,
          borderRadius: "50%",
          background:
            "linear-gradient(180deg, rgba(128,128,128,1) 0%, rgba(128,128,128,1) 40%,rgba(128,128,128,0) 90%)",
        }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "white",
            borderRadius: "50%",
            backgroundImage: `url(${icon})`,
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            imageRendering: "revert",
          }}></Box>
      </Box>
      <Box
        sx={{
          height: "200px",
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}></Box>
      <Box p={2}>
        <Typography textAlign={"center"} variant="h5">
          {t(`${name}`)}
        </Typography>
        {/* <Typography variant="p">{desc}</Typography> */}
        {/* <Typography variant="p">{t(`${desc}`)}</Typography> */}
      </Box>
    </Box>
  );
};

export default ServiceCard;
