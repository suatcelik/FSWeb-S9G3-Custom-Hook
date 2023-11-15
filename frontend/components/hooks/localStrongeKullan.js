import React, { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const readFromLS = () => {
    return JSON.parse(localStorage.getItem(key));
  };
  const [value, setValue] = useState(() => {
    const lsOrDie = readFromLS() !== null ? readFromLS() : initialValue;
    localStorage.setItem(key, JSON.stringify(lsOrDie));
    return lsOrDie;
  });

  const writeToLS = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, writeToLS];
};
