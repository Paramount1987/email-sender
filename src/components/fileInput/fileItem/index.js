import React from 'react';
import PropTypes from 'prop-types';
import icon from './file-item.svg';
import iconTrash from './trash.svg';
import './style.scss';

const FileItem = ({file, idx, onRemove}) => {
    return <div className="file-item">
        <img
            className="file-item__ico"
            src={icon} alt=''
        />
        <span className="file-item__name">{file.name}</span>
        <button
            type="button"
            onClick={() => onRemove(idx)}
            className="file-item__btn"
        >
            <img src={iconTrash} alt="" />
            Удалить
        </button>
    </div>
}

FileItem.propTypes = {
    file: PropTypes.object,
    idx: PropTypes.number,
    onRemove: PropTypes.func,
}

export default FileItem;
