import React from 'react';
import PropTypes from 'prop-types';

function CardTitle({ title }) {
  return (
    <div className="card-title">
      <div className="card-title-container">
        <h4>
          <b>SGC - {title}</b>
        </h4>
      </div>
    </div>
  );
}

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardTitle;
