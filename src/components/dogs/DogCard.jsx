import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// Material UI imports
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
  Grid,
  CardActions,
  Collapse
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PetsIcon from '@mui/icons-material/Pets';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const DogCard = ({ dog }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  
  // This function will be called when someone clicks on an item to purchase
  const handlePurchase = (dogId, itemId) => {
    console.log(`Purchase item ${itemId} for dog ${dogId}`);
    alert(`Thank you for purchasing this item! In the real application, this would take you to a payment screen.`);
  };
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={dog.image}
        alt={dog.name}
        onError={(e) => {
          e.target.src = "https://placedog.net/400/300?random"; // Fallback image
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {dog.name}
        </Typography>
        <Typography variant="body2" color="text.black" gutterBottom>
          {dog.age} • {dog.breed}
        </Typography>
        
        {/* Description section with expand/collapse */}
        {dog.description && (
          <Box sx={{ mb: 2 }}>
            <Collapse in={expanded} collapsedSize="4.5em">
              <Typography variant="body2" color="text.black">
                {dog.description}
              </Typography>
            </Collapse>
            {dog.description.length > 150 && (
              <Box sx={{ textAlign: 'right', mt: 1 }}>
                <Button 
                  size="small" 
                  onClick={toggleExpanded} 
                  sx={{ textTransform: 'none' }}
                >
                  {expanded ? t('common.showLess') : t('common.readMore')}
                </Button>
              </Box>
            )}
          </Box>
        )}
        
        <Typography variant="body2" color="text.black" sx={{ mt: 1, mb: 1 }}>
          {t('dogs.needs')}:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
          {dog.items && dog.items.map(item => (
            <Chip
              key={item.id}
              label={`${item.name} ($${item.price})`}
              onClick={item.purchased ? undefined : () => handlePurchase(dog.id, item.id)}
              color={item.purchased ? "success" : "primary"}
              variant={item.purchased ? "outlined" : "filled"}
              icon={item.purchased ? <CheckCircleIcon /> : undefined}
              disabled={item.purchased}
              size="small"
            />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button
              component={Link}
              to={`/dogs/${dog.id}`}
              startIcon={<PetsIcon />}
              size="small"
              fullWidth
              variant="outlined"
              sx={{ 
                color: 'primary.main',
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 128, 128, 0.04)'
                }
              }}
            >
              {t('dogs.sponsor')} {dog.name}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              component={Link}
              to={`/donate?dog=${dog.id}`}
              startIcon={<ShoppingCartIcon />}
              size="small"
              color="secondary"
              variant="outlined"
              fullWidth
              sx={{ 
                color: 'secondary.main',
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0, 128, 128, 0.04)'
                }
              }}
            >
              {t('dogs.donateItems')}
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default DogCard;