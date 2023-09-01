import React from "react";
import { Box, Typography } from "@mui/material";
import tintIcon from "../icons/tint.png";
import ShiningIcon from "../icons/shining.png";
import tintImage from "../img/services/tinting.jpg";
import polishingImage from "../img/services/polishing.jpg";
import protectionImage from "../img/services/protection.jpg";
import ProtectionIcon from "../icons/protection.png";
import { useTranslation } from "react-i18next";
import ServiceCard from "../components/ServiceCard.jsx";

const ServicesPage = () => {
  const { t } = useTranslation();
  const services = [
    { name: "Tinting", desc: "Lorem ipsum", icon: tintIcon, img: tintImage },
    {
      name: "Protection",
      desc: "Lorem ipsum",
      icon: ProtectionIcon,
      img: protectionImage,
    },
    {
      name: "Shining",
      desc: "Lorem ipsum",
      icon: ShiningIcon,
      img: polishingImage,
    },
  ];

  return (
    <Box
      sx={{
        px: 5,
        py: 6,
        direction: t("Language") === "English" ? "rtl" : "ltr",

        bgcolor: "rgb(245, 243, 240)",
      }}>
      <Typography variant="h2" textAlign="center">
        {t("Our Services")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 10,
          gap: 8,
        }}>
        {services.map((item) => {
          return (
            <ServiceCard
              name={item.name}
              icon={item.icon}
              img={item.img}
              desc={item.desc}
              key={item.name}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ServicesPage;
