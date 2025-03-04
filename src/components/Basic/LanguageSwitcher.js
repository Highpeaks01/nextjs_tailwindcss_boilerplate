'use client';

import { Dropdown, DropdownMenu, DropdownItem, DropdownTrigger } from '@heroui/react';
import { FaFlag } from 'react-icons/fa';
import { useLanguage } from '../../providers/LanguageProvider';

export default function LanguageSwitcher() {
  
  const { changeLanguage } = useLanguage();

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <FaFlag />
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key="en" onPress={() => handleLanguageChange('en')}>
          English
        </DropdownItem>
        <DropdownItem key="fr" onPress={() => handleLanguageChange('fr')}>
          Français
        </DropdownItem>
        <DropdownItem key="es" onPress={() => handleLanguageChange('es')}>
          Español
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
