import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { useDogManagement } from '../hooks/dogManagement';

// Material UI imports
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  LinearProgress,
  Alert,
  Stack
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { dogs, loading, error, removeDog } = useDogManagement();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [dogToDelete, setDogToDelete] = useState(null);
  const [actionStatus, setActionStatus] = useState({ type: '', message: '' });

  // Handle logout
  const handleLogout = async () => {
    try {
      await Auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  // Handle add new dog
  const handleAddDog = () => {
    navigate('/admin/dogs/new');
  };

  // Handle edit dog
  const handleEditDog = (id) => {
    navigate(`/admin/dogs/edit/${id}`);
  };

  // Handle delete dog dialog
  const handleOpenDeleteDialog = (dog) => {
    setDogToDelete(dog);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setDogToDelete(null);
  };

  // Handle confirm delete
  const handleConfirmDelete = async () => {
    if (!dogToDelete) return;
    
    try {
      setActionStatus({ type: 'loading', message: 'Deleting dog...' });
      await removeDog(dogToDelete.id);
      setActionStatus({ type: 'success', message: `${dogToDelete.name} was successfully deleted` });
      handleCloseDeleteDialog();
    } catch (err) {
      setActionStatus({ type: 'error', message: 'Failed to delete dog: ' + err.message });
    }
  };

  // Clear status message after 5 seconds
  React.useEffect(() => {
    if (actionStatus.message) {
      const timer = setTimeout(() => {
        setActionStatus({ type: '', message: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [actionStatus]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard - Dog Management
        </Typography>
        <Button 
          variant="outlined" 
          color="secondary" 
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>

      {/* Status messages */}
      {actionStatus.message && (
        <Alert 
          severity={actionStatus.type === 'success' ? 'success' : 'error'} 
          sx={{ mb: 3 }}
        >
          {actionStatus.message}
        </Alert>
      )}

      {/* Add new dog button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAddDog}
        >
          Add New Dog
        </Button>
      </Box>

      {/* Dogs table */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        {loading ? (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="dogs table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Breed</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Items</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dogs.map((dog) => (
                  <TableRow key={dog.id} hover>
                    <TableCell component="th" scope="row">
                      {dog.name}
                    </TableCell>
                    <TableCell>
                      {dog.image ? (
                        <Box
                          component="img"
                          sx={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 1 }}
                          src={dog.image}
                          alt={dog.name}
                        />
                      ) : (
                        "No image"
                      )}
                    </TableCell>
                    <TableCell>{dog.age}</TableCell>
                    <TableCell>{dog.breed}</TableCell>
                    <TableCell>
                      <Chip 
                        label={dog.category?.toLowerCase() || 'Unknown'} 
                        color={
                          dog.category === 'PUPPY' ? 'info' : 
                          dog.category === 'ADULT' ? 'primary' : 
                          dog.category === 'SENIOR' ? 'secondary' : 'default'
                        }
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        {dog.items ? dog.items.length : 0} items
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton 
                        color="primary" 
                        onClick={() => handleEditDog(dog.id)}
                        size="small"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton 
                        color="error" 
                        onClick={() => handleOpenDeleteDialog(dog)}
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                {dogs.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} align="center">
                      No dogs found. Add a new dog to get started.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>

      {/* Delete confirmation dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete {dogToDelete?.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete {dogToDelete?.name}? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminDashboard;