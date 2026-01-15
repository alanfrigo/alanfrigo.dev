'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, detectLanguage } from '@/lib/i18n';

type TranslationType = typeof translations.en;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_KEY = 'preferred-language';

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en');
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        // Check localStorage first
        const stored = localStorage.getItem(LANGUAGE_KEY) as Language | null;
        if (stored && (stored === 'en' || stored === 'pt')) {
            setLanguageState(stored);
        } else {
            // Detect from browser
            const detected = detectLanguage(navigator.language);
            setLanguageState(detected);
        }
        setIsHydrated(true);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem(LANGUAGE_KEY, lang);
    };

    const t = translations[language];

    // Prevent hydration mismatch by rendering with default until hydrated
    if (!isHydrated) {
        return (
            <LanguageContext.Provider value={{ language: 'en', setLanguage, t: translations.en }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
