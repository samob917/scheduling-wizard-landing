import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from '../logo.png';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(45deg, #2C3E50 30%, #3498DB 90%)',
  color: 'white',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('sm')]: {
    minHeight: '60vh',
    textAlign: 'center'
  }
}));

function Home() {
  return (
    <>
      <HeroSection>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{
                fontSize: { xs: '2.5rem', md: '3.75rem' },
                fontWeight: 'bold'
              }}>
                Scheduling Wizard
              </Typography>
              <Typography variant="h5" gutterBottom sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                lineHeight: 1.4
              }}>
                Custom Scheduling Solutions for Medical Residency & Fellowship Programs
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mt: 4 }}
                href="/contact"
              >
                Get Started
              </Button>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              <Box
                component="img"
                src={logo}
                alt="Scheduling Wizard Logo"
                sx={{
                  width: '300px',
                  height: 'auto'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Custom Solutions
            </Typography>
            <Typography>
              Tailored scheduling systems designed specifically for your program's unique needs.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Medical Expertise
            </Typography>
            <Typography>
              Specialized in medical residency and fellowship program scheduling requirements.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Efficient Process
            </Typography>
            <Typography>
              Streamlined implementation process to get your schedules up and running quickly.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;