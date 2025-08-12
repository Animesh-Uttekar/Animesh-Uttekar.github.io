import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Box } from '@mui/material';
import { fadeUp } from '../motion/variants';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 2, bgcolor: 'background.paper', borderTop: '0.5px solid', borderColor: 'grey.100' }}>
      <Container maxWidth="lg">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Box textAlign="center">
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.disabled',
                fontSize: '0.875rem',
                mt: 1
              }}
            >
              © 2024 Animesh Uttekar. All rights reserved.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
