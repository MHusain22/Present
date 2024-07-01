import React from "react";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import home_img from "../Images/Home_page_photo.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#E0E0E2",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        padding: { xs: "20px", md: "0px 80px" },

        color: "var(--secondary-color)",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontFamily: "Krub",
              fontSize: { xs: "36px", sm: "48px", md: "56px" },
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            Mark{" "}
            <span style={{ color: "var(--primary-color)" }}>Attendance,</span>{" "}
            <br />
            By <span style={{ color: "var(--primary-color)" }}>
              Capturing
            </span>{" "}
            the <span style={{ color: "var(--primary-color)" }}>Photo</span>.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Krub",
              fontSize: { xs: "18px", sm: "24px", md: "30px" },
              marginTop: "20px",
              margin: { xs: "20px 0", md: "40px 0" },
            }}
          >
            Taking attendance is now an easy task <br />
            through our service.
          </Typography>
          <Button
            sx={{
              backgroundColor: "var(--primary-color)",
              color: "var(--secondary-color)",
              borderRadius: "30px",

              padding: { xs: "10px 15px", md: "10px 20px" },
            }}
          >
            <Link
              to="capture"
              style={{
                textDecoration: "none",
                display: "flex",
                color: "inherit",
              }}
            >
              Let's take
              <ArrowForwardIcon />
            </Link>
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <img src={home_img} width="80%" maxWidth={200} alt="Attendance" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
