import { Box, Container, Stack, Typography } from "@mui/material";
import MinistryBg from "../images/ministry.jpg";

import { Fragment, useState } from "react";
import { Route } from "react-router-dom";

const MinistriesContainer = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${MinistryBg})`,
          backgroundSize: "cover",
          height: "60vh",
          objectFit: "cover",
          filter: "blur(3px)",
          opacity: 0.8,
          filter: "brightness(50%)",
          position: "relative",
        }}
      >
        {" "}
      </Box>
      <Typography
        align="center"
        sx={{
          color: "white",
          fontSize: 40,
          fontWeight: 700,
          zIndex: 1,
          position: "absolute",
          top: "35%",
          left: "35%",
        }}
      >
        MINISTRIES GKRI KARMEL
      </Typography>
    </Box>
  );
};

export default MinistriesContainer;
