import "./App.css";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
  Grid,
  Paper,
} from "@mui/material/";
// import { InfoIcon } from "@mui/icons-material/";
// import svgImg from "./images/svgImg.svg"
import certifiedByIATA from "./images/certified.png";
import logo from "./images/logo.png";
import logoWhiteBG from "./images/logoWhiteBG.jpeg";
import initialBgImg from "./images/initialBgImg.jpg";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import amsterdamtwo_ttf from "./fonts/amsterdam-two-ttf-webfont.woff";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
  typography: {
    fontFamily: "amsterdamtwo_ttf, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'amsterdamtwo_ttf';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('amsterdamtwo_ttf'), local('amsterdamtwo_ttf'), url(${amsterdamtwo_ttf}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

function App() {
  return (
    <div className="App">
      <main>
        <Box
          sx={{
            height: "100vh",
            backgroundImage: `url(${initialBgImg})`,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "soft-light",
          }}
        >
          <AppBar
            position="relative"
            sx={{
              fontFamily: "Roboto",
              backgroundColor: "#FFFFFF",
              color: "#0B2454 ",
            }}
          >
            <Toolbar>
              <a href="index.html">
                <img className="topLogo" src={logo} alt="Top logo" />
              </a>
            </Toolbar>
          </AppBar>
          <Container>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box
                sx={{
                  fontFamily: "amsterdamtwo_ttf",
                  color: "#FFFFFF",
                  pt: "50px",
                }}
              >
                <Typography variant="h3">
                  <strong>Travel Explorer</strong>
                </Typography>
              </Box>
            </ThemeProvider>
          </Container>
        </Box>

        <Container>
          <Box sx={{ flexGrow: 1, color: "#0B2454" }}>
            <Box sx={{ pt: 8, pb: 6 }}>
              <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                Why book with us?
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Item elevation={0}>
                  <Typography variant="h5" sx={{ fontSize: "18px" }}>
                    Hassle-free Booking
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "16px" }}>
                    Find all what you need for a peaceful travel in one place,
                    so why search somewhere else? Flight to accommodation,
                    transfers to holiday packages and what not?
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Item elevation={0}>
                  <Typography variant="h5" sx={{ fontSize: "18px" }}>
                    Best Travel Agent
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "16px" }}>
                    Find all what you need for a peaceful travel in one place,
                    so why search somewhere else? Flight to accommodation,
                    transfers to holiday packages and what not?
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Item elevation={0}>
                  <Typography variant="h5" sx={{ fontSize: "18px" }}>
                    Expert Advice
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "16px" }}>
                    Our Travel Experts begin their journey with you at the very
                    moment when you make an inquiry through one of our multiple
                    channels and continue until you reach home safe.
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1, color: "#0B2454" }}>
            <Box sx={{ pt: 8, pb: 6 }}>
              <Typography
                component="h1"
                variant="h4"
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                Corporate Travel Management
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Item
                  elevation={0}
                  sx={{ textAlign: "justify", fontSize: "30px" }}
                >
                  <Typography variant="body2" sx={{ fontSize: "16px" }}>
                    We offer tailored travel management services to a wide range
                    of businesses ??? both large and small ??? throughout Nigeria
                    and the UK.
                    <br />
                    <br />
                    Our goal is to become an extension of your team ???
                    understanding your needs and showing the care for both your
                    people and your budget. This come through relationship and
                    dialogue. Each of our customers have a dedicated named
                    account manager and their travel is managed by professional
                    individuals giving you the benefit of familiarity. But there
                    has to be more than just a personal touch. You require
                    confidence that all aspects of your travel is being handled
                    efficiently, and our incredible experience provide just that
                    reassurance.
                    <br />
                    <br />
                    Years of experience and listening carefully during our
                    account management reviews, have given us the insight to
                    develop a unique online travel portal through Amadeus
                    e-Travel Management, in which you can manage travel at the
                    touch of a button. The portal gives you a full oversight of
                    your travel expenditure, and also provide specified
                    departments throughout your company the autonomy to monitor
                    and govern their own side of things, flowing all the way
                    through to the actual traveller who can take control of
                    their own itinerary and travel preferences.
                    <br />
                    <br />
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ pt: 8, pb: 6 }}>
              <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: "bold", color: "#0B2454" }}
              >
                Top Destinations
              </Typography>
            </Box>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Item elevation={0}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#0B2454", fontSize: "16px" }}
                  >
                    Explore our great selection of destinations around the
                    world.
                  </Typography>
                  <Box>
                    <Grid container spacing={0} sx={{ pt: 5, pb: 5 }}>
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <img
                          className="bottomImg"
                          src={
                            "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                          }
                          alt={"LONDON"}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <img
                          className="bottomImg"
                          src="https://www.cia-france.com/media/1554/tour-eiffel_720x500.jpg"
                          alt="PARIS"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <img
                          className="bottomImg"
                          src="https://cdn.britannica.com/43/134743-050-D0625A44/train-first-Dubai-emirate-rapid-transit-line-kind-Sept-10-2009.jpg"
                          alt="DUBAI"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <img
                          className="bottomImg"
                          src="https://www.jigsawpuzzlesdirect.co.uk/prodhuge/CL31814.jpg"
                          alt="NEW YORK"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Box
          sx={{
            bgcolor: "#0B2454",
            color: "#ffffff",
            fontFamily: "Roboto",
          }}
        >
          <Container>
            <Grid container spacing={2} sx={{ pt: 8, pb: 8 }}>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <img className="logoWhiteBG" src={logoWhiteBG} alt="Logo" />
                <Typography
                  sx={{ fontSize: "12px", pr: 3 }}
                  variant="subtitle1"
                >
                  Booking, reviews and advices on hotels, resorts, flights,
                  vacation rentals, travel packages, and lots more!
                </Typography>
                <Typography variant="H5">LET'S CONNECT ON SOCIALS</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Typography sx={{ fontSize: "1.5rem" }} variant="h6">
                  CERTIFIED BY
                </Typography>
                <img
                  className="certified"
                  src={certifiedByIATA}
                  alt="Certified by IATA"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Box>
                  <a className="site-links" href="index.html">
                    About Us
                  </a>
                  <br />
                  <a className="site-links" href="index.html">
                    Services
                  </a>
                  <br />
                  <a className="site-links" href="index.html">
                    Corporate Profile
                  </a>
                  <br />
                  <a className="site-links" href="index.html">
                    Corporate Bookings
                  </a>
                  <br />
                  <a className="site-links" href="index.html">
                    Press Room
                  </a>
                  <br />
                  <a className="site-links" href="index.html">
                    Terms and Conditions
                  </a>
                  <br />
                  <a className="site-links" href="index.html">
                    Contact Us
                  </a>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Box>
                  <Typography variant="h4">Have Questions?</Typography>
                  <a className="site-links" href="tel:01494616021">
                    01494-61-6021
                  </a>
                  <br />
                  <a
                    className="site-links"
                    href="mailto:uk@mytravelexplorer.com"
                  >
                    uk@mytravelexplorer.com
                  </a>
                  <br />
                  <Typography variant="subtitle1">
                    24/7 Dedicated Customer Support
                  </Typography>
                  <small>&copy; Copyright Travel Explorer Limited</small>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </div>
  );
}

export default App;
