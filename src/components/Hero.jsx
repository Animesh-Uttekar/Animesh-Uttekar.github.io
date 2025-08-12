import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Button, Container, Box } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { heroContent, heroButtons } from '../motion/variants';

const Hero = () => {
  return (
    <Box component="section" id="home" sx={{ pt: 16, pb: 10 }}>
      <Container maxWidth="lg">
        <motion.div
          variants={heroContent}
          initial="initial"
          animate="animate"
        >
          <Box textAlign="center" sx={{ maxWidth: '900px', mx: 'auto' }}>
            <Typography 
              variant="h1" 
              component="h1"
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
                fontWeight: 300,
                color: 'text.primary',
                mb: 3,
                lineHeight: 1.2
              }}
            >
              I build things that work
            </Typography>
            
            <Typography 
              variant="h5" 
              component="p"
              sx={{ 
                color: 'text.secondary',
                mb: 4,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.125rem', md: '1.25rem' }
              }}
            >
              Software engineer obsessed with shipping.
            </Typography>

            <motion.div
              variants={heroButtons}
              initial="initial"
              animate="animate"
            >
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Button 
                  variant="contained" 
                  size="large"
                  endIcon={<ArrowForward />}
                  href="#projects"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 500
                  }}
                >
                  Check out my work
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  href="mailto:animeshuttekar98@gmail.com"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'text.primary',
                    borderColor: 'grey.300'
                  }}
                >
                  Email me
                </Button>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
