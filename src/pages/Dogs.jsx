import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DogCard from '../components/dogs/DogCard';

// Material UI imports
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  ToggleButtonGroup, 
  ToggleButton,
  Alert
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

const Dogs = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  
  // Placeholder dog data - in a real app, this would come from your backend
  const allDogs = [
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
    },
    {
      id: 4,
      name: "Charlie",
      image: "https://placedog.net/400/300?id=4",
      age: "2 years",
      breed: "Labrador Mix",
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

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" color="primary" align="center" gutterBottom>
        {t('dogs.pageTitle')}
      </Typography>
      
      {/* Filter Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
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
      
      {/* Dog Grid */}
      <Grid container spacing={4}>
        {filteredDogs.map(dog => (
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
  );
};

export default Dogs;