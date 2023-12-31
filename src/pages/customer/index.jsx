import React from 'react';
import PropTypes from 'prop-types';

import CardTitle from '../../components/shared/card-title';
import FormIndividualPerson from '../../components/shared/form-individual-person';
import FormAddress from '../../components/shared/form-address';
import FormContact from '../../components/shared/form-contact';

function Customer({ id }) {
  return (
    <>
      <CardTitle title={id && id > 0 ? 'Detalhes do cliente' : 'Cadastrar novo cliente'} />

      <div className="row">
        <div className="col-sm-4">
          <FormIndividualPerson />
        </div>
        <div className="col-sm-5">
          <FormAddress />
        </div>
        <div className="col-sm-3">
          <FormContact />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-2">
          <a role="button" id="back" className="btn btn-sm btn-default expanded" href="#">
            VOLTAR
          </a>
        </div>
        <div className="col-sm-6"></div>
        <div className="col-sm-2">
          <button
            name="clear"
            id="clear"
            className="btn btn-sm btn-primary expanded"
            onClick={() => {}}
          >
            LIMPAR
          </button>
        </div>
        <div className="col-sm-2">
          <button
            name="clear"
            id="clear"
            className="btn btn-sm btn-success expanded"
            onClick={() => {}}
          >
            SALVAR
          </button>
        </div>
      </div>
    </>
  );
}

Customer.propTypes = {
  id: PropTypes.number,
};

export default Customer;
