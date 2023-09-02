import React from "react";
import { Box } from "@mui/material";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import { useTranslation } from "react-i18next";
import "../App.css";

const ImageRadioGroup = ({ bgNo, setBg }) => {
  const { t } = useTranslation();

  function handleChange(e) {
    setBg(e.target.value);
  }
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: "1",
        bottom: "5%",
        left: `${t("Language") === "English" ? "10%" : ""}`,
        right: `${t("Language") === "English" ? "" : "10%"}`,
      }}>
      <RadioGroup
        value={bgNo}
        onChange={handleChange}
        sx={{
          gap: 2,
          flexWrap: "wrap",
          flexDirection: "row",
          "> .css-ntkmf7-JoySheet-root": {
            bgcolor: "transparent",
          },
        }}>
        {["0", "1", "2", "3", "4"].map((key, index) => (
          <Sheet key={index}>
            <Radio
              value={key}
              sx={{
                bgcolor: "transparent",
              }}
            />
          </Sheet>
        ))}
      </RadioGroup>
    </Box>
  );
};

export default ImageRadioGroup;
