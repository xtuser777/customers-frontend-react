import React from 'react';
import PropTypes from 'prop-types';

function FieldsetCard({ legend, obrigatoryFields, children }) {
  return (
    <div className="fieldset-card">
      <div className="fieldset-card-legend">{legend}</div>
      <div className="fieldset-card-container">
        {children}
        {obrigatoryFields ? (
          <div className="fieldset-card-legend-obg">* Campos de preenchimento obrigatório.</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

FieldsetCard.propTypes = {
  legend: PropTypes.string.isRequired,
  obrigatoryFields: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default FieldsetCard;
