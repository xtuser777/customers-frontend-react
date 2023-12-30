import React, { createContext, ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types';

export const FormAddressContext = createContext({
  street: '',
  number: '',
  neighborhood: '',
  complement: '',
  code: '',
  city: '',
  state: '',
  /** @param {ChangeEvent<HTMLInputElement>} e */
  handleStreetChange: (e) => {},
  /** @param {ChangeEvent<HTMLInputElement>} e */
  handleNumberChange: (e) => {},
  /** @param {ChangeEvent<HTMLInputElement>} e */
  handleNeighborhoodChange: (e) => {},
  /** @param {ChangeEvent<HTMLInputElement>} e */
  handleComplementChange: (e) => {},
  /** @param {ChangeEvent<HTMLInputElement>} e */
  handleCodeChange: (e) => {},
  /** @param {ChangeEvent<HTMLInputElement>} e */
  handleCityChange: (e) => {},
  /** @param {ChangeEvent<HTMLInputElement>} e */
  handleStateChange: (e) => {},
});

function FormAddressProvider({ children }) {
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [complement, setComplement] = useState('');
  const [code, setCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  /** @param {ChangeEvent<HTMLInputElement>} e */
  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };
  /** @param {ChangeEvent<HTMLInputElement>} e */
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  /** @param {ChangeEvent<HTMLInputElement>} e */
  const handleNeighborhoodChange = (e) => {
    setNeighborhood(e.target.value);
  };
  /** @param {ChangeEvent<HTMLInputElement>} e */
  const handleComplementChange = (e) => {
    setComplement(e.target.value);
  };
  /** @param {ChangeEvent<HTMLInputElement>} e */
  const handleCodeChange = (e) => {
    setCode(e.target.value);
    if (e.target.value.length == 10) searchCode(e.target.value);
  };
  /** @param {ChangeEvent<HTMLInputElement>} e */
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  /** @param {ChangeEvent<HTMLInputElement>} e */
  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const fill = (dados) => {
    if (!('erro' in dados)) {
      //Atualiza os campos com os valores da consulta.
      setStreet(dados.logradouro);
      setNeighborhood(dados.bairro);
      setCity(dados.localidade);
      setState(dados.uf);
    } //end if.
    else {
      //CEP pesquisado não foi encontrado.
      //limpa_formulário_cep();
      alert('CEP não encontrado.');
    }
  };

  const searchCode = (code) => {
    const clearCode = code.replace(/\D/g, '');
    const valid = /^[0-9]{8}$/;

    if (valid.test(clearCode)) {
      $.ajax({
        type: 'GET',
        url: 'https://viacep.com.br/ws/' + clearCode + '/json/',
        dataType: 'jsonp',
        error: function (data) {
          console.log(data);
          alert('Opps! tivemos um erro na busca pelo CEP! Parece que os servidores estão offline!');
        },
        success: function (data) {
          fill(data);
        },
      });
    }
  };

  return (
    <FormAddressContext.Provider
      value={{
        street,
        number,
        neighborhood,
        complement,
        code,
        city,
        state,
        handleStreetChange,
        handleNumberChange,
        handleNeighborhoodChange,
        handleComplementChange,
        handleCodeChange,
        handleCityChange,
        handleStateChange,
      }}
    >
      {children}
    </FormAddressContext.Provider>
  );
}

FormAddressProvider.propTypes = {
  children: PropTypes.node,
};

export default FormAddressProvider;
