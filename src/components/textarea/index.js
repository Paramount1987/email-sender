import React from 'react';
import PropTypes from 'prop-types';
import { validateInput } from 'utils/validation';

import './style.scss';

const TextArea = ({onChange, name, ...props}) => {
    const handlerChange = (ev) => {
        const {value} = ev.target;
        const error = validateInput(value, props.type);
        onChange({name, value, error});
    }

    return (
        <div className="input-wrap">
            <textarea
                className="textarea"
                onChange={handlerChange}
                {...props}
            >
            </textarea>
            {
                props.error && <p className="input__error">{props.error}</p>
            }
        </div>
    )
}

TextArea.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    handlerChange: PropTypes.func,
}

export default TextArea;