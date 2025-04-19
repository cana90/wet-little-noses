import React, { useState } from 'react';
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
  Avatar,
  ToggleButtonGroup,
  ToggleButton,
  Alert
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const Home = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  
  // All dogs data with descriptions
  const allDogs = [
    {
      id: 1,
      name: "Buddy",
      image: "https://placedog.net/400/300?id=1",
      age: "3 years",
      breed: "Golden Retriever Mix",
      description: "Buddy is a friendly, energetic Golden Retriever who loves to play fetch and go for long walks.",
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
      description: "Luna is a playful and intelligent Border Collie puppy. She's learning basic commands quickly.",
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
      description: "Max is a dignified senior German Shepherd with a gentle soul. He enjoys relaxing in the sun.",
      items: [
        { id: 301, name: "Joint supplements", price: 35, purchased: false },
        { id: 302, name: "Senior food", price: 40, purchased: false },
        { id: 303, name: "Heated pad", price: 30, purchased: true }
      ],
      category: "senior"
    },
    {
      id: 4,
      name: "Charlie",
      image: "https://placedog.net/400/300?id=4",
      age: "2 years",
      breed: "Labrador Mix",
      description: "Charlie is an active and loyal companion who loves swimming and playing with his ball.",
      items: [
        { id: 401, name: "Regular food", price: 30, purchased: false },
        { id: 402, name: "Toys", price: 20, purchased: false },
        { id: 403, name: "Leash", price: 15, purchased: true }
      ],
      category: "adult"
    },
    {
      id: 5,
      name: "Daisy",
      image: "https://placedog.net/400/300?id=5",
      age: "4 months",
      breed: "Poodle Mix",
      description: "Daisy is a curious and affectionate puppy who loves to cuddle and explore her surroundings.",
      items: [
        { id: 501, name: "Puppy food", price: 25, purchased: true },
        { id: 502, name: "Blankets", price: 20, purchased: false },
        { id: 503, name: "Chew toys", price: 10, purchased: false }
      ],
      category: "puppy"
    },
    {
      id: 6,
      name: "Rocky",
      image: "https://placedog.net/400/300?id=6",
      age: "8 years",
      breed: "Boxer",
      description: "Rocky is a gentle senior dog who has lots of love to give and enjoys short, leisurely walks.",
      items: [
        { id: 601, name: "Orthopedic bed", price: 55, purchased: false },
        { id: 602, name: "Joint supplements", price: 35, purchased: true },
        { id: 603, name: "Senior food", price: 40, purchased: false }
      ],
      category: "senior"
    }
  ];
  
  // Filter dogs based on selected category
  const filteredDogs = filter === 'all' 
    ? allDogs 
    : allDogs.filter(dog => dog.category === filter);
  
  // Handle filter change
  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

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
                variant="contained" 
                size="large"
                startIcon={<PetsIcon />}
                color="secondary"
                onClick={() => window.scrollTo({
                  top: document.getElementById('dogs-section').offsetTop - 80,
                  behavior: 'smooth'
                })}
                sx={{
                  color: 'primary.main'
                }}
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
      
      {/* Dogs Section with Filtering */}
      <Box id="dogs-section" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            component="h2" 
            color="primary" 
            align="center" 
            gutterBottom
          >
            {t('home.featuredDogs')}
          </Typography>
          
          {/* Filter Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6, mt: 4 }}>
            <ToggleButtonGroup
              value={filter}
              exclusive
              onChange={handleFilterChange}
              aria-label="dog category filter"
              color="primary"
            >
              <ToggleButton value="all" aria-label="all dogs">
                {t('dogs.filterAll')}
              </ToggleButton>
              <ToggleButton value="puppy" aria-label="puppies">
                {t('dogs.filterPuppies')}
              </ToggleButton>
              <ToggleButton value="adult" aria-label="adult dogs">
                {t('dogs.filterAdults')}
              </ToggleButton>
              <ToggleButton value="senior" aria-label="senior dogs">
                {t('dogs.filterSeniors')}
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          
          {/* Dogs Grid */}
          <Grid container spacing={4}>
            {filteredDogs.map((dog) => (
              <Grid item key={dog.id} xs={12} sm={6} md={4}>
                <DogCard dog={dog} />
              </Grid>
            ))}
          </Grid>
          
          {/* No Results Message */}
          {filteredDogs.length === 0 && (
            <Box sx={{ py: 4 }}>
              <Alert severity="info" icon={<PetsIcon />}>
                {t('dogs.noResults')}
              </Alert>
            </Box>
          )}
        </Container>
      </Box>
      
      {/* How It Works Section */}
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