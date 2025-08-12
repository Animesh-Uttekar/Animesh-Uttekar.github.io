import React from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Chip, 
  IconButton 
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

const projects = [
  {
    title: "Fulloop.ai Landing Page",
    description: "Developed responsive landing page for Fulloop.ai. Clean UI, smooth animations and performance optimization.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Animesh-Uttekar",
    demo: "https://www.fulloop.ai/",
    featured: true
  },
  {
    title: "Agent Evaluation System",
    description: "Python framework for evaluating AI outputs using traditional metrics and LLM-as-a-judge methods. Optimizes prompts automatically.",
    tech: ["Python", "nltk", "OpenAI API", "HuggingFace API", "Gemini API", "Claude API"],
    github: "https://github.com/Animesh-Uttekar/agent-eval",
    demo: "https://github.com/Animesh-Uttekar/agent-eval",
    featured: true
  },
  {
    title: "Marketing Strategist AI",
    description: "Hackathon project implementing Monte Carlo simulations for marketing analytics. Built probabilistic models to analyze user journey patterns.",
    tech: ["Python", "FastAPI", "OpenAI API", "numpy"],
    github: "https://github.com/Animesh-Uttekar/marketing-strategist",
    demo: "https://github.com/Animesh-Uttekar/marketing-strategist",
    featured: true
  },
  {
    title: "Distributed Database System",
    description: "Proof of concept distributed database to learn Raft consensus and sharding algorithms. Implements fault tolerance and data replication patterns.",
    tech: ["Java", "Spring Boot", "Distributed Systems", "Raft", "Sharding", "PostgreSQL", "Docker"],
    github: "https://github.com/Animesh-Uttekar/Distributed_database_system",
    demo: "https://github.com/Animesh-Uttekar/Distributed_database_system",
    featured: true
  },
  {
    title: "CT Scan Image Classification",
    description: "Course project implementing SIFT feature extraction and SVM classification on medical CT scan images.",
    tech: ["Python", "Computer Vision", "SIFT", "SVM", "OpenAI API"],
    github: "https://github.com/Animesh-Uttekar/CT_Scan_Image_Classification_SIFT_SVM",
    demo: "https://github.com/Animesh-Uttekar/CT_Scan_Image_Classification_SIFT_SVM",
    featured: true
  },
  {
    title: "SpeechInsight",
    description: "Course project building Android speech analysis app. Records audio, analyzes filler words and repetition patterns, provides AI-powered vocabulary suggestions.",
    tech: ["Android", "Java", "OpenAI API", "Firebase", "NLP"],
    github: "https://github.com/Animesh-Uttekar/SpeechInsight",
    demo: "https://github.com/Animesh-Uttekar/SpeechInsight",
    featured: true
  }
];

function Projects() {
  return (
    <Box component="section" id="projects" sx={{ py: 12 }}>
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
            Stuff I have built
            </Typography>
          </Box>
        </motion.div>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                elevation={1} 
                sx={{ 
                  p: 4,
                  width: '100%',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'grey.100',
                  '&:hover': {
                    boxShadow: 3,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                    <Typography 
                      variant="h4" 
                      component="h3"
                      sx={{ 
                        fontWeight: 500,
                        color: 'text.primary',
                        flex: 1,
                        fontSize: { xs: '1.5rem', md: '2rem' }
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, ml: 2, flexShrink: 0 }}>
                      <IconButton 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{ 
                          bgcolor: 'grey.100',
                          '&:hover': { bgcolor: 'grey.200' },
                          borderRadius: 1
                        }}
                      >
                        <GitHub fontSize="small" />
                      </IconButton>
                      <IconButton 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{ 
                          bgcolor: 'grey.100',
                          '&:hover': { bgcolor: 'grey.200' },
                          borderRadius: 1
                        }}
                      >
                        <Launch fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      mb: 3,
                      fontSize: '1rem'
                    }}
                  >
                    {project.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.tech.map((tech, i) => (
                      <Chip 
                        key={i} 
                        label={tech}
                        size="small"
                        variant="filled"
                        sx={{ 
                          bgcolor: 'grey.100',
                          color: 'text.primary',
                          fontWeight: 500,
                          borderRadius: 1,
                          fontSize: '0.8rem'
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;
