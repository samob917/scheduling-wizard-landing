import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C3E50',
    },
    secondary: {
      main: '#3498DB',
    },
  },
  typography: {
    h2: {
      fontWeight: 700,
    },
    h5: {
      lineHeight: 1.5,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
