import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { validateInput } from 'utils/validation';

import { requestMessages } from 'actions/index';

import Form from './Form';
import DropZone from 'components/dropZone';

import { convertToBase64 } from 'utils/base64';
import { initialFields } from './dataFields';

const FormContainer = ({...props}) => {
    const [fields, setFields] = useState(initialFields);
    const [formError, setFormError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const maxFileSize = 5; //MB
    const maxAllFileSize = 20; //MB
    const kbytes = 1024;

    const handlerInputChange = ({name, value, error}) => {
        setFields({
            ...fields,
            [name]: {
                ...fields[name],
                value,
                error
            }
        })
    }

    const handlerAttachesChange = (files) => {
        // filter files by maxSize
        const filesLessMaxSize = files.filter(file => file.size/kbytes/kbytes < maxFileSize);

        //check maxAllFileSize
        const sumSize = [...fields.attaches, ...filesLessMaxSize].reduce((acc, file) => {
            return acc + file.size;
        }, 0)

        if (sumSize/kbytes/kbytes < maxAllFileSize) {
            const attachedFiles = filesLessMaxSize.map(file => {
                return convertToBase64(file);
            });

            Promise.all(attachedFiles).then(attaches => {
                setFields({
                    ...fields,
                    attaches: [
                        ...fields.attaches,
                        ...attaches,
                    ]
                })
              })
        }
    }

    const removeFileHandler = (idx) => {
        fields.attaches.splice(idx, 1);

        setFields({
            ...fields,
            attaches: [
                ...fields.attaches,
            ]
        })
    }

    const clearFields = () => {
        setFields(initialFields);
    }

    const sendMessage = (fields) => {
        props.requestMessages(fields);
        clearFields();
    }

    const submitHandler = (ev) => {
        ev.preventDefault();

        if (validateFields()) {
            sendMessage(fields);
        } else {
            setFormError(false);
        }
    }

    const validateFields = () => {
        let isValid = true;

        for (let prop in fields) {
            const error = validateInput(fields[prop].value, fields[prop].type);
            if (error) {
                fields[prop].error = error;
                isValid = false;
            }
        }

        setFields({...fields});

        return isValid;
    }

    useEffect(() => {
        for (let prop in fields) {
            if (fields[prop].error) {
                return setFormError(true);
            }
        }

        if (formError) {
            setFormError(false);
        }
    }, [fields, formError]);

    useEffect(() => {
        if (props.isMessageLoading) {
            setIsLoading(true);
        } else {
            setTimeout(() => setIsLoading(false), 4000);
        }
    }, [props.isMessageLoading])

    return (
        <DropZone
            dropFilesHandler={handlerAttachesChange}
        >
            <Form
                isMessageLoading={isLoading}
                currentMessage={props.currentMessage}
                fields={fields}
                formError={formError}
                submitHandler={submitHandler}
                handlerInputChange={handlerInputChange}
                handlerAttachesChange={handlerAttachesChange}
                handlerRemoveFile={removeFileHandler}
            />
        </DropZone>
    )
}

const mapStateToProps = (state) => {
    return {
        isMessageLoading: state.messages.loading,
        currentMessage: state.messages.currentMessage
    }
}

FormContainer.propTypes = {
    isMessageLoading: PropTypes.bool,
    currentMessage: PropTypes.object,
    requestMessages: PropTypes.func
}

export default connect(mapStateToProps, { requestMessages })(FormContainer);
