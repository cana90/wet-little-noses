import React from 'react';
import { useTranslation } from 'react-i18next';

// Material UI imports
import { 
  Container, 
  Typography, 
  Paper, 
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Button
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PetsIcon from '@mui/icons-material/Pets';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Donate = () => {
  const { t } = useTranslation();
  
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" color="primary" align="center" gutterBottom>
        Ways to Help
      </Typography>
      
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Choose how you'd like to support our dogs
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card raised sx={{ height: '100%' }}>
            <CardHeader 
              title="Virtual Adoption" 
              titleTypographyProps={{ align: 'center', color: 'primary' }}
              sx={{ bgcolor: 'primary.light', color: 'white' }}
              avatar={<FavoriteIcon />}
            />
            <CardContent>
              <Box sx={{ textAlign: 'center', my: 2 }}>
                <Typography variant="h4" color="text.primary">
                  $35
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  per month
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" sx={{ mb: 2 }}>
                Virtually adopt a dog and help with their ongoing care needs:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>• Regular food and supplies</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>• Medical check-ups</Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>• Training and socialization</Typography>
              <Button 
                variant="contained" 
                fullWidth 
                color="primary"
                startIcon={<PetsIcon />}
              >
                Adopt Virtually
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card raised sx={{ height: '100%' }}>
            <CardHeader 
              title="One-Time Donation" 
              titleTypographyProps={{ align: 'center', color: 'primary' }}
              sx={{ bgcolor: 'primary.light', color: 'white' }}
              avatar={<ShoppingCartIcon />}
            />
            <CardContent>
              <Box sx={{ textAlign: 'center', my: 2 }}>
                <Typography variant="h4" color="text.primary">
                  Any Amount
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  helps a lot
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" sx={{ mb: 2 }}>
                Make a one-time donation to support our foster program:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>• Emergency medical care</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>• Shelter improvements</Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>• Special needs dogs</Typography>
              <Button 
                variant="contained" 
                fullWidth 
                color="primary"
                startIcon={<ShoppingCartIcon />}
              >
                Donate Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card raised sx={{ height: '100%' }}>
            <CardHeader 
              title="Specific Items" 
              titleTypographyProps={{ align: 'center', color: 'primary' }}
              sx={{ bgcolor: 'primary.light', color: 'white' }}
              avatar={<ShoppingCartIcon />}
            />
            <CardContent>
              <Box sx={{ textAlign: 'center', my: 2 }}>
                <Typography variant="h4" color="text.primary">
                  Items List
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  by dog needs
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" sx={{ mb: 2 }}>
                Purchase specific items that dogs need:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>• Medical supplies</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>• Special food</Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>• Bedding and toys</Typography>
              <Button 
                variant="contained" 
                fullWidth 
                color="primary"
                startIcon={<ShoppingCartIcon />}
              >
                See Needed Items
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="body1">
          This is the Donation page for Wet Little Noses dog fostering association. 
          Here we will provide information about how to donate and help the dogs in our care.
        </Typography>
        <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
          Payment processing is currently being implemented. You will soon be able to make real donations.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Donate;