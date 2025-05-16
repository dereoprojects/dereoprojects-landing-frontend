"use client";

import React from "react";
import { Container, Typography, Box, Link as MuiLink } from "@mui/material";
import { motion } from "framer-motion";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import { useTheme } from "@mui/material/styles";
import Wave from "@/components/Wave/Wave";
import { ContactData } from "../constants/contact";

export default function ContactPage() {
  const theme = useTheme();
  return (
    <Container
      maxWidth={false}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      disableGutters
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {/* Main content */}
      <Box
        component={motion.div}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          pt: 2,
        }}
      >
        {/* Phone */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <PhoneIcon color="primary" />
          <MuiLink
            href={`tel:${ContactData.phoneNumber}`}
            underline="hover"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Phone
          </MuiLink>
        </Box>
        {/* Business Email */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MailOutlineIcon color="primary" />
          <MuiLink
            href={`mailto:${ContactData.businessMail}`}
            underline="hover"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            {ContactData.businessMail}
          </MuiLink>
        </Box>

        {/* LinkedIn */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LinkedInIcon color="primary" />
          <MuiLink
            href={ContactData.linkedInURL}
            underline="hover"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </MuiLink>
        </Box>

        {/* GitHub */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GitHubIcon color="primary" />
          <MuiLink
            href={ContactData.githubURL}
            underline="hover"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </MuiLink>
        </Box>

        {/* Upwork */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <WorkOutlineIcon color="primary" />
          <MuiLink
            href={ContactData.upworkURL}
            underline="hover"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upwork
          </MuiLink>
        </Box>
        {/* CV */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <DescriptionIcon color="primary" />
          <MuiLink
            href={ContactData.cvPath}
            underline="hover"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resumé
          </MuiLink>
        </Box>
      </Box>

      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Wave color={theme.palette.accent2.main} />
      </Box>
    </Container>
  );
}
