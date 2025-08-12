import React from 'react';
import { motion } from 'framer-motion';
import { 
  Typography, 
  Container, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Chip, 
  IconButton 
} from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { fadeUp, staggerContainer, chipContainer, chipItem } from '../motion/variants';

const About = () => {
  const skills = ['Python', 'FastAPI', 'OpenAI', 'PostgreSQL', 'AWS', 'TypeScript', 'React', 'Node.js', 'Docker', 'Java', 'Spring Boot'];

  return (
    <Box component="section" id="about" sx={{ py: 12, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" sx={{ mb: 8 }}>
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
              About me
            </Typography>
            <Typography 
              variant="h6" 
              component="p"
              sx={{ 
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              I turn problems into solutions. Worked at startups, love building things that actually work. Clean code, thoughtful design and real results.
            </Typography>
          </Box>
        </motion.div>
        
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Typography 
                variant="h4" 
                component="h3"
                sx={{ 
                  fontWeight: 500,
                  color: 'text.primary',
                  mb: 3
                }}
              >
                What I Do
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  mb: 4
                }}
              >
                I make things work on the internet. Currently obsessed with AI.
              </Typography>
              <motion.div
                variants={chipContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={chipItem}
                    >
                      <Chip 
                        label={skill}
                        variant="filled"
                      />
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card elevation={1} sx={{ p: 4 }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography 
                    variant="h4" 
                    component="h3"
                    sx={{ 
                      fontWeight: 500,
                      color: 'text.primary',
                      mb: 3
                    }}
                  >
                    Let's Connect
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      mb: 3
                    }}
                  >
                    Let's chat about code, AI projects or anything you're building.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton 
                      href="https://github.com/Animesh-Uttekar" 
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        bgcolor: 'grey.100',
                        '&:hover': { bgcolor: 'grey.200' }
                      }}
                    >
                      <GitHub sx={{ color: 'text.primary' }} />
                    </IconButton>
                    <IconButton 
                      href="https://linkedin.com/in/animesh-uttekar" 
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        bgcolor: 'grey.100',
                        '&:hover': { bgcolor: 'grey.200' }
                      }}
                    >
                      <LinkedIn sx={{ color: 'text.primary' }} />
                    </IconButton>
                    <IconButton 
                      href="mailto:animeshuttekar98@gmail.com" 
                      sx={{ 
                        bgcolor: 'grey.100',
                        '&:hover': { bgcolor: 'grey.200' }
                      }}
                    >
                      <Email sx={{ color: 'text.primary' }} />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
