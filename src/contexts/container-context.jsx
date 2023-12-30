import { createContext, useState, ReactNode } from 'react';
import { Home } from '../pages/home';

export const ContainerContext = createContext({
  //contentName: '',
  //** @param {string} newContentName */
  //changeContent: (newContentName) => {},
  content: null,
  /** @param {ReactNode} newContent */
  changeContent: (newContent) => {},
});

// eslint-disable-next-line react/prop-types
const ContainerProvider = ({ children }) => {
  //const [contentName, setContentName] = useState('page1');
  const [content, setContent] = useState(<Home />);

  // /** @param {string} newContentName */
  // const changeContent = (newContentName) => {
  //   setContentName(newContentName);
  // };

  /** @param {ReactNode} newContent */
  const changeContent = (newContent) => {
    setContent(newContent);
  };

  return (
    <ContainerContext.Provider value={{ content, changeContent }}>
      {children}
    </ContainerContext.Provider>
  );
};

export default ContainerProvider;
