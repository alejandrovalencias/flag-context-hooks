import React from "react";
import LanguageContext from "./../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const Button = () => {
  const renderSubmit = ({language}) => {
    return language === "english" ? "Submit" : "Voorleggen";
  };

  const renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  return (
    <ColorContext.Consumer>
      {(color) => renderButton(color)}
    </ColorContext.Consumer>
  );
};

export default Button;
