import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-800 text-center mb-8">
        About Wet Little Noses
      </h1>
      
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          This is the About page for Wet Little Noses dog fostering association. 
          Here we will provide information about our mission, history, and the people behind our organization.
        </p>
        <p>
          This page is currently a placeholder and will be updated with real content soon.
        </p>
      </div>
    </div>
  );
};

export default About;