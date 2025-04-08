import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Material UI imports
import { 
  Box, 
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Divider,
  Stack
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PetsIcon sx={{ mr: 1 }} />
              <Typography variant="h6" component="div">
                Wet Little Noses
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'primary.light' }}>
              {t('footer.description')}
            </Typography>
          </Grid>
          
          <Grid item xs={6} md={4}>
            <Typography variant="h6" gutterBottom>
              {t('footer.quickLinks')}
            </Typography>
            <Stack spacing={1}>
              <MuiLink 
                component={Link} 
                to="/" 
                color="primary.light" 
                underline="hover"
              >
                {t('navigation.home')}
              </MuiLink>
              <MuiLink 
                component={Link} 
                to="/dogs" 
                color="primary.light" 
                underline="hover"
              >
                {t('navigation.dogs')}
              </MuiLink>
              <MuiLink 
                component={Link} 
                to="/about" 
                color="primary.light" 
                underline="hover"
              >
                {t('navigation.about')}
              </MuiLink>
              <MuiLink 
                component={Link} 
                to="/donate" 
                color="primary.light" 
                underline="hover"
              >
                {t('navigation.donate')}
              </MuiLink>
            </Stack>
          </Grid>
          
          <Grid item xs={6} md={4}>
            <Typography variant="h6" gutterBottom>
              {t('footer.contact')}
            </Typography>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 1, fontSize: 'small', color: 'primary.light' }} />
                <Typography variant="body2" color="primary.light">
                  info@wetlittlenoses.ro
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 1, fontSize: 'small', color: 'primary.light' }} />
                <Typography variant="body2" color="primary.light">
                  (555) 123-4567
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'primary.light', opacity: 0.2 }} />
        
        <Typography variant="body2" align="center" sx={{ color: 'primary.light' }}>
          &copy; {currentYear} Wet Little Noses / Năsuțuri Umede. {t('footer.rights')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;