// LanguageSelector.tsx
import React, { JSX } from 'react';
import { GeorgianFlag, RussianFlag, UsaFlag } from './Flags';


interface Language {
    code: string;
    name: string;
}

const FlagMap: Record<string, JSX.Element> = {
    ka: <GeorgianFlag />,
    ru: <RussianFlag />,
    en: <UsaFlag />,
};

interface Props {
    current: Language;
    options: Language[];
    onSelect: (lang: Language) => void;
    open: boolean;
    toggle: () => void;
}

export const LanguageSelector: React.FC<Props> = ({
    current, options, onSelect, open, toggle
}) => (
    <div className="relative">
        <button onClick={toggle} className="flex items-center space-x-2">
            {FlagMap[current.code]}
            <span>{current.name}</span>
        </button>
        {open && (
            <div className="absolute right-0 mt-2 bg-black rounded shadow-lg">
                {options.map(l => (
                    <button
                        key={l.code}
                        onClick={() => onSelect(l)}
                        className="flex items-center px-4 py-2 hover:bg-gray-700 w-full text-left"
                    >
                        {FlagMap[l.code]}
                        <span className="ml-2">{l.name}</span>
                    </button>
                ))}
            </div>
        )}
    </div>
);


// Usage in header:
{/* <LanguageSelector
    current={lang}
    options={LANGUAGES}
    open={dropdown}
    toggle={toggleDropdown}
    onSelect={changeLanguage} */}
///>
