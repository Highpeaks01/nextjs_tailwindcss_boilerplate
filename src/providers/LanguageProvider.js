'use client';

import { createContext, useContext, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';


// Create the context
const LanguageContext = createContext(undefined);

// Language Provider Component
export default function LanguageProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocale] = useState('en'); // Default language

  const changeLanguage = (lang) => {
    setLocale(lang);
    router.push(`/${lang}${pathname.replace(/^\/(en|es)/, '')}`); // Preserve path while changing language
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom Hook to use Language Context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
