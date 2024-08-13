import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import MinistryBg from "../images/resourcesBg.jpeg";

import { Fragment, useState } from "react";
import { Route } from "react-router-dom";
import ResourcesCard from "./ResourcesCard";

const ResourcesContainer = () => {
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
        RESOURCES GKRI KARMEL
      </Typography>
      <Grid
        sx={{ marginTop: 12, marginBottom: 12, px: 10 }}
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={[3, 6]}
      >
        <ResourcesCard key={"event"} />

        {/* {eventsList.length > 0 &&
          eventsList.map((event, i) => (
            <EventCard key={'event' + i} eventData={event} />
          ))} */}
      </Grid>
      {/* Filter Resources */}
      {/* Card Resources */}
    </Box>
  );
};

export default ResourcesContainer;
