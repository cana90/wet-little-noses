import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DogCard from '../components/dogs/DogCard';

// Material UI imports
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Paper,
  Stack,
  Avatar
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const Home = () => {
  const { t } = useTranslation();
  
  // Placeholder dog data - in a real app, this would come from your backend
  const featuredDogs = [
    {
      id: 1,
      name: "Buddy",
      image: "https://placedog.net/400/300?id=1",
      age: "3 years",
      breed: "Golden Retriever Mix",
      items: [
        { id: 101, name: "Heart medication", price: 45, purchased: false },
        { id: 102, name: "Special food", price: 30, purchased: true },
        { id: 103, name: "Orthopedic bed", price: 55, purchased: false }
      ],
      category: "adult"
    },
    {
      id: 2,
      name: "Luna",
      image: "https://placedog.net/400/300?id=2",
      age: "5 months",
      breed: "Border Collie Mix",
      items: [
        { id: 201, name: "Puppy food", price: 25, purchased: false },
        { id: 202, name: "Training toys", price: 15, purchased: false },
        { id: 203, name: "Puppy pads", price: 10, purchased: true }
      ],
      category: "puppy"
    },
    {
      id: 3,
      name: "Max",
      image: "https://placedog.net/400/300?id=3",
      age: "7 years",
      breed: "German Shepherd",
      items: [
        { id: 301, name: "Joint supplements", price: 35, purchased: false },
        { id: 302, name: "Senior food", price: 40, purchased: false },
        { id: 303, name: "Heated pad", price: 30, purchased: true }
      ],
      category: "senior"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md">
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography variant="h3" component="h1" fontWeight="bold">
              {t('home.title')}
            </Typography>
            <Typography variant="h6">
              {t('home.subtitle')}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button 
                component={Link} 
                to="/dogs" 
                variant="contained" 
                size="large"
                startIcon={<PetsIcon />}
                color="primary"
              >
                {t('home.adoptButton')}
              </Button>
              <Button 
                component={Link} 
                to="/donate" 
                variant="outlined" 
                size="large"
                startIcon={<ShoppingBasketIcon />}
                sx={{ color: 'white', borderColor: 'white' }}
              >
                {t('home.donateButton')}
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      
      {/* Featured Dogs */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          color="primary" 
          align="center" 
          gutterBottom 
          sx={{ mb: 6 }}
        >
          {t('home.featuredDogs')}
        </Typography>
        
        <Grid container spacing={4}>
          {featuredDogs.map((dog) => (
            <Grid item key={dog.id} xs={12} sm={6} md={4}>
              <DogCard dog={dog} />
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button 
            component={Link} 
            to="/dogs" 
            variant="contained" 
            color="primary" 
            size="large"
          >
            {t('home.seeAllDogs')}
          </Button>
        </Box>
      </Container>
      
      {/* How It Works */}
      <Box sx={{ bgcolor: 'primary.light', py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            component="h2" 
            color="primary.dark" 
            align="center" 
            gutterBottom 
            sx={{ mb: 6 }}
          >
            {t('home.howItWorks')}
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                <Avatar 
                  sx={{ 
                    bgcolor: 'primary.main', 
                    width: 64, 
                    height: 64, 
                    mb: 2,
                    mx: 'auto'
                  }}
                >
                  <FavoriteIcon fontSize="large" />
                </Avatar>
                <Typography variant="h5" color="primary" gutterBottom>
                  {t('home.virtualAdoption')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('home.virtualAdoptionDesc')}
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                <Avatar 
                  sx={{ 
                    bgcolor: 'primary.main', 
                    width: 64, 
                    height: 64, 
                    mb: 2,
                    mx: 'auto'
                  }}
                >
                  <ShoppingBasketIcon fontSize="large" />
                </Avatar>
                <Typography variant="h5" color="primary" gutterBottom>
                  {t('home.donateSupplies')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('home.donateSuppliesDesc')}
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                <Avatar 
                  sx={{ 
                    bgcolor: 'primary.main', 
                    width: 64, 
                    height: 64, 
                    mb: 2,
                    mx: 'auto'
                  }}
                >
                  <ShareIcon fontSize="large" />
                </Avatar>
                <Typography variant="h5" color="primary" gutterBottom>
                  {t('home.shareStories')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('home.shareStoriesDesc')}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;