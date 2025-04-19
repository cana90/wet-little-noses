import React from 'react';
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
  Stack
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PetsIcon from '@mui/icons-material/Pets';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const DogCard = ({ dog }) => {
  const { t } = useTranslation();
  
  return (
    <Card 
      elevation={2} 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: '8px',
        backgroundColor: 'white'
      }}
    >
      <CardMedia
        component="img"
        sx={{ 
          height: 220,
          objectFit: 'cover'
        }}
        image={dog.image}
        alt={dog.name}
        onError={(e) => {
          e.target.src = "https://placedog.net/400/300?random"; // Fallback image
        }}
      />
      <CardContent sx={{ p: 3, flexGrow: 1 }}>
        <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
          {dog.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {dog.age} • {dog.breed}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" paragraph sx={{ mt: 2 }}>
          {dog.description}
        </Typography>
        
        <Box sx={{ mt: 3, mb: 3 }}>
          <Typography variant="body2" fontWeight="500" gutterBottom>
            Needs:
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
            {dog.items && dog.items.map(item => (
              <Chip
                key={item.id}
                label={`${item.name} ($${item.price})`}
                color={item.purchased ? "success" : "primary"}
                variant={item.purchased ? "outlined" : "filled"}
                icon={item.purchased ? <CheckCircleIcon /> : null}
                disabled={item.purchased}
                size="small"
                sx={{ 
                  borderRadius: '4px',
                  mb: 1,
                  bgcolor: item.purchased ? 'transparent' : 'primary.main',
                  '& .MuiChip-label': {
                    px: 1.5
                  }
                }}
              />
            ))}
          </Stack>
        </Box>
        
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button
            component={Link}
            to={`/dogs/${dog.id}`}
            startIcon={<PetsIcon />}
            variant="contained"
            size="medium"
            color="primary"
            sx={{ 
              borderRadius: '4px',
              textTransform: 'none',
              fontWeight: 'medium',
              flex: 1
            }}
          >
            Sponsor
          </Button>
          <Button
            component={Link}
            to={`/donate?dog=${dog.id}`}
            startIcon={<ShoppingCartIcon />}
            variant="outlined"
            size="medium"
            color="primary"
            sx={{ 
              borderRadius: '4px',
              textTransform: 'none',
              fontWeight: 'medium',
              flex: 1
            }}
          >
            Donate Items
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DogCard;