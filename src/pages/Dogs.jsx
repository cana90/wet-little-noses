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