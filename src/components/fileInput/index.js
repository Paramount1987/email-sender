import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import FileItem from './fileItem';

import './style.scss';
import icon from './file.svg';

const FileInput = ({changeHandler, attaches, removeFileHandler}) => {
    const inputEl = useRef(null);

    const changeFileHandler = () => {
      changeHandler( [...inputEl.current.files]);
    }

    return (
        <div className="file-input">
            {
              !!attaches.length && (
                <div className="file-input__files">
                  {
                    attaches.map((file, i) => {
                      return <FileItem
                                onRemove={removeFileHandler}
                                key={i}
                                idx={i}
                                file={file}
                            />
                    })
                  }
                </div>
              )
            }
            <img src={icon} alt='' />
            <label htmlFor="file" className="file-input__label">Прикрепить файл</label>
            <input
              ref={inputEl}
              type="file"
              accept="image/*, .doc, .xls, .pdf, .zip"
              id="file"
              name="file"
              multiple
              onChange={changeFileHandler}
            />
        </div>
    )
}

FileInput.propTypes = {
  changeHandler: PropTypes.func,
  removeFileHandler: PropTypes.func,
  attaches: PropTypes.array,
}

export default FileInput;
