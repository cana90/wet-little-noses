import React from 'react';
import { useTranslation } from 'react-i18next';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event, newLang) => {
    if (newLang !== null) {
      i18n.changeLanguage(newLang);
      localStorage.setItem('preferredLanguage', newLang);
    }
  };

  return (
    <ToggleButtonGroup
      value={i18n.language}
      exclusive
      onChange={changeLanguage}
      aria-label="language"
      size="small"
      sx={{ ml: 2 }}
    >
      <ToggleButton value="en" aria-label="English">
        EN
      </ToggleButton>
      <ToggleButton value="ro" aria-label="Romanian">
        RO
      </ToggleButton>
      <ToggleButton value="de" aria-label="German">
        DE
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default LanguageSwitcher;