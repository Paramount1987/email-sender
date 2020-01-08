import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = ({disabled, children}) => {
    return (
    <button
        className="btn"
        disabled={disabled}
    >
        {children}
    </button>
    )
}

Button.propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Button;
