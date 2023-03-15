import { Avatar, Box, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";

function Header({ theme }) {
  const styles = {
    container: {
      paddingTop: "5vh",
      paddingBottom: "2.5vh",
      paddingLeft: "1vw",
      display: "flex",
      height: "20vh",
      alignItems: "center",
      gap: "2%",
      bgcolor: theme.palette.mode === "dark" ? "primary.main" : "primary.main",
    },
    avatar: {
      bgcolor: deepOrange[500],
      borderRadius: 2,
      height: "90%",
      width: "6%",
    },
    headresContainer: { display: "flex", flexDirection: "column", gap: "5%" },
  };
  return (
    <Box sx={styles.container}>
      <Avatar sx={styles.avatar} variant="square"></Avatar>
      <Box sx={styles.headresContainer}>
        <Typography variant="headerVariant" sx={{color: theme.palette.mode === "dark" ? "#1d3557" : "#1d3557"}} >Welcome, James!</Typography>
        <Typography sx={{color: theme.palette.mode === "dark" ? "grey" : "grey"}}>
          These are your analytics stats for today,
          <strong> 24 August 2021</strong>
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
