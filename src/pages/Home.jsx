import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  
  // Placeholder dog data - in a real app, this would come from your backend
  const featuredDogs = [
    {
      id: 1,
      name: "Buddy",
      image: "https://placedog.net/400/300?id=1",
      age: "3 years",
      breed: "Golden Retriever Mix",
      needs: "Heart medication, special food"
    },
    {
      id: 2,
      name: "Luna",
      image: "https://placedog.net/400/300?id=2",
      age: "5 months",
      breed: "Border Collie Mix",
      needs: "Puppy food, training toys"
    },
    {
      id: 3,
      name: "Max",
      image: "https://placedog.net/400/300?id=3",
      age: "7 years",
      breed: "German Shepherd",
      needs: "Joint supplements, senior food"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-amber-700 text-amber-50 py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">{t('home.title')}</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t('home.subtitle')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/dogs" className="bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transition">
              {t('home.adoptButton')}
            </Link>
            <Link to="/donate" className="bg-amber-50 hover:bg-amber-100 text-amber-800 py-3 px-6 rounded-lg font-semibold shadow-lg transition">
              {t('home.donateButton')}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Featured Dogs */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-800 text-center mb-12">
          {t('home.featuredDogs')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDogs.map((dog) => (
            <div key={dog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={dog.image} alt={dog.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-amber-800 mb-2">{dog.name}</h3>
                <p className="text-amber-700 mb-1">{dog.age} • {dog.breed}</p>
                <p className="text-gray-600 mb-4">{t('home.needs')}: {dog.needs}</p>
                <div className="flex justify-between">
                  <Link to={`/dogs/${dog.id}`} className="bg-amber-100 hover:bg-amber-200 text-amber-800 py-2 px-4 rounded font-medium">
                    {t('home.sponsorButton')} {dog.name}
                  </Link>
                  <Link to={`/donate?dog=${dog.id}`} className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded font-medium">
                    {t('home.donateItemsButton')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/dogs" className="bg-amber-800 hover:bg-amber-900 text-white py-2 px-6 rounded-lg font-semibold">
            {t('home.seeAllDogs')}
          </Link>
        </div>
      </div>
      
      {/* How It Works */}
      <div className="bg-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-800 text-center mb-12">
            {t('home.howItWorks')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-amber-200 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">
                {t('home.virtualAdoption')}
              </h3>
              <p className="text-gray-600">
                {t('home.virtualAdoptionDesc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-amber-200 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">
                {t('home.donateSupplies')}
              </h3>
              <p className="text-gray-600">
                {t('home.donateSuppliesDesc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-amber-200 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">
                {t('home.shareStories')}
              </h3>
              <p className="text-gray-600">
                {t('home.shareStoriesDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;