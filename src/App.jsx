import React, { useState } from 'react';
import { Heart, ChevronDown, ChevronUp, Calendar, User, Palette, CreditCard, Building2 } from 'lucide-react';

const App = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [animalType, setAnimalType] = useState('dogs');

  const translations = {
    en: {
      title: "Wet Little Noses",
      subtitle: "Thank you for visiting our foster animals!",
      description: "Each animal here is looking for their forever home. Your support helps us care for them until they find their perfect family.",
      about: "About",
      age: "Age",
      sex: "Sex", 
      breed: "Breed",
      male: "Male",
      female: "Female",
      donate: "Support Our Animals",
      donateTitle: "Help Us Care for These Beautiful Souls",
      donateDesc: "Your donation goes directly to food, medical care, and shelter for our foster animals.",
      bankDetails: "Bank Transfer",
      paypalDetails: "PayPal",
      thankYou: "Thank you for supporting our foster animals!",
      footerText: "Every donation and share helps these beautiful souls find their forever homes.",
      dogs: "Dogs",
      cats: "Cats"
    },
    ro: {
      title: "Năsuțuri Umede", 
      subtitle: "Mulțumim că vizitați animalele noastre din plasament!",
      description: "Fiecare animal de aici își caută căminul pentru totdeauna. Sprijinul vostru ne ajută să avem grijă de ei până își găsesc familia perfectă.",
      about: "Despre",
      age: "Vârsta",
      sex: "Sexul",
      breed: "Rasa", 
      male: "Mascul",
      female: "Femelă",
      donate: "Sprijină Animalele Noastre",
      donateTitle: "Ajută-ne să Avem Grijă de Aceste Suflete Frumoase",
      donateDesc: "Donația ta merge direct către hrană, îngrijire medicală și adăpost pentru animalele noastre.",
      bankDetails: "Transfer Bancar",
      paypalDetails: "PayPal", 
      thankYou: "Mulțumim că sprijiniți animalele noastre din plasament!",
      footerText: "Fiecare donație și distribuire ajută aceste suflete frumoase să își găsească căminele pentru totdeauna.",
      dogs: "Câini",
      cats: "Pisici"
    },
    de: {
      title: "Feuchte Kleine Nasen",
      subtitle: "Danke, dass Sie unsere Pflegetiere besuchen!",
      description: "Jedes Tier hier sucht sein Zuhause für immer. Ihre Unterstützung hilft uns, sie zu versorgen, bis sie ihre perfekte Familie finden.",
      about: "Über",
      age: "Alter", 
      sex: "Geschlecht",
      breed: "Rasse",
      male: "Männlich",
      female: "Weiblich", 
      donate: "Unterstützen Sie Unsere Tiere",
      donateTitle: "Helfen Sie uns, diese schönen Seelen zu versorgen",
      donateDesc: "Ihre Spende geht direkt an Futter, medizinische Versorgung und Unterkunft für unsere Pflegetiere.",
      bankDetails: "Banküberweisung",
      paypalDetails: "PayPal",
      thankYou: "Danke, dass Sie unsere Pflegetiere unterstützen!",
      footerText: "Jede Spende und jedes Teilen hilft diesen schönen Seelen, ihr Zuhause für immer zu finden.",
      dogs: "Hunde",
      cats: "Katzen"
    }
  };

  const t = translations[currentLanguage];

  const toggleCard = (dogId) => {
    setExpandedCards(prev => ({
      ...prev,
      [dogId]: !prev[dogId]
    }));
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  // Sample animal data with dogs and cats
  const dogs = [
    {
      id: 1,
      name: "Buddy",
      age: "3 years",
      breed: "Golden Retriever Mix",
      sex: "male",
      image: "https://placedog.net/400/300?id=1",
      description: "Buddy is a gentle soul who loves belly rubs and afternoon naps in the sun. He's great with children and other dogs, making him the perfect family companion."
    },
    {
      id: 2,
      name: "Luna",
      age: "8 months",
      breed: "Border Collie Mix",
      sex: "female",
      image: "https://placedog.net/400/300?id=2",
      description: "Luna is an energetic puppy who's always ready for an adventure. She's incredibly smart and loves learning new tricks."
    },
    {
      id: 3,
      name: "Max",
      age: "7 years",
      breed: "German Shepherd",
      sex: "male",
      image: "https://placedog.net/400/300?id=3",
      description: "Max is a distinguished senior gentleman with so much love to give. Despite his age, he still enjoys short walks and loves to be around people."
    },
    {
      id: 4,
      name: "Bella",
      age: "2 years",
      breed: "Mixed Breed",
      sex: "female",
      image: "https://placedog.net/400/300?id=4",
      description: "Bella is a sweet and affectionate dog who bonds deeply with her humans. She's housetrained and has a calm demeanor."
    },
    {
      id: 5,
      name: "Charlie",
      age: "5 years",
      breed: "Labrador Mix",
      sex: "male",
      image: "https://placedog.net/400/300?id=5",
      description: "Charlie is the definition of a loyal companion. He loves water, enjoys swimming, and has endless energy for outdoor activities."
    },
    {
      id: 6,
      name: "Daisy",
      age: "1 year",
      breed: "Poodle Mix",
      sex: "female",
      image: "https://placedog.net/400/300?id=6",
      description: "Daisy is a curious young dog with a heart full of love. She's still learning about the world and would benefit from a patient family."
    }
  ];

  const cats = [
    {
      id: 7,
      name: "Whiskers",
      age: "4 years",
      breed: "Maine Coon Mix",
      sex: "male",
      image: "https://placekitten.com/400/300?id=1",
      description: "Whiskers is a majestic and gentle giant who loves to watch birds from the window. He's calm, affectionate, and perfect for a quiet home."
    },
    {
      id: 8,
      name: "Mittens",
      age: "6 months",
      breed: "Domestic Shorthair",
      sex: "female",
      image: "https://placekitten.com/400/300?id=2",
      description: "Mittens is a playful kitten who loves chasing toy mice and cuddling in warm spots. She's social and would do well with other cats."
    },
    {
      id: 9,
      name: "Shadow",
      age: "8 years",
      breed: "Russian Blue Mix",
      sex: "male",
      image: "https://placekitten.com/400/300?id=3",
      description: "Shadow is a sophisticated senior cat who enjoys quiet companionship. He loves gentle pets and would thrive in a peaceful environment."
    },
    {
      id: 10,
      name: "Princess",
      age: "3 years",
      breed: "Persian Mix",
      sex: "female",
      image: "https://placekitten.com/400/300?id=4",
      description: "Princess is as elegant as her name suggests. She enjoys being pampered and loves to lounge in sunny spots around the house."
    },
    {
      id: 11,
      name: "Oliver",
      age: "2 years",
      breed: "Tabby Mix",
      sex: "male",
      image: "https://placekitten.com/400/300?id=5",
      description: "Oliver is an adventurous cat who loves exploring and climbing. He's friendly, curious, and would make a wonderful addition to an active household."
    },
    {
      id: 12,
      name: "Luna",
      age: "1 year",
      breed: "Calico",
      sex: "female",
      image: "https://placekitten.com/400/300?id=6",
      description: "Luna is a sweet young cat with beautiful markings. She's gentle, loves to purr, and gets along well with both humans and other pets."
    }
  ];

  const currentAnimals = animalType === 'dogs' ? dogs : cats;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F1E8' }}>
      {/* Language Selector - Top Left */}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex space-x-1">
          {['en', 'ro', 'de'].map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                currentLanguage === lang 
                  ? 'text-white' 
                  : 'text-white opacity-70 hover:opacity-100'
              }`}
              style={{ 
                backgroundColor: currentLanguage === lang ? '#2F4A3B' : 'rgba(47, 74, 59, 0.7)'
              }}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Header with Logo */}
      <header className="text-center py-8 px-4 pt-16">
        <div className="mb-6">
          <div className="w-48 h-48 mx-auto mb-4 rounded-3xl overflow-hidden shadow-lg" style={{ backgroundColor: '#F5F1E8' }}>
            <img 
              src="https://i.imgur.com/QmkG7oz.png?v=1"
              alt="Wet Little Noses Logo"
              className="w-full h-full object-cover"
              onLoad={() => console.log('Logo loaded successfully!')}
              onError={(e) => {
                console.log('Logo failed to load, trying without cache param...');
                e.target.src = "https://i.imgur.com/QmkG7oz.png?v=2";
                e.target.onerror = () => {
                  console.log('Logo still failing, using fallback');
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23F5F1E8'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='0.35em' font-size='30'%3E🐾%3C/text%3E%3C/svg%3E";
                };
              }}
            />
          </div>
        </div>
        
        <p className="text-lg mb-4 font-medium" style={{ color: '#8B6914' }}>
          {t.subtitle}
        </p>
        <p className="text-sm max-w-md mx-auto mb-6" style={{ color: '#2F4A3B' }}>
          {t.description}
        </p>

        {/* Dogs/Cats Toggle */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex rounded-full p-1" style={{ backgroundColor: '#2F4A3B' }}>
            <button
              onClick={() => setAnimalType('dogs')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                animalType === 'dogs'
                  ? 'text-white shadow-md'
                  : 'text-white opacity-70 hover:opacity-100'
              }`}
              style={{ 
                backgroundColor: animalType === 'dogs' ? '#D2691E' : 'transparent'
              }}
            >
              🐕 {t.dogs}
            </button>
            <button
              onClick={() => setAnimalType('cats')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                animalType === 'cats'
                  ? 'text-white shadow-md'
                  : 'text-white opacity-70 hover:opacity-100'
              }`}
              style={{ 
                backgroundColor: animalType === 'cats' ? '#D2691E' : 'transparent'
              }}
            >
              🐱 {t.cats}
            </button>
          </div>
        </div>
      </header>

      {/* Animals Grid */}
      <main className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {currentAnimals.map((animal) => (
              <div 
                key={animal.id}
                className="rounded-2xl shadow-lg overflow-hidden w-full max-w-sm relative"
                style={{ 
                  backgroundColor: 'white',
                  border: '4px solid #8B4513',
                  borderRadius: '20px',
                  boxShadow: `
                    0 4px 8px rgba(0,0,0,0.1),
                    inset 0 0 0 2px #CD853F,
                    inset 0 0 0 4px #8B4513,
                    0 0 0 1px #D2691E
                  `
                }}
              >
                {/* Rope texture overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    borderRadius: '16px',
                    background: `
                      repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 2px,
                        rgba(139, 69, 19, 0.1) 2px,
                        rgba(139, 69, 19, 0.1) 4px
                      )
                    `,
                    zIndex: 1
                  }}
                />

                {/* Animal Image */}
                <div className="relative overflow-hidden" style={{ zIndex: 2 }}>
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = animalType === 'dogs' ? "https://placedog.net/400/300?random" : "https://placekitten.com/400/300?random";
                    }}
                  />
                  <div 
                    className="absolute top-3 right-3 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(47, 74, 59, 0.9)' }}
                  >
                    <Heart className="w-4 h-4 text-white" fill="currentColor" />
                  </div>
                </div>

                {/* Animal Info */}
                <div className="p-4 relative" style={{ zIndex: 2 }}>
                  <h2 className="text-xl font-bold mb-3" style={{ color: '#2F4A3B' }}>
                    {animal.name}
                  </h2>
                  
                  {/* Animal Details Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" style={{ color: '#D2691E' }} />
                      <span style={{ color: '#2F4A3B' }}>{animal.age}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" style={{ color: '#D2691E' }} />
                      <span style={{ color: '#2F4A3B' }}>{t[animal.sex]}</span>
                    </div>
                    <div className="flex items-center col-span-2">
                      <Palette className="w-4 h-4 mr-2" style={{ color: '#D2691E' }} />
                      <span style={{ color: '#2F4A3B' }}>{animal.breed}</span>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="border-t pt-3" style={{ borderColor: '#F5F1E8' }}>
                    <button
                      onClick={() => toggleCard(animal.id)}
                      className="flex items-center justify-between w-full text-left focus:outline-none"
                    >
                      <span className="text-sm font-medium" style={{ color: '#2F4A3B' }}>
                        {t.about} {animal.name}
                      </span>
                      {expandedCards[animal.id] ? (
                        <ChevronUp className="w-4 h-4" style={{ color: '#D2691E' }} />
                      ) : (
                        <ChevronDown className="w-4 h-4" style={{ color: '#D2691E' }} />
                      )}
                    </button>
                    
                    {expandedCards[animal.id] && (
                      <div className="mt-2 text-sm" style={{ color: '#2F4A3B' }}>
                        {animal.description}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Donation Tile */}
            <div 
              className="rounded-2xl shadow-lg overflow-hidden w-full max-w-sm relative"
              style={{ 
                backgroundColor: 'white', 
                border: '4px dashed #D2691E',
                borderRadius: '20px',
                boxShadow: `
                  0 4px 8px rgba(0,0,0,0.1),
                  inset 0 0 0 2px #F4A460,
                  0 0 0 1px #CD853F
                `
              }}
            >
              {/* Subtle pattern overlay for donation tile */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderRadius: '16px',
                  background: `
                    radial-gradient(circle at 25% 25%, rgba(210, 105, 30, 0.05) 2px, transparent 2px),
                    radial-gradient(circle at 75% 75%, rgba(210, 105, 30, 0.05) 2px, transparent 2px)
                  `,
                  backgroundSize: '20px 20px',
                  zIndex: 1
                }}
              />
              
              <div className="p-6 text-center relative" style={{ zIndex: 2 }}>
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2F4A3B' }}>
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h2 className="text-xl font-bold mb-3" style={{ color: '#2F4A3B' }}>
                  {t.donate}
                </h2>
                
                <p className="text-sm mb-4" style={{ color: '#2F4A3B' }}>
                  {t.donateDesc}
                </p>
                
                {/* Bank Details */}
                <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: '#F5F1E8' }}>
                  <div className="flex items-center justify-center mb-2">
                    <Building2 className="w-4 h-4 mr-2" style={{ color: '#D2691E' }} />
                    <span className="text-sm font-medium" style={{ color: '#2F4A3B' }}>
                      {t.bankDetails}
                    </span>
                  </div>
                  <div className="text-xs" style={{ color: '#2F4A3B' }}>
                    <p>IBAN: RO12 BANK 1234 5678 9012 3456</p>
                    <p>Account: Wet Little Noses</p>
                  </div>
                </div>
                
                {/* PayPal */}
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#F5F1E8' }}>
                  <div className="flex items-center justify-center mb-2">
                    <CreditCard className="w-4 h-4 mr-2" style={{ color: '#D2691E' }} />
                    <span className="text-sm font-medium" style={{ color: '#2F4A3B' }}>
                      {t.paypalDetails}
                    </span>
                  </div>
                  <div className="text-xs" style={{ color: '#2F4A3B' }}>
                    <p>donate@wetlittlenoses.ro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 px-4">
        <div className="max-w-md mx-auto">
          <div className="mb-4">
            <div className="w-8 h-8 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: '#2F4A3B' }}>
              <span className="text-white text-sm">🐾</span>
            </div>
          </div>
          <p className="text-sm mb-2" style={{ color: '#2F4A3B' }}>
            {t.thankYou}
          </p>
          <p className="text-xs" style={{ color: '#8B6914' }}>
            {t.footerText}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;