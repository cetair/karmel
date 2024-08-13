import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar
        position="relative"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "#452c54",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" color="white" onClick={() => navigate("/")}>
            <b>GKRI Karmel</b>
          </Typography>
          <Stack direction="row" spacing={7} edge="end" alignItems="center">
            {/* TODO: style samain */}
            <Typography
              color="white"
              fontWeight="700"
              onClick={() => navigate("/who-are-we")}
            >
              WHO WE ARE
            </Typography>
            <Typography
              color="white"
              fontWeight="700"
              onClick={() => navigate("/whatsup")}
            >
              WHAT'S UP
            </Typography>
            <Typography
              color="white"
              fontWeight="700"
              onClick={() => navigate("/ministries")}
            >
              MINISTRIES
            </Typography>
            <Typography
              color="white"
              fontWeight="700"
              onClick={() => navigate("/resources")}
            >
              RESOURCES
            </Typography>
            <Typography
              color="white"
              fontWeight="700"
              onClick={() => navigate("/new")}
            >
              I'M NEW
            </Typography>{" "}
            <IconButton
              size="medium"
              edge="end"
              onClick={() => navigate("/profile")}
            >
              <PersonIcon sx={{ color: "white" }} />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
