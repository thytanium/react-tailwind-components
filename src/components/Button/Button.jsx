import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, isDisabled, onClick, scheme, type, variant }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  scheme: PropTypes.oneOf(['solid', 'outline']),
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  children: null,
  isDisabled: false,
  onClick: () => {},
  scheme: 'solid',
  type: 'button',
  variant: 'primary',
};

export default Button;
