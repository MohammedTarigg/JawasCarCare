import React from "react";
import { Box, Typography } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PrimaryButton from "../components/PrimaryButton.jsx";

import { useTranslation } from "react-i18next";

const HomePage = ({ servicesRef }) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        px: 5,
        pt: 4,
        direction: t("Language") === "English" ? "rtl" : "ltr",
      }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",

          width: "400px",
        }}>
        {t("Homepage-Hero")}
      </Typography>
      <Box
        sx={{
          mx: 2,
          my: 3,
          display: "flex",
          gap: 2,
          pt: "5vh",
        }}>
        <PrimaryButton
          sx={{ transform: "scale(1.5)" }}
          onClick={() => {
            servicesRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              direction: "ltr",
              flexDirection: `${
                t("Language") === "English" ? "row" : "row-reverse"
              }`,
            }}>
            <DirectionsCarIcon sx={{ mx: 1 }} />
            <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
              {t("Services")}
            </Typography>
          </Box>
        </PrimaryButton>
      </Box>
    </Box>
  );
};

export default HomePage;
