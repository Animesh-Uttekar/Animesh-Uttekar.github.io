import React from 'react';
import { motion } from 'framer-motion';
import { AppBar, Toolbar, Typography, Box, Link } from '@mui/material';
import { fadeUp } from '../motion/variants';

const Navigation = () => {
  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(6px)',
        border: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
        >
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              color: 'text.primary',
              fontWeight: 600,
              fontSize: '1.125rem'
            }}
          >
            Animesh Uttekar
          </Typography>
        </motion.div>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          <Link 
            href="#home" 
            color="text.secondary" 
            underline="none" 
            sx={{ 
              fontWeight: 500, 
              fontSize: '0.875rem', 
              '&:hover': { color: 'text.primary' } 
            }}
          >
            Home
          </Link>
          <Link 
            href="#about" 
            color="text.secondary" 
            underline="none" 
            sx={{ 
              fontWeight: 500, 
              fontSize: '0.875rem', 
              '&:hover': { color: 'text.primary' } 
            }}
          >
            About
          </Link>
          <Link 
            href="#projects" 
            color="text.secondary" 
            underline="none" 
            sx={{ 
              fontWeight: 500, 
              fontSize: '0.875rem', 
              '&:hover': { color: 'text.primary' } 
            }}
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            color="text.secondary" 
            underline="none" 
            sx={{ 
              fontWeight: 500, 
              fontSize: '0.875rem', 
              '&:hover': { color: 'text.primary' } 
            }}
          >
            Contact
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
