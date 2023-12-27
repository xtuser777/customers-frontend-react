import { createContext, useState } from 'react';

export const ContainerContext = createContext({
  contentName: '',
  /** @param {string} newContentName */
  changeContent: (newContentName) => {},
});

// eslint-disable-next-line react/prop-types
const ContainerProvider = ({ children }) => {
  const [contentName, setContentName] = useState('page1');

  /** @param {string} newContentName */
  const changeContent = (newContentName) => {
    setContentName(newContentName);
  };

  return (
    <ContainerContext.Provider value={{ contentName, changeContent }}>
      {children}
    </ContainerContext.Provider>
  );
};

export default ContainerProvider;
