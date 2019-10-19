import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert.msg !== '' && (
      <div className={`text-center alert alert-${alert.type}`}>
        <i style={{ color: '#dc3545' }} className='fas fa-info-circle' />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
