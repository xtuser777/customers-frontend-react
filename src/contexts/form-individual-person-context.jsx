import React, { createContext, useState, ChangeEvent } from 'react';
import PropTypes from 'prop-types';

export const FormIndividualPersonContext = createContext({
  name: '',
  docuemnt: '',
  birth: '',
  /** @param {ChangeEvent<HTMLInputElement>} e */
  handleNameChange: (e) => {},
  /** @param {ChangeEvent<HTMLInputElement>} e */
  handleDocumentChange: (e) => {},
  /** @param {ChangeEvent<HTMLInputElement>} e */
  handleBirthChange: (e) => {},
});

function FormIndividualPersonProvider({ children }) {
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [birth, setBirth] = useState('');

  /** @param {ChangeEvent<HTMLInputElement>} e */
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  /** @param {ChangeEvent<HTMLInputElement>} e */
  const handleDocumentChange = (e) => {
    setDocument(e.target.value);
  };

  /** @param {ChangeEvent<HTMLInputElement>} e */
  const handleBirthChange = (e) => {
    setBirth(e.target.value);
  };

  return (
    <FormIndividualPersonContext.Provider
      value={{
        name,
        document,
        birth,
        handleNameChange,
        handleDocumentChange,
        handleBirthChange,
      }}
    >
      {children}
    </FormIndividualPersonContext.Provider>
  );
}

FormIndividualPersonProvider.propTypes = {
  children: PropTypes.node,
};

export default FormIndividualPersonProvider;
