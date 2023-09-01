import React from "react";
import Link from "@mui/material/Link";

const SocialMediaLink = ({ children }) => {
  function getLink(name) {
    switch (name) {
      case "FaFacebook":
        return "https://www.facebook.com/profile.php?id=61550535963787";
      case "FaInstagram":
        return "https://instagram.com/jawas.carcareqa?igshid=MjEwN2IyYWYwYw==";
      case "FaTiktok":
        return "https://www.tiktok.com/@jawas.carcare?_t=8f5Kl5xLZ1L&_r=1";
      case "FaSnapchat":
        return "https://t.snapchat.com/KjokDv7i";
      default:
        return "#";
    }
  }
  return (
    <Link
      href={getLink(children.type.name)}
      title={children.type.name}
      target="_blank"
      sx={{
        width: "60px",
        height: "60px",
        lineHeight: "25px !important",
        position: "relative",
        margin: "0 5px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#111",
        transition: "all 0.27s cubic-bezier(0.300, 0.100, 0.580, 1.000)",
        zIndex: "1",
        "&:before": {
          content: '""',
          display: "inline-block",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          border: "1px solid #111",
          borderRadius: "2px",
          transform: "rotate(45deg)",
          transition: "all 0.27s cubic-bezier(0.300, 0.100, 0.580, 1.000)",
          zIndex: -1,
        },
        "&:hover": {
          color: "#fff",

          "&:before": {
            background: "#111",
            transform: "rotate(90deg)",
          },
        },
      }}>
      {children}
    </Link>
  );
};

export default SocialMediaLink;
