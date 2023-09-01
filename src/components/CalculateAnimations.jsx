import { Box } from "@mui/material";
export function calculateAnimation(i) {
  switch (i) {
    case 1:
      return "floatUp 4s infinite linear";
    case 2:
      return "floatUp 7s infinite linear";
    case 3:
      return "floatUp 2.5s infinite linear";
    case 4:
      return "floatUp 4.5s infinite linear";
    case 5:
      return "floatUp 8s infinite linear";
    case 6:
      return "floatUp 3s infinite linear";
    case 7:
      return "floatUp 5.3s infinite linear";
    case 8:
      return "floatUp 4.7s infinite linear";
    case 9:
      return "floatUp 4.1s infinite linear";
    default:
      return;
  }
}
export function calculateTransform(i) {
  switch (i) {
    case 1:
      return "scale(1.0)";
    case 2:
      return "scale(1.6)";
    case 3:
      return "scale(.5)";
    case 4:
      return "scale(1.2)";
    case 5:
      return "scale(2.2)";
    case 6:
      return "scale(.8)";
    case 7:
      return "scale(3.2)";
    case 8:
      return "scale(1.7)";
    case 9:
      return "scale(0.9)";
    default:
      return;
  }
}
export function calculateLeft(i) {
  switch (i) {
    case 1:
      return "";
    case 2:
      return "1200px";
    case 3:
      return "900px";
    case 4:
      return "50px";
    case 5:
      return "400px";
    case 6:
      return "-1201px";
    case 7:
      return "-900px";
    case 8:
      return "-200px";
    case 9:
      return "-500px";
    default:
      return;
  }
}
export const BackGroundLight = ({ index }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "0px",
        opacity: ".75",
        backgroundColor: "yellow",
        boxShadow: "yellow 0px 0px 2px 3px",
        // top: "100vh",
        bottom: "0",
        // left: "0px",
        right: "0px",
        margin: "auto",
        // opacity: "0",
        zIndex: "0",
        animation: calculateAnimation(index),
        transform: calculateTransform(index),
        left: calculateLeft(index),
      }}></Box>
  );
};
