import React, { useState } from "react";

const Context = React.createContext("english");

export const LanguageStore = (props) => {
  const [language, setLanguage] = useState("english");

  const onLanguageChange = (language) => {
      console.log(language);
    setLanguage(language);
  };

  return (
    <Context.Provider value={{ language, onLanguageChange }}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;
