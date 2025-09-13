import React, { useState, useEffect } from 'react';
import { Heart, Calendar, User, Palette } from 'lucide-react';

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [animalType, setAnimalType] = useState('dogs');

  const translations = {
    en: {
      title: "Wet Little Noses",
      wantToHelp: "Want to help?",
      helpInstructions:
        "You can leave a donation in the box by the candy bar, or follow the simple instructions below for other ways to contribute.",
      thankYou:
        "Every little bit makes a huge difference in these animals' lives. Thank you for caring!",
      psNote:
        "If you want to know more about a particular animal, contact Calin directly.",
      age: "Age",
      sex: "Sex",
      breed: "Breed",
      male: "Male",
      female: "Female",
      footerThankYou: "Thank you for supporting our foster animals!",
      footerText:
        "Every donation and share helps these beautiful souls find their forever homes.",
      dogs: "Dogs",
      cats: "Cats",
      donationText:
        "Your donation directly supports food, medical care, and safe foster homes for dogs and cats in need. Every contribution makes a real difference!",
      donationButton: "Donate Now"
    },
    ro: {
      title: "Năsucuri Umede",
      wantToHelp: "Vrei să ajuți?",
      helpInstructions:
        "Poți lăsa o donație în cutia de lângă candy bar sau urmează instrucțiunile simple de mai jos pentru alte modalități de a contribui.",
      thankYou:
        "Fiecare cent contează și face o diferență enormă în viețile acestor animale. Mulțumim că îți pasă!",
      psNote:
        "Dacă vrei să știi mai multe despre un anumit animal, contactează-l direct pe Calin.",
      age: "Vârsta",
      sex: "Sexul",
      breed: "Rasa",
      male: "Mascul",
      female: "Femelă",
      footerThankYou: "Mulțumim că sprijiniți animalele din foster!",
      footerText:
        "Fiecare donație și distribuire ajută aceste suflete frumoase să își găsească căminele pentru totdeauna.",
      dogs: "Câini",
      cats: "Pisici",
      donationText:
        "Contribuția ta asigură hrană, îngrijire medicală și un cămin sigur pentru animalele care au nevoie. Fiecare donatie face diferența!",
      donationButton: "Donează"
    }
  };

  const t = translations[currentLanguage];

  const changeLanguage = (lang) => setCurrentLanguage(lang);

  // Elena Link Component
  const ElenaLink = ({ children }) => (
    <a 
      href="https://www.facebook.com/profile.php?id=100066732424608"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:no-underline"
      style={{ color: '#1e40af' }}
    >
      {children}
    </a>
  );

  // Sample animal data
  const dogs = [
    { id: 1, name: "Scotty", age: "2 years", breed: "Mixed Breed", sex: "male", image: "/assets/dogs/Scotty.jpg" },
    { id: 2, name: "Linda", age: "2.5 years", breed: "Mix Breed", sex: "female", image: "/assets/dogs/Linda.jpg" },
    { id: 3, name: "Jolie", age: "8 months", breed: "Mix Breed", sex: "female", image: "/assets/dogs/Jolie.jpg" },
    { id: 4, name: "Molly", age: "5 years", breed: "Mix Breed", sex: "female", image: "/assets/dogs/Molly.jpg" },
    { id: 5, name: "Miruna", age: "2 years", breed: "Mix Breed", sex: "female", image: "/assets/dogs/Miruna.jpg" },
    { id: 6, name: "Alice", age: "1 year 4 and months", breed: "Mix Breed", sex: "female", image: "/assets/dogs/Alice.jpg" },
    { id: 7, name: "Lara", age: "2 years", breed: "Mix Breed", sex: "female", image: "/assets/dogs/Lara.jpg" },
    { id: 8, name: "Tessa", age: "9 years", breed: "Mix Breed", sex: "female", image: "/assets/dogs/Tessa.jpg" },
    { id: 11, name: "Patrick", age: "5 years", breed: "Mix Breed", sex: "male", image: "/assets/dogs/Patrick.jpg" }
  ];

  const cats = [
    { id: 9, name: "Portocala", age: "3 months", breed: "Domestic Shorthair", sex: "male", image: "/assets/cats/Portocala.jpg" },
    { id: 10, name: "Doro", age: "4 weeks", breed: "Domestic Shorthair", sex: "female", image: "/assets/cats/Doro.jpg" },
    { id: 12, name: "Patty", age: "4 weeks", breed: "Domestic Shorthair", sex: "female", image: "/assets/cats/Patty.jpg" },
    { id: 13, name: "Siana", age: "3 months", breed: "Domestic Shorthair", sex: "female", image: "/assets/cats/Siana.jpg" },
    { id: 14, name: "Mura", age: "3 years", breed: "Domestic Shorthair", sex: "male", image: "/assets/cats/Mura.jpg" },
    { id: 15, name: "Ofelia", age: "2 years 4 months", breed: "Domestic Shorthair", sex: "female", image: "/assets/cats/Ofelia.jpg" },
    { id: 16, name: "Coco", age: "11 months", breed: "Domestic Shorthair", sex: "female", image: "/assets/cats/Coco.jpg" }
  ];

  const currentAnimals = animalType === 'dogs' ? dogs : cats;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fcedd2' }}>
      {/* Language Selector */}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex space-x-1">
          {['en', 'ro'].map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                currentLanguage === lang ? 'text-white' : 'text-white opacity-70 hover:opacity-100'
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

      {/* Header */}
      <header className="text-center py-8 px-4 pt-16">
        <div className="mb-6">
          <div
            className="w-48 h-48 mx-auto mb-4 rounded-3xl overflow-hidden"
            style={{ backgroundColor: '#F5F1E8' }}
          >
            <img
              src="https://i.imgur.com/QmkG7oz.png?v=1"
              alt="Wet Little Noses Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-left space-y-4 mb-8">
          {/* Main Text */}
          <p className="text-sm" style={{ color: '#2F4A3B' }}>
            {currentLanguage === 'en' ? (
              <>
                <strong>Wet Little Noses</strong> is an association run by <ElenaLink>Elena</ElenaLink>, a one-woman powerhouse who dedicates her life to helping animals in need.
              </>
            ) : (
              <>
                <strong>Wet Little Noses</strong> este o asociație condusă de <ElenaLink>Elena</ElenaLink>, o super volutara care luptă zilnic pentru animalele abandonate și în nevoie.
              </>
            )}
          </p>

          {/* Elena's Work */}
          <p className="text-sm" style={{ color: '#2F4A3B' }}>
            {currentLanguage === 'en' ? (
              <>
                <ElenaLink>Elena</ElenaLink> collects donations for the Reșița public animal shelter, but her work goes far beyond that. She rescues injured and abandoned animals from the streets, responds to emergencies, nurses them back to health, and provides them with a loving foster home until they're ready for adoption.
              </>
            ) : (
              <>
                <ElenaLink>Elena</ElenaLink> colectează donații pentru adăpostul public de animale din Reșița, însă munca ei nu se oprește aici. Zi de zi intervine în situații de urgență pentru a ajuta animale, pe care le salvează de pe străzi, le îngrijește și le oferă un refugiu plin de dragoste până își găsesc o casă.
              </>
            )}
          </p>

          <div className="text-center"><span className="text-lg">🐾</span></div>

          {/* Personal Touch */}
          <p className="text-sm" style={{ color: '#2F4A3B' }}>
            {currentLanguage === 'en' ? (
              <>
                I've been working alongside <ElenaLink>Elena</ElenaLink> for several years now, and in that time I've watched her single-handedly find loving homes for dozens of animals. This project has become incredibly close to my heart, so our party felt like the perfect opportunity to share her mission, raise some much-needed funds, and hopefully help one of these sweet souls find their forever family with you!
              </>
            ) : (
              <>
               De câțiva ani îi sunt alături <ElenaLink>Elenei</ElenaLink> și am văzut personal cum a salvat și găsit familii pentru zeci de animale. Acest proiect mi-a devenit extrem de apropiat, așa că petrecerea noastră ni s-a părut ocazia perfectă să împărtășim misiunea ei, să strângem fondurile necesare și, sperăm, să ajutăm unul dintre aceste suflete drăguțe să își găsească familia pentru totdeauna!
              </>
            )}
          </p>

          <div className="text-center"><span className="text-lg">🐾</span></div>

          {/* Animal Info */}
          <p className="text-sm" style={{ color: '#2F4A3B' }}>
            {currentLanguage === 'en' ? (
              <>
                All the animals you see here are currently safe and loved in <ElenaLink>Elena's</ElenaLink> foster care. If you would consider offering one of them their forever home, each comes fully vaccinated with all necessary adoption papers ready to go.
              </>
            ) : (
              <>
                Toate animalele pe care le vedeți aici sunt în siguranță și iubite în foster-ul <ElenaLink>Elenei</ElenaLink>. Daca considerati sa oferiti un camin, fiecare animalut vine complet vaccinat cu toate actele de adopție necesare.
              </>
            )}
          </p>

          <div className="text-sm" style={{ color: '#2F4A3B' }}>
            <p className="font-bold">{t.wantToHelp}</p>
            <p>{t.helpInstructions}</p>
          </div>
          <p className="text-sm font-medium" style={{ color: '#8B6914' }}>{t.thankYou} 🐾</p>
          <p className="text-xs italic" style={{ color: '#2F4A3B' }}>
            <strong>PS:</strong> {t.psNote}
          </p>
        </div>

        {/* Dogs/Cats Toggle */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex rounded-full p-1" style={{ backgroundColor: '#2F4A3B' }}>
            <button
              onClick={() => setAnimalType('dogs')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                animalType === 'dogs' ? 'text-white shadow-md' : 'text-white opacity-70 hover:opacity-100'
              }`}
              style={{ backgroundColor: animalType === 'dogs' ? '#D2691E' : 'transparent' }}
            >
              🐕 {t.dogs}
            </button>
            <button
              onClick={() => setAnimalType('cats')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                animalType === 'cats' ? 'text-white shadow-md' : 'text-white opacity-70 hover:opacity-100'
              }`}
              style={{ backgroundColor: animalType === 'cats' ? '#D2691E' : 'transparent' }}
            >
              🐱 {t.cats}
            </button>
          </div>
        </div>
      </header>

      {/* Animals Grid */}
      <main className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-start">
            {currentAnimals.map((animal) => (
              <div
                key={animal.id}
                className="rounded-2xl shadow-lg overflow-hidden w-full max-w-sm relative h-full flex flex-col"
                style={{
                  backgroundColor: 'white',
                  border: '4px solid #8B4513',
                  borderRadius: '20px',
                  boxShadow: `0 4px 8px rgba(0,0,0,0.1), inset 0 0 0 2px #CD853F, inset 0 0 0 4px #8B4513, 0 0 0 1px #D2691E`
                }}
              >
                <div className="absolute inset-0 pointer-events-none"
                     style={{
                       borderRadius: '16px',
                       background: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(139, 69, 19, 0.1) 2px, rgba(139, 69, 19, 0.1) 4px)`,
                       zIndex: 1
                     }}
                />

                <div className="relative overflow-hidden" style={{ zIndex: 2 }}>
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-56 object-cover"
                    onError={(e) => {
                      e.target.src = animalType === 'dogs' ? 'https://placedog.net/400/300?random' : 'https://placekitten.com/400/300?random';
                    }}
                  />
                  <div className="absolute top-3 right-3 p-2 rounded-full" style={{ backgroundColor: 'rgba(47, 74, 59, 0.9)' }}>
                    <Heart className="w-4 h-4 text-white" fill="currentColor" />
                  </div>
                </div>

                <div className="p-4 relative flex-1 flex flex-col" style={{ zIndex: 2 }}>
                  <h2 className="text-xl font-bold mb-3" style={{ color: '#2F4A3B' }}>{animal.name}</h2>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Donation Card */}
      <div className="px-4 pb-8">
        <div className="max-w-2xl mx-auto">
          <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
               style={{ backgroundColor: 'white', border: '3px solid #D2691E' }}
          >
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2F4A3B' }}>
              {currentLanguage === 'en' ? (
                <>Help <ElenaLink>Elena</ElenaLink> Give Them a Second Chance</>
              ) : (
                <>Oferă-le o a doua șansă alături de <ElenaLink>Elena</ElenaLink></>
              )}
            </h3>
            <p className="text-sm mb-4" style={{ color: '#2F4A3B' }}>{t.donationText}</p>
            <a
              href="https://gofund.me/f7480eeae"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full text-white font-medium transition-all"
              style={{ backgroundColor: '#D2691E' }}
            >
              {t.donationButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;