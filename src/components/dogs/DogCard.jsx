import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DogCard = ({ dog }) => {
  const { t } = useTranslation();
  
  // This function will be called when someone clicks on an item to purchase
  const handlePurchase = (dogId, itemId) => {
    console.log(`Purchase item ${itemId} for dog ${dogId}`);
    alert(`Thank you for purchasing this item! In the real application, this would take you to a payment screen.`);
  };
  
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
        
        {/* Items/Needs section */}
        <div className="mb-4">
          <p className="text-gray-700 font-medium mb-2">{t('dogs.needs')}:</p>
          <div className="flex flex-wrap gap-2">
            {dog.items && dog.items.map(item => (
              <button
                key={item.id}
                className={`text-sm px-3 py-1 rounded-full flex items-center gap-1
                  ${item.purchased 
                    ? 'bg-green-100 text-green-800 cursor-default' 
                    : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
                disabled={item.purchased}
                onClick={() => handlePurchase(dog.id, item.id)}
              >
                {item.name} (${item.price})
                {item.purchased && (
                  <span className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></span>
                )}
              </button>
            ))}
          </div>
        </div>
        
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