import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './utils/i18n'; // Import i18n configuration

// Material UI imports
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import About from './pages/About';
import Donate from './pages/Donate';

// Create a theme (you can customize colors)
const theme = createTheme({
  palette: {
    primary: {
      main: '#008080', // Teal
      light: '#4FB3AA',
      dark: '#006666',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F5F5DC', // Cream
      light: '#FFFFF5',
      dark: '#E8E8C8',
      contrastText: '#008080',
    },
    background: {
      default: '#F9F9F2', // Light cream background
      paper: '#FFFFFF',
    },
    error: {
      main: '#FF4D4D',
    },
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This provides basic styling reset */}
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dogs" element={<Dogs />} />
              <Route path="/about" element={<About />} />
              <Route path="/donate" element={<Donate />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;