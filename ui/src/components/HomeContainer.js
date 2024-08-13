import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React, { useState } from "react";

const HomeContainer = () => {
  return (
    <Box
      sx={{
        height: "200vh",
      }}
    >
      <Stack>
        <Stack sx={{ alignItems: "center" }}>
          <Grid spacing={3} mt={10} width="90%">
            <Grid container spacing={2}>
              <Grid item md={1}>
                <Box sx={{ height: "70vh" }}>
                  <Stack spacing={2} alignItems="flex-end">
                    <Typography
                      sx={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        fontSize: 40,
                        color: "#452c54",
                        fontWeight: 700,
                      }}
                    >
                      OUR SOCIALS
                    </Typography>
                    <InstagramIcon sx={{ color: "#452c54", fontSize: 60 }} />
                    <FacebookIcon sx={{ color: "#452c54", fontSize: 60 }} />
                    <YouTubeIcon sx={{ color: "#452c54", fontSize: 60 }} />
                  </Stack>
                </Box>
              </Grid>
              <Grid item md={10}>
                <Box
                  sx={{
                    bgcolor: "#452c54",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "70vh",
                    color: "white",
                  }}
                >
                  Main Photo / Video
                </Box>
              </Grid>
              <Grid item md={1}>
                <Box
                  sx={{
                    height: "70vh",
                    position: "relative",
                  }}
                >
                  <Stack
                    spacing={-2}
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: "15%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    {/* TODO: make onclick, style  */}
                    <ArrowDropDownIcon
                      sx={{ color: "#452c54", fontSize: 60 }}
                    />
                    <ArrowDropDownIcon
                      sx={{ color: "#452c54", fontSize: 60 }}
                    />
                    <ArrowDropDownIcon
                      sx={{ color: "#452c54", fontSize: 60 }}
                    />
                  </Stack>
                </Box>{" "}
              </Grid>
            </Grid>
          </Grid>
          <Box mt={10}>
            <Typography
              align="center"
              sx={{ color: "#452c54", fontSize: 40, fontWeight: 700 }}
            >
              SETIAP MINGGU PUKUL 10.00 - 12.00 WIB
            </Typography>
            <Typography
              sx={{ color: "#452c54", fontSize: 40, fontWeight: 700 }}
            >
              RUKO ITC PERMATA HIJAU, JAKARTA SELATAN
            </Typography>
          </Box>
          <Grid spacing={3} mt={10} width="75%">
            <Grid container spacing={8}>
              <Grid item md={6}>
                <Box
                  sx={{
                    borderRadius: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "20vh",
                    bgcolor: "#452c54",
                    color: "white",
                  }}
                >
                  {/* TODO: ke resources? */}
                  <Typography
                    sx={{ color: "white", fontSize: 40, fontWeight: 700 }}
                  >
                    PENGAJARAN
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Paper
                  sx={{
                    borderRadius: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "20vh",
                  }}
                >
                  {/* TODO: ke giving?  */}
                  <Typography
                    sx={{ color: "#452c54", fontSize: 40, fontWeight: 700 }}
                  >
                    PERSEMBAHAN
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Stack>
        <Box ml="10%" width="80%" p={4}>
          <Typography
            mt={10}
            sx={{ color: "#452c54", fontSize: 40, fontWeight: 700 }}
          >
            FAQ{" "}
          </Typography>{" "}
          <Accordion sx={{ marginTop: 2, fontSize: 25, color: "#452c54" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Pertanyaan Tentang Sesuatu
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: 2, fontSize: 25, color: "#452c54" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Pertanyaan Tentang Sesuatu Lagi
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: 2, fontSize: 25, color: "#452c54" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Pertanyaan Tentang Sesuatu Berikutnya
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
    </Box>
  );
};

export default HomeContainer;
