import './App.css';
import { AppBar, Container, Toolbar, Typography, Box, Grid, Paper } from "@mui/material/"
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <AppBar position="relative" className="nav">
        <Toolbar>
          <Typography variant="p">
            Logo
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Typography component="h1" variant="h4" align="center" gutterBottom >
            Why book with us?
          </Typography>
        </Box>

        <Container>
          <Box sx={{flexGrow: 1}}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4} md={4} lg={4} className="grid-item">
                <Item>
                  <Typography variant="h5" className="h-text">
                    Hassle-free Booking
                  </Typography>
                  <Typography variant="body2" className="p-text">
                    Find all what you need for a peaceful travel in one place, so why search somewhere else? Flight to accommodation, transfers to holiday packages and what not?
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} className="grid-item">
                <Item>
                  <Typography variant="h5" className="h-text">
                    Best Travel Agent
                  </Typography>
                  <Typography variant="body2" className="p-text">
                    Find all what you need for a peaceful travel in one place, so why search somewhere else? Flight to accommodation, transfers to holiday packages and what not?
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} className="grid-item">
                <Item>
                  <Typography variant="h5" className="h-text">
                      Expert Advice
                  </Typography>
                  <Typography variant="body2" className="p-text">
                    Our Travel Experts begin their journey with you at the very moment when you make an inquiry through one of our multiple channels and continue until you reach home safe.
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>

      </main>
    </div>
  );
}

export default App;
