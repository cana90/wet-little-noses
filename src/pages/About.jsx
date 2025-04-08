import React from 'react';
import { useTranslation } from 'react-i18next';

// Material UI imports
import { 
  Container, 
  Typography, 
  Paper, 
  Box,
  Divider
} from '@mui/material';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" color="primary" align="center" gutterBottom>
        About Wet Little Noses
      </Typography>
      
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="body1" paragraph>
          This is the About page for Wet Little Noses dog fostering association. 
          Here we will provide information about our mission, history, and the people behind our organization.
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" color="primary" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            We believe every dog deserves a loving home. While they wait for their forever families,
            we provide temporary care and all the love they need. Our foster network ensures each dog
            receives individual attention, proper care, and socialization.
          </Typography>
        </Box>
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" color="primary" gutterBottom>
            How We Work
          </Typography>
          <Typography variant="body1">
            This page is currently a placeholder and will be updated with real content soon.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;