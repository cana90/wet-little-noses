import React from 'react';
import { useTranslation } from 'react-i18next';

const Donate = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-800 text-center mb-8">
        Ways to Help
      </h1>
      
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          This is the Donation page for Wet Little Noses dog fostering association. 
          Here we will provide information about how to donate and help the dogs in our care.
        </p>
        <p>
          This page is currently a placeholder and will be updated with payment options and specific needs soon.
        </p>
      </div>
    </div>
  );
};

export default Donate;