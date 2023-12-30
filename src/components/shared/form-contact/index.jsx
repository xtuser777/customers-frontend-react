import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FieldsetCard from '../fieldset-card';
import { FormContactContext } from '../../../contexts/form-contact-context';

function FormContact({ readonly }) {
  const { phone, cellphone, email, handlePhoneChange, handleCellphoneChange, handleEmailChange } =
    useContext(FormContactContext);
  return (
    <FieldsetCard legend="Dados de contato" obrigatoryFields>
      <div className="row">
        <div className="col-sm-4">
          <label htmlFor="phone">
            Telefone
            <span className="obrigatory-flag">&nbsp;*</span>:
          </label>
          <div className="input-group expanded">
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-phone-alt" aria-hidden="true"></span>
            </div>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control input-sm expanded"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <label htmlFor="cellphone">
            Celular
            <span className="obrigatory-flag">&nbsp;*</span>:
          </label>
          <div className="input-group expanded">
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-phone" aria-hidden="true"></span>
            </div>
            <input
              type="text"
              name="cellphone"
              id="cellphone"
              className="form-control input-sm expanded"
              value={cellphone}
              onChange={handleCellphoneChange}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <label htmlFor="email">
            E-mail
            <span className="obrigatory-flag">&nbsp;*</span>:
          </label>
          <div className="input-group expanded">
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
            </div>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control input-sm expanded"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
      </div>
    </FieldsetCard>
  );
}

FormContact.propTypes = {
  readonly: PropTypes.bool,
};

export default FormContact;
