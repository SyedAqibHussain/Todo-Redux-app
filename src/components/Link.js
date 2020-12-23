import React from 'react';

const Link = ({ active, onClick, children }) => {
  return (
    <button
      onClick={ onClick }
      disabled={ active }
      type="button"
      className="btn btn btn-success ml-4"
    >
      {children}
    </button>
  );
};

export default Link;