import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FieldsetCard from '../fieldset-card';
import { FormIndividualPersonContext } from '../../../contexts/form-individual-person-context';

function FormIndividualPerson({ readonly }) {
  const { name, document, birth, handleNameChange, handleDocumentChange, handleBirthChange } =
    useContext(FormIndividualPersonContext);
  return (
    <FieldsetCard legend="Dados pessoais" obrigatoryFields>
      <div className="row">
        <div className="col-sm-8">
          <label htmlFor="name">
            Nome: <span className="obrigatory-flag">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control input-sm expanded"
            placeholder="Insira seu nome completo."
            readOnly={readonly}
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-sm-2">
          <label htmlFor="document">
            CPF: <span className="obrigatory-flag">*</span>
          </label>
          <input
            type="text"
            name="document"
            id="document"
            className="form-control input-sm expanded"
            readOnly={readonly}
            value={document}
            onChange={handleDocumentChange}
          />
        </div>
        <div className="col-sm-2">
          <label htmlFor="birth">
            Nascimento: <span className="obrigatory-flag">*</span>
          </label>
          <input
            type="date"
            name="birth"
            id="birth"
            className="form-control input-sm expanded"
            readOnly={readonly}
            value={birth}
            onChange={handleBirthChange}
          />
        </div>
      </div>
    </FieldsetCard>
  );
}

FormIndividualPerson.propTypes = {
  readonly: PropTypes.bool,
};

export default FormIndividualPerson;
