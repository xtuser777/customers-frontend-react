import React from 'react';
import PropTypes from 'prop-types';

import CardTitle from '../../components/shared/card-title';
import FieldsetCard from '../../components/shared/fieldset-card';
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
        <div className="col-sm-4">
          <FormAddress />
        </div>
        <div className="col-sm-4">
          <FormContact />
        </div>
      </div>
    </>
  );
}

Customer.propTypes = {
  id: PropTypes.number,
};

export default Customer;
