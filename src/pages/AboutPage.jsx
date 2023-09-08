import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import aboutImage from "../img/aboutImage.jpg";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        color: "white",
        position: "relative",
        overflow: "hidden",
        pt: "10vh",
        zIndex: "1",
        "&:before": {
          content: '""',
          bgcolor: "rgb(9,27,40)",
          zIndex: "-1",
          position: "absolute",
          display: "inline-block",
          width: "150%",
          height: "100%",
          transform: { xs: "rotate(-5deg)", sm: "rotate(-4deg)" },
        },
      }}>
      <Box
        sx={{
          bgcolor: "rgb(9,27,40)",
          mt: 10,
          p: "2%",
        }}>
        <Typography
          textAlign={`${t("Language") === "English" ? "right" : "left"}`}
          variant="h2"
          px={5}>
          {t("About us")}
        </Typography>
        <Box
          sx={{
            px: 5,
            display: "flex",
            flexWrap: "wrap",
            flexDirection: `${
              t("Language") === "English" ? "row-reverse" : "row"
            }`,
          }}>
          <Box
            sx={{
              width: { xs: "100%", sm: "50%" },
              direction: `${t("Language") === "English" ? "rtl" : "ltr"}`,
              p: 3,
            }}>
            <Typography>{t("About us p1")}</Typography>
            <br />
            <Typography>{t("About us p2")}</Typography>
            <br />
            <Typography>{t("About us p3")}</Typography>
            <br />
            <Typography>{t("About us p4")}</Typography>
          </Box>
          <Box
            flexGrow={1}
            sx={{
              height: "460px",
              display: "flex",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
            }}>
            <img
              src={aboutImage}
              alt="About Page"
              style={{
                borderRadius: "16px",
                width: "400px",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
