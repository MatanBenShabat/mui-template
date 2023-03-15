import styled from "@emotion/styled";
import {
  createTheme,
  CssBaseline,
  Grid,
  Paper,
  ThemeProvider,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import CustomItem from "./CustomItem";
import Header from "./Pages/Header";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: grey[200],
      fontColor: blue[200],
    },
  },
  typography: {
    fontSize: 20,
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    headerVariant: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
  },
});

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const styles = {
  paper: {
    flexGrow: 1,
    height: "260vh",
    backgroundColor: "primary.main",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header theme={theme} />
      <Paper sx={styles.paper}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          container
          spacing={3}
        >

          <Grid item xs={11.8}>
            <CustomItem height={"100vh"}>xs=8</CustomItem>
          </Grid>
          <Grid item xs={5}>
            <CustomItem height={"70vh"}>xs=4</CustomItem>
          </Grid>
          <Grid item xs={6.8}>
            <CustomItem height={"70vh"}>xs=4</CustomItem>
          </Grid>

          <Grid item container spacing={2} xs={7.8} height={"60vh"}>
            <Grid item xs={6}>
              <CustomItem height={"25vh"}>xs=4</CustomItem>
            </Grid>
            <Grid item xs={6}>
              <CustomItem height={"25vh"}>xs=4</CustomItem>
            </Grid>
            <Grid item xs={6}>
              <CustomItem height={"25vh"}>xs=4</CustomItem>
            </Grid>
          </Grid>

            <Grid item xs={4}>
              <CustomItem height={"52.5vh"}>xs=4</CustomItem>
            </Grid>

        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
