import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import { Navigation, Hero, About, Projects, Contact, Footer } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
