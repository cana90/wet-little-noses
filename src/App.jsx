import React, { useState } from 'react';
import { Heart, Calendar, User, Palette, CreditCard, Building2 } from 'lucide-react';

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [animalType, setAnimalType] = useState('dogs');

  const translations = {
    en: {
      title: "Wet Little Noses",
      mainText: "**Wet Little Noses** is an association run by Elena, a one-woman powerhouse who dedicates her life to helping animals in need.",
      elenasWork: "Elena collects donations for the Reșița public animal shelter, but her work goes far beyond that. She rescues injured and abandoned animals from the streets, responds to emergencies, nurses them back to health, and provides them with a loving foster home until they're ready for adoption.",
      personalTouch: "Over the years, Elena's incredible work has touched our hearts deeply. We thought our party would be the perfect opportunity to raise awareness about her mission, help collect some desperately needed funds, and who knows – maybe help one of these adorable furballs listed below find their forever home with you!",
      animalInfo: "All the animals you see here are currently safe and loved in Elena's foster care. Each comes fully vaccinated with all necessary adoption papers ready to go.",
      wantToHelp: "Want to help?",
      helpInstructions: "You can leave a donation in the box by the candy bar, or follow the simple instructions below for other ways to contribute.",
      thankYou: "Every little bit makes a huge difference in these animals' lives. Thank you for caring!",
      psNote: "If you want to know more about a particular animal, contact Calin directly.",
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
      footerThankYou: "Thank you for supporting our foster animals!",
      footerText: "Every donation and share helps these beautiful souls find their forever homes.",
      dogs: "Dogs",
      cats: "Cats"
    },
    ro: {
      title: "Năsuțuri Umede", 
      mainText: "**Năsuțuri Umede** este o asociație condusă de Elena, o forță de unul singur care își dedică viața ajutorării animalelor în nevoie.",
      elenasWork: "Elena colectează donații pentru adăpostul public de animale din Reșița, dar munca ei depășește cu mult acest lucru. Ea salvează animale rănite și abandonate de pe străzi, răspunde la urgențe, le îngrijește până se vindecă și le oferă o casă de plasament plină de dragoste până sunt gata pentru adopție.",
      personalTouch: "De-a lungul anilor, munca incredibilă a Elenei ne-a atins inimile profund. Am gândit că petrecerea noastră ar fi oportunitatea perfectă să creștem gradul de conștientizare asupra misiunii ei, să ajutăm la colectarea unor fonduri dispereat de necesare și cine știe – poate să ajutăm una dintre aceste mingi de blană adorabile de mai jos să își găsească căminul pentru totdeauna cu voi!",
      animalInfo: "Toate animalele pe care le vedeți aici sunt în siguranță și iubite în grija de plasament a Elenei. Fiecare vine complet vaccinat cu toate actele de adopție necesare gata.",
      wantToHelp: "Vrei să ajuți?",
      helpInstructions: "Poți lăsa o donație în cutia de lângă candy bar sau urmează instrucțiunile simple de mai jos pentru alte modalități de a contribui.",
      thankYou: "Fiecare cent contează și face o diferență enormă în viețile acestor animale. Mulțumim că îți pasă!",
      psNote: "Dacă vrei să știi mai multe despre un anumit animal, contactează-l direct pe Calin.",
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
      footerThankYou: "Mulțumim că sprijiniți animalele noastre din plasament!",
      footerText: "Fiecare donație și distribuire ajută aceste suflete frumoase să își găsească căminele pentru totdeauna.",
      dogs: "Câini",
      cats: "Pisici"
    },
    de: {
      title: "Feuchte Kleine Nasen",
      mainText: "**Feuchte Kleine Nasen** ist ein Verein, der von Elena geleitet wird, einer Ein-Frau-Macht, die ihr Leben der Hilfe für Tiere in Not widmet.",
      elenasWork: "Elena sammelt Spenden für das öffentliche Tierheim in Reșița, aber ihre Arbeit geht weit darüber hinaus. Sie rettet verletzte und verlassene Tiere von der Straße, reagiert auf Notfälle, pflegt sie gesund und bietet ihnen ein liebevolles Pflegeheim, bis sie zur Adoption bereit sind.",
      personalTouch: "Über die Jahre hat uns Elenas unglaubliche Arbeit tief berührt. Wir dachten, unsere Party wäre die perfekte Gelegenheit, das Bewusstsein für ihre Mission zu schärfen, dringend benötigte Gelder zu sammeln und wer weiß – vielleicht einem dieser adorablen Fellknäuel unten ihr Zuhause für immer mit Ihnen zu finden!",
      animalInfo: "Alle Tiere, die Sie hier sehen, sind sicher und geliebt in Elenas Pflege. Jedes kommt vollständig geimpft mit allen notwendigen Adoptionspapieren bereit.",
      wantToHelp: "Möchten Sie helfen?",
      helpInstructions: "Sie können eine Spende in der Box bei der Candy Bar hinterlassen oder den einfachen Anweisungen unten für andere Möglichkeiten zu helfen folgen.",
      thankYou: "Jeder kleine Betrag macht einen großen Unterschied im Leben dieser Tiere. Danke, dass Ihnen das wichtig ist!",
      psNote: "Wenn Sie mehr über ein bestimmtes Tier wissen möchten, kontaktieren Sie Calin direkt.",
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
      footerThankYou: "Danke, dass Sie unsere Pflegetiere unterstützen!",
      footerText: "Jede Spende und jedes Teilen hilft diesen schönen Seelen, ihr Zuhause für immer zu finden.",
      dogs: "Hunde",
      cats: "Katzen"
    }
  };

  const t = translations[currentLanguage];

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  // Sample animal data with dogs and cats
  const dogs = [
    {
      id: 1,
      name: "Scotty",
      age: "2 years",
      breed: "Mixed Breed",
      sex: "male",
      image: "/assets/dogs/Scotty.jpg"
    },
    {
      id: 2,
      name: "Linda",
      age: "2.5 years",
      breed: "Mix Breed",
      sex: "female",
      image: "/assets/dogs/Linda.jpg"
      
    },
    {
      id: 3,
      name: "Jolie",
      age: "8 months",
      breed: "Mix Breed",
      sex: "female",
      image: "/assets/dogs/Jolie.jpg"
    },
    {
      id: 4,
      name: "Molly",
      age: "5 years",
      breed: "Mix Breed",
      sex: "female",
      image: "/assets/dogs/Molly.jpg"
    },
    {
      id: 5,
      name: "Miruna",
      age: "2 years",
      breed: "Mix Breed",
      sex: "female",
      image: "/assets/dogs/Miruna.jpg"
    },
    {
      id: 6,
      name: "Alice",
      age: "1 year 4 and months",
      breed: "Mix Breed",
      sex: "female",
      image: "/assets/dogs/Alice.jpg"
    },
    {
      id: 7,
      name: "Lara",
      age: "2 years",
      breed: "Mix Breed",
      sex: "female",
      image: "/assets/dogs/Lara.jpg"
    }, 
    {
      id: 8,
      name: "Tessa",
      age: "9 years",
      breed: "Mix Breed",
      sex: "female",
      image: "/assets/dogs/Tessa.jpg"
    },
    {
      id: 11,
      name: "Patrick",
      age: "5 years",
      breed: "Mix Breed",
      sex: "male",
      image: "/assets/dogs/Patrick.jpg"
    }
  ];

  const cats = [
    {
      id: 9,
      name: "Portocala",
      age: "3 months",
      breed: "Domestic Shorthair",
      sex: "male",
      image: "/assets/cats/Portocala.jpg"
    },
    {
      id: 10,
      name: "Doro",
      age: "4 weeks",
      breed: "Domestic Shorthair",
      sex: "female",
      image: "/assets/cats/Doro.jpg"
    },
    {
      id: 12,
      name: "Patty",
      age: "4 weeks",
      breed: "Domestic Shorthair",
      sex: "female",
      image: "/assets/cats/Patty.jpg"
    },
    {
      id: 13,
      name: "Siana",
      age: "3 months",
      breed: "Domestic Shorthair",
      sex: "female",
      image: "/assets/cats/Siana.jpg"
    },
    {
      id: 14,
      name: "Mura",
      age: "3 years",
      breed: "Domestic Shorthair",
      sex: "male",
      image: "/assets/cats/Mura.jpg"
    },{
      id: 15,
      name: "Ofelia",
      age: "2 years 4 months",
      breed: "Domestic Shorthair",
      sex: "female",
      image: "/assets/cats/Ofelia.jpg"
    },{
      id: 16,
      name: "Coco",
      age: "11 months",
      breed: "Domestic Shorthair",
      sex: "female",
      image: "/assets/cats/Coco.jpg"
    },
    
  ];

  const currentAnimals = animalType === 'dogs' ? dogs : cats;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fcedd2' }}>
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
          <div className="w-48 h-48 mx-auto mb-4 rounded-3xl overflow-hidden" style={{ backgroundColor: '#F5F1E8' }}>
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
        
        {/* New Wedding Party Description */}
        <div className="max-w-2xl mx-auto text-left space-y-4 mb-8">
          <p className="text-sm" style={{ color: '#2F4A3B' }}>
            <strong>{t.mainText.replace(/\*\*(.*?)\*\*/g, '$1')}</strong>
          </p>
          
          <p className="text-sm" style={{ color: '#2F4A3B' }}>
            {t.elenasWork}
          </p>

          <div className="text-center">
            <span className="text-lg">🐾</span>
          </div>

          <p className="text-sm" style={{ color: '#2F4A3B' }}>
            {t.personalTouch}
          </p>

          <div className="text-center">
            <span className="text-lg">🐾</span>
          </div>

          <p className="text-sm" style={{ color: '#2F4A3B' }}>
            {t.animalInfo}
          </p>

          <div className="text-sm" style={{ color: '#2F4A3B' }}>
            <p className="font-bold">{t.wantToHelp}</p>
            <p>{t.helpInstructions}</p>
          </div>

          <p className="text-sm font-medium" style={{ color: '#8B6914' }}>
            {t.thankYou} 🐾
          </p>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-start">
            {currentAnimals.map((animal) => (
              <div 
                key={animal.id}
                className="rounded-2xl shadow-lg overflow-hidden w-full max-w-sm relative h-full flex flex-col"
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
                    className="w-full h-56 object-cover"
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
                <div className="p-4 relative flex-1 flex flex-col" style={{ zIndex: 2 }}>
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
                </div>
              </div>
            ))}
            
            {/* Donation Tile */}
            <div 
              className="rounded-2xl shadow-lg overflow-hidden w-full max-w-sm relative h-full flex flex-col"
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
              
              <div className="p-6 text-center relative flex-1 flex flex-col justify-center" style={{ zIndex: 2 }}>
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
                    <p>IBAN: AT263200000013245741</p>
                    <p>Account: Calin Nastase</p>
                    <p>Refference: Wet Little Noses</p>
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
                    <p>calinn@duck.com</p>
                    <p>Refference: Wet Little Noses</p>
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
            {t.footerThankYou}
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