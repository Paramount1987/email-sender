import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Modal = ({children}) => {

    return (
        <div className="modal">
            <div className="modal__inner">
                {children}
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Modal;
