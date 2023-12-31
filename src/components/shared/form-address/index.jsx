import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FormAddressContext } from '../../../contexts/form-address-context';
import FieldsetCard from '../fieldset-card';

function FormAddress({ readonly }) {
  const {
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
  } = useContext(FormAddressContext);

  return (
    <FieldsetCard legend="Dados de endereço" obrigatoryFields>
      <div className="row">
        <div className="col-sm-3">
          <label htmlFor="code">
            CEP: <span className="obrigatory-flag">*</span>
          </label>
          <input
            type="text"
            name="code"
            id="code"
            className="form-control input-sm expanded"
            readOnly={readonly}
            value={code}
            onChange={handleCodeChange}
          />
        </div>
        <div className="col-sm-9">
          <label htmlFor="street">
            Rua / Avenida: <span className="obrigatory-flag">*</span>
          </label>
          <input
            type="text"
            name="street"
            id="street"
            className="form-control input-sm expanded"
            readOnly={readonly}
            value={street}
            onChange={handleStreetChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <label htmlFor="number">
            Número: <span className="obrigatory-flag">*</span>
          </label>
          <input
            type="text"
            name="number"
            id="number"
            className="form-control input-sm expanded"
            readOnly={readonly}
            value={number}
            onChange={handleNumberChange}
          />
        </div>
        <div className="col-sm-5">
          <label htmlFor="neighborhood">
            Bairro: <span className="obrigatory-flag">*</span>
          </label>
          <input
            type="text"
            name="neighborhood"
            id="neighborhood"
            className="form-control input-sm expanded"
            readOnly={readonly}
            value={neighborhood}
            onChange={handleNeighborhoodChange}
          />
        </div>
        <div className="col-sm-4">
          <label htmlFor="complement">Complemento:</label>
          <input
            type="text"
            name="complement"
            id="complement"
            className="form-control input-sm expanded"
            readOnly={readonly}
            value={complement}
            onChange={handleComplementChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-9">
          <label htmlFor="city">
            Cidade: <span className="obrigatory-flag">*</span>
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="form-control input-sm expanded"
            readOnly
            value={city}
            onChange={handleCityChange}
          />
        </div>
        <div className="col-sm-3">
          <label htmlFor="state">
            Estado: <span className="obrigatory-flag">*</span>
          </label>
          <input
            type="text"
            name="state"
            id="state"
            className="form-control input-sm expanded"
            readOnly
            value={state}
            onChange={handleStateChange}
          />
        </div>
      </div>
    </FieldsetCard>
  );
}

FormAddress.propTypes = {
  readonly: PropTypes.bool,
};

export default FormAddress;
