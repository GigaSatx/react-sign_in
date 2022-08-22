import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [languages, setLanguages] = useState("hindi");
  const changeLanguage = (e) => {
    setLanguages(e.target.value);
  };

  return (
    <LanguageContext.Provider value={{ languages, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
