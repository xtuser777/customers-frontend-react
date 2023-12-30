import React, { createContext, ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types';

export const FormContactContext = createContext({
  phone: '',
  cellphone: '',
  email: '',
  /** @param {ChangeEvent<HTMLInputElement>} e */
  handlePhoneChange: (e) => {},
  /** @param {ChangeEvent<HTMLInputElement>} e */
  handleCellphoneChange: (e) => {},
  /** @param {ChangeEvent<HTMLInputElement>} e */
  handleEmailChange: (e) => {},
});

function FormContactProvider({ children }) {
  const [phone, setPhone] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [email, setEmail] = useState('');

  /** @param {ChangeEvent<HTMLInputElement>} e */
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  /** @param {ChangeEvent<HTMLInputElement>} e */
  const handleCellphoneChange = (e) => {
    setCellphone(e.target.value);
  };
  /** @param {ChangeEvent<HTMLInputElement>} e */
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <FormContactContext.Provider
      value={{
        phone,
        cellphone,
        email,
        handlePhoneChange,
        handleCellphoneChange,
        handleEmailChange,
      }}
    >
      {children}
    </FormContactContext.Provider>
  );
}

FormContactProvider.propTypes = {
  children: PropTypes.node,
};

export default FormContactProvider;
