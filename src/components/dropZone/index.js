import React from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

import './style.scss';

const DropZone = ({children, dropFilesHandler}) => {
  const onDrop = acceptedFiles => dropFilesHandler(acceptedFiles);

  const {getRootProps, isDragActive} = useDropzone({
      onDrop,
      noClick: true,
      accept: "image/*, .doc, .xls, .pdf, .zip",
    })

  return (
    <div
        className="drop-zone"
        {...getRootProps()}
    >
      {children}
      {
        isDragActive ?
          <div className="drop-zone__modal">
            <div className="drop-zone__modal__inner">
              <h2 className="drop-zone__title">Бросайте файлы сюда, я ловлю</h2>
              <p className="drop-zone__p">
                Мы принимаем картинки (jpg, png, gif),
                офисные файлы (doc, xls, pdf) и zip-архивы. Размеры файла до 5 МБ
              </p>
            </div>
          </div>
          : null
      }
    </div>
  )
}

DropZone.propTypes = {
  dropFilesHandler: PropTypes.func,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ])
}

export default DropZone;
