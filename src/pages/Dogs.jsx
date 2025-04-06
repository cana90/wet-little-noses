import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DogCard from '../components/dogs/DogCard';

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
      needs: "Heart medication, special food",
      category: "adult"
    },
    {
      id: 2,
      name: "Luna",
      image: "https://placedog.net/400/300?id=2",
      age: "5 months",
      breed: "Border Collie Mix",
      needs: "Puppy food, training toys",
      category: "puppy"
    },
    {
      id: 3,
      name: "Max",
      image: "https://placedog.net/400/300?id=3",
      age: "7 years",
      breed: "German Shepherd",
      needs: "Joint supplements, senior food",
      category: "senior"
    },
    {
      id: 4,
      name: "Charlie",
      image: "https://placedog.net/400/300?id=4",
      age: "2 years",
      breed: "Labrador Mix",
      needs: "Regular food, toys",
      category: "adult"
    },
    {
      id: 5,
      name: "Daisy",
      image: "https://placedog.net/400/300?id=5",
      age: "4 months",
      breed: "Poodle Mix",
      needs: "Puppy food, blankets",
      category: "puppy"
    },
    {
      id: 6,
      name: "Rocky",
      image: "https://placedog.net/400/300?id=6",
      age: "8 years",
      breed: "Boxer",
      needs: "Orthopedic bed, joint supplements",
      category: "senior"
    }
  ];
  
  // Filter dogs based on selected category
  const filteredDogs = filter === 'all' 
    ? allDogs 
    : allDogs.filter(dog => dog.category === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-800 text-center mb-8">
        {t('dogs.pageTitle')}
      </h1>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button 
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full ${filter === 'all' 
            ? 'bg-amber-600 text-white' 
            : 'bg-amber-100 text-amber-800'}`}
        >
          {t('dogs.filterAll')}
        </button>
        <button 
          onClick={() => setFilter('puppy')}
          className={`px-4 py-2 rounded-full ${filter === 'puppy' 
            ? 'bg-amber-600 text-white' 
            : 'bg-amber-100 text-amber-800'}`}
        >
          {t('dogs.filterPuppies')}
        </button>
        <button 
          onClick={() => setFilter('adult')}
          className={`px-4 py-2 rounded-full ${filter === 'adult' 
            ? 'bg-amber-600 text-white' 
            : 'bg-amber-100 text-amber-800'}`}
        >
          {t('dogs.filterAdults')}
        </button>
        <button 
          onClick={() => setFilter('senior')}
          className={`px-4 py-2 rounded-full ${filter === 'senior' 
            ? 'bg-amber-600 text-white' 
            : 'bg-amber-100 text-amber-800'}`}
        >
          {t('dogs.filterSeniors')}
        </button>
      </div>
      
      {/* Dog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDogs.map(dog => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
      
      {/* No Results Message */}
      {filteredDogs.length === 0 && (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">
            {t('dogs.noResults')}
          </p>
        </div>
      )}
    </div>
  );
};

export default Dogs;