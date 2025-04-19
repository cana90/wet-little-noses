import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDogManagement } from '../hooks/dogManagement';

// Material UI imports
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Divider,
  IconButton,
  Card,
  CardMedia,
  Alert,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  InputAdornment
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const DogForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;
  const { fetchDogById, addDog, updateDogById } = useDogManagement();
  
  // Form state
  const [formValues, setFormValues] = useState({
    name: '',
    age: '',
    breed: '',
    description: '',
    category: '',
    image: '',
    imageFile: null,
    items: []
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(isEditMode);
  const [alertInfo, setAlertInfo] = useState({ show: false, severity: '', message: '' });
  
  // New item state for the item form
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    purchased: false
  });
  
  // For image preview
  const [imagePreview, setImagePreview] = useState('');
  
  // Fetch dog data if in edit mode
  useEffect(() => {
    if (isEditMode) {
      const fetchDog = async () => {
        try {
          setFetchLoading(true);
          const dogData = await fetchDogById(id);
          if (dogData) {
            setFormValues({
              name: dogData.name || '',
              age: dogData.age || '',
              breed: dogData.breed || '',
              description: dogData.description || '',
              category: dogData.category || '',
              image: dogData.image || '',
              imageFile: null,
              items: dogData.items || []
            });
            setImagePreview(dogData.image || '');
          }
        } catch (error) {
          console.error('Error fetching dog:', error);
          setAlertInfo({
            show: true,
            severity: 'error',
            message: 'Failed to load dog data. Please try again.'
          });
        } finally {
          setFetchLoading(false);
        }
      };
      
      fetchDog();
    }
  }, [id, isEditMode, fetchDogById]);
  
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Preview the selected image
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
    
    setFormValues(prev => ({
      ...prev,
      imageFile: file
    }));
  };
  
  // Handle new item form changes
  const handleItemChange = (e) => {
    const { name, value, checked } = e.target;
    setNewItem(prev => ({
      ...prev,
      [name]: name === 'purchased' ? checked : value
    }));
  };
  
  // Add item to the list
  const handleAddItem = () => {
    // Validate item form
    if (!newItem.name || !newItem.price) {
      return;
    }
    
    const itemToAdd = {
      id: `temp-${Date.now()}`, // Temporary ID for UI purposes
      name: newItem.name,
      price: parseFloat(newItem.price),
      purchased: newItem.purchased
    };
    
    setFormValues(prev => ({
      ...prev,
      items: [...prev.items, itemToAdd]
    }));
    
    // Reset new item form
    setNewItem({
      name: '',
      price: '',
      purchased: false
    });
  };
  
  // Remove item from the list
  const handleRemoveItem = (itemId) => {
    setFormValues(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== itemId)
    }));
  };
  
  // Toggle item purchased status
  const handleToggleItemPurchased = (itemId) => {
    setFormValues(prev => ({
      ...prev,
      items: prev.items.map(item => 
        item.id === itemId ? { ...item, purchased: !item.purchased } : item
      )
    }));
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formValues.name) newErrors.name = 'Name is required';
    if (!formValues.age) newErrors.age = 'Age is required';
    if (!formValues.breed) newErrors.breed = 'Breed is required';
    if (!formValues.description) newErrors.description = 'Description is required';
    if (!formValues.category) newErrors.category = 'Category is required';
    if (!isEditMode && !formValues.imageFile && !formValues.image) {
      newErrors.image = 'Image is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setAlertInfo({
        show: true,
        severity: 'error',
        message: 'Please fix the errors in the form'
      });
      return;
    }
    
    setLoading(true);
    try {
      if (isEditMode) {
        await updateDogById(id, formValues);
        setAlertInfo({
          show: true,
          severity: 'success',
          message: 'Dog updated successfully!'
        });
      } else {
        await addDog(formValues);
        setAlertInfo({
          show: true,
          severity: 'success',
          message: 'Dog added successfully!'
        });
        // Reset form after successful addition
        setFormValues({
          name: '',
          age: '',
          breed: '',
          description: '',
          category: '',
          image: '',
          imageFile: null,
          items: []
        });
        setImagePreview('');
      }
    } catch (error) {
      console.error('Error saving dog:', error);
      setAlertInfo({
        show: true,
        severity: 'error',
        message: `Failed to ${isEditMode ? 'update' : 'add'} dog: ${error.message}`
      });
    } finally {
      setLoading(false);
    }
  };
  
  // Handle back button
  const handleBack = () => {
    navigate('/admin');
  };
  
  if (fetchLoading) {
    return (
      <Container maxWidth="md" sx={{ py: 4, textAlign: 'center' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading dog information...
        </Typography>
      </Container>
    );
  }
  
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton color="primary" onClick={handleBack} sx={{ mr: 2 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" component="h1">
          {isEditMode ? 'Edit Dog' : 'Add New Dog'}
        </Typography>
      </Box>
      
      {alertInfo.show && (
        <Alert 
          severity={alertInfo.severity} 
          sx={{ mb: 3 }}
          onClose={() => setAlertInfo({ show: false, severity: '', message: '' })}
        >
          {alertInfo.message}
        </Alert>
      )}
      
      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Left column - Basic info */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                margin="normal"
                error={!!errors.name}
                helperText={errors.name}
                required
              />
              
              <TextField
                fullWidth
                label="Age"
                name="age"
                value={formValues.age}
                onChange={handleChange}
                margin="normal"
                placeholder="e.g., 3 years"
                error={!!errors.age}
                helperText={errors.age}
                required
              />
              
              <TextField
                fullWidth
                label="Breed"
                name="breed"
                value={formValues.breed}
                onChange={handleChange}
                margin="normal"
                error={!!errors.breed}
                helperText={errors.breed}
                required
              />
              
              <FormControl 
                fullWidth 
                margin="normal"
                error={!!errors.category}
                required
              >
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  name="category"
                  value={formValues.category}
                  onChange={handleChange}
                  label="Category"
                >
                  <MenuItem value="PUPPY">Puppy</MenuItem>
                  <MenuItem value="ADULT">Adult</MenuItem>
                  <MenuItem value="SENIOR">Senior</MenuItem>
                </Select>
                {errors.category && (
                  <Typography variant="caption" color="error">
                    {errors.category}
                  </Typography>
                )}
              </FormControl>
            </Grid>
            
            {/* Right column - Image and description */}
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 2, textAlign: 'center' }}>
                {imagePreview ? (
                  <Card>
                    <CardMedia
                      component="img"
                      image={imagePreview}