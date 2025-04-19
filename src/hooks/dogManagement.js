import { useState, useEffect } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { listDogs, getDog } from '../graphql/queries';
import { createDog, updateDog, deleteDog } from '../graphql/mutations';
import { createDogItem, updateDogItem, deleteDogItem } from '../graphql/mutations';

// Hook for managing dogs
export const useDogManagement = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all dogs
  const fetchDogs = async () => {
    setLoading(true);
    try {
      const dogData = await API.graphql(graphqlOperation(listDogs));
      const dogList = dogData.data.listDogs.items;
      
      // Fetch dog items for each dog
      const dogsWithItems = await Promise.all(
        dogList.map(async (dog) => {
          // Get items associated with this dog
          const itemData = await API.graphql(graphqlOperation(
            `query GetItemsByDogId {
              listDogItems(filter: {dogID: {eq: "${dog.id}"}}) {
                items {
                  id
                  name
                  price
                  purchased
                }
              }
            }`
          ));
          
          return {
            ...dog,
            items: itemData.data.listDogItems.items
          };
        })
      );
      
      setDogs(dogsWithItems);
      setError(null);
    } catch (err) {
      console.error('Error fetching dogs:', err);
      setError('Could not fetch dogs');
    } finally {
      setLoading(false);
    }
  };

  // Fetch dog by ID
  const fetchDogById = async (id) => {
    try {
      const dogData = await API.graphql(graphqlOperation(getDog, { id }));
      return dogData.data.getDog;
    } catch (err) {
      console.error('Error fetching dog:', err);
      throw new Error('Could not fetch dog');
    }
  };

  // Create a new dog
  const addDog = async (dogData) => {
    try {
      // Handle image upload if present
      let imageUrl = '';
      if (dogData.imageFile) {
        const file = dogData.imageFile;
        const filename = `${Date.now()}-${file.name}`;
        await Storage.put(filename, file, {
          contentType: file.type,
        });
        imageUrl = await Storage.get(filename);
      }
      
      // Create dog record
      const newDog = {
        name: dogData.name,
        image: imageUrl || dogData.image,
        age: dogData.age,
        breed: dogData.breed,
        description: dogData.description,
        category: dogData.category,
      };
      
      const result = await API.graphql(graphqlOperation(createDog, { input: newDog }));
      const createdDog = result.data.createDog;
      
      // Add dog items if present
      if (dogData.items && dogData.items.length > 0) {
        await Promise.all(
          dogData.items.map(item => 
            API.graphql(graphqlOperation(createDogItem, { 
              input: {
                ...item,
                dogID: createdDog.id
              } 
            }))
          )
        );
      }
      
      // Refresh dogs list
      await fetchDogs();
      return createdDog;
    } catch (err) {
      console.error('Error adding dog:', err);
      throw new Error('Could not add dog');
    }
  };

  // Update an existing dog
  const updateDogById = async (id, dogData) => {
    try {
      // Handle image upload if there's a new image
      if (dogData.imageFile) {
        const file = dogData.imageFile;
        const filename = `${Date.now()}-${file.name}`;
        await Storage.put(filename, file, {
          contentType: file.type,
        });
        dogData.image = await Storage.get(filename);
      }
      
      // Remove imageFile property as it's not in the schema
      const { imageFile, items, ...updateData } = dogData;
      
      // Update dog record
      await API.graphql(graphqlOperation(updateDog, { 
        input: { 
          id, 
          ...updateData 
        } 
      }));
      
      // Update items if provided
      if (items) {
        // Get current items
        const itemData = await API.graphql(graphqlOperation(
          `query GetItemsByDogId {
            listDogItems(filter: {dogID: {eq: "${id}"}}) {
              items {
                id
              }
            }
          }`
        ));
        
        const existingItemIds = itemData.data.listDogItems.items.map(item => item.id);
        
        // Create new items, update existing ones
        for (const item of items) {
          if (item.id && existingItemIds.includes(item.id)) {
            // Update existing item
            await API.graphql(graphqlOperation(updateDogItem, { 
              input: {
                id: item.id,
                name: item.name,
                price: item.price,
                purchased: item.purchased,
              } 
            }));
          } else {
            // Create new item
            await API.graphql(graphqlOperation(createDogItem, { 
              input: {
                name: item.name,
                price: item.price,
                purchased: item.purchased || false,
                dogID: id
              } 
            }));
          }
        }
      }
      
      // Refresh dogs list
      await fetchDogs();
      return id;
    } catch (err) {
      console.error('Error updating dog:', err);
      throw new Error('Could not update dog');
    }
  };

  // Delete a dog
  const removeDog = async (id) => {
    try {
      // First delete all related items
      const itemData = await API.graphql(graphqlOperation(
        `query GetItemsByDogId {
          listDogItems(filter: {dogID: {eq: "${id}"}}) {
            items {
              id
            }
          }
        }`
      ));
      
      const items = itemData.data.listDogItems.items;
      
      // Delete each item
      for (const item of items) {
        await API.graphql(graphqlOperation(deleteDogItem, { input: { id: item.id } }));
      }
      
      // Then delete the dog
      await API.graphql(graphqlOperation(deleteDog, { input: { id } }));
      
      // Refresh dogs list
      await fetchDogs();
      return id;
    } catch (err) {
      console.error('Error removing dog:', err);
      throw new Error('Could not remove dog');
    }
  };

  // Load dogs on mount
  useEffect(() => {
    fetchDogs();
  }, []);

  return {
    dogs,
    loading,
    error,
    fetchDogs,
    fetchDogById,
    addDog,
    updateDogById,
    removeDog
  };
};