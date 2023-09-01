import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import PrimaryButton from "../components/PrimaryButton.jsx";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaTiktok, FaSnapchat } from "react-icons/fa";
import SocialMediaLink from "../components/SocialMediaLink.jsx";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        px: { xs: 2, sm: "20%" },
        py: 10,
        direction: t("Language") === "English" ? "rtl" : "ltr",

        bgcolor: "rgb(245, 243, 240)",
      }}>
      <Typography variant="h2" textAlign="center" pb={4} position="relative">
        {t("Contact us")}
      </Typography>
      <Box
        position="relative"
        bgcolor="rgb(245, 243, 240)"
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "column",
          boxShadow: "1px 2px 5px grey",
          borderRadius: 4,
          p: 3,
        }}>
        <Box>
          <Typography variant="h5">{t(`Phone`)}</Typography>
          <Box
            sx={{
              direction: "ltr",
              display: "flex",
              justifyContent: "space-between",
            }}>
            <Typography variant="h6">(+974) 66332122</Typography>
            <PrimaryButton
              target="_blank"
              rel="noopener noreferrer"
              href={`tel:+97466332122`}>
              <PhoneIcon sx={{ transform: "rotate(270deg)" }} />
            </PrimaryButton>
          </Box>
          <Box
            sx={{
              mt: "15px",
              direction: "ltr",
              display: "flex",
              justifyContent: "space-between",
            }}>
            <Typography variant="h6">(+974) 60018884</Typography>
            <PrimaryButton
              target="_blank"
              rel="noopener noreferrer"
              href={`tel:+97460018884`}>
              <PhoneIcon sx={{ transform: "rotate(270deg)" }} />
            </PrimaryButton>
          </Box>
        </Box>
        <Divider />
        <Typography variant="h5">{t(`e-mail`)}</Typography>
        <Box
          sx={{
            direction: "ltr",
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Typography variant="h6">Jawas.carcareqa@gmail.com</Typography>
          <PrimaryButton
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:jawas.carcareqa@gmail.com`}>
            <EmailIcon sx={{ "&hover": { color: "black" } }} />
          </PrimaryButton>
        </Box>
        <Divider />
        <Typography variant="h5">{t("Social media")}</Typography>
        <Box
          sx={{
            direction: "ltr",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            fontSize: "40px",
            gap: 4,
          }}>
          <SocialMediaLink>
            <FaInstagram />
          </SocialMediaLink>
          <SocialMediaLink>
            <FaTiktok />
          </SocialMediaLink>
          <SocialMediaLink>
            <FaSnapchat />
          </SocialMediaLink>
          <SocialMediaLink>
            <FaFacebook />
          </SocialMediaLink>
        </Box>
        <Divider />
        <iframe
          title="Jawas Car Care"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.255239127493!2d51.4632135!3d25.2431954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db57d2e54ba5%3A0xdee3e121161faacb!2z2KzZiNin2LMg2YTZhNi52YbYp9mK2Kkg2KjYp9mE2LPZitin2LHYp9iq!5e0!3m2!1sen!2sqa!4v1693035042576!5m2!1sen!2sqa"
          // width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </Box>
    </Box>
  );
};

export default ContactPage;
