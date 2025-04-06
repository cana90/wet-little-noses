import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DogCard = ({ dog }) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={dog.image} 
        alt={dog.name} 
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = "https://placedog.net/400/300?random"; // Fallback image
        }}
      />
      <div className="p-6">
        <h3 className="font-bold text-xl text-amber-800 mb-2">{dog.name}</h3>
        <p className="text-amber-700 mb-1">{dog.age} • {dog.breed}</p>
        <p className="text-gray-600 mb-4">{t('dogs.needs')}: {dog.needs}</p>
        <div className="flex justify-between">
          <Link 
            to={`/dogs/${dog.id}`} 
            className="bg-amber-100 hover:bg-amber-200 text-amber-800 py-2 px-4 rounded font-medium"
          >
            {t('dogs.sponsor')} {dog.name}
          </Link>
          <Link 
            to={`/donate?dog=${dog.id}`} 
            className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded font-medium"
          >
            {t('dogs.donateItems')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DogCard;