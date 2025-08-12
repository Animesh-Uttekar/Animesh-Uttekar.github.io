import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Button, Container, Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { heroButtons, staggerContainer } from '../motion/variants';

const Contact = () => {
  return (
    <Box component="section" id="contact" sx={{ py: 12, bgcolor: 'grey.50' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center">
            <Typography 
              variant="h2" 
              component="h2"
              sx={{ 
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 300,
                color: 'text.primary',
                mb: 3
              }}
            >
              Let's work together
            </Typography>

            <motion.div
              variants={heroButtons}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', mb: 6 }}>
                <Button 
                  variant="contained" 
                  size="large"
                  startIcon={<Email />}
                  href="mailto:animeshuttekar98@gmail.com"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 500
                  }}
                >
                  Email me
                </Button>
              </Box>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                <IconButton 
                  href="https://github.com/Animesh-Uttekar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  sx={{ 
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    '&:hover': { 
                      bgcolor: 'grey.50',
                      boxShadow: 2
                    }
                  }}
                >
                  <GitHub sx={{ fontSize: '1.5rem', color: 'text.primary' }} />
                </IconButton>
                <IconButton 
                  href="https://linkedin.com/in/animesh-uttekar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  sx={{ 
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    '&:hover': { 
                      bgcolor: 'grey.50',
                      boxShadow: 2
                    }
                  }}
                >
                  <LinkedIn sx={{ fontSize: '1.5rem', color: 'text.primary' }} />
                </IconButton>
                <IconButton 
                  href="mailto:animeshuttekar98@gmail.com" 
                  size="large"
                  sx={{ 
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    '&:hover': { 
                      bgcolor: 'grey.50',
                      boxShadow: 2
                    }
                  }}
                >
                  <Email sx={{ fontSize: '1.5rem', color: 'text.primary' }} />
                </IconButton>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
