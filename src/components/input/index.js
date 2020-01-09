import React from 'react';
import PropTypes from 'prop-types';
import { validateInput } from 'utils/validation';

import './style.scss';

 const Input = ({className, onChange, name, ...props}) => {
    const handlerChange = (ev) => {
        const {value} = ev.target;
        const error = validateInput(value, props.type);
        onChange({name, value, error});
    }

    return (
        <div className="input-wrap">
            <input
                className={`input ${className}`}
                onChange={handlerChange}
                {...props}
            />
            {
                props.error && <p className="input__error">{props.error}</p>
            }
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    callback: PropTypes.func
}

export default Input;
