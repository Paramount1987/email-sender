import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/input';
import TextArea from 'components/textarea';
import FileInput from 'components/fileInput';
import Button from 'components/button';
import Modal from 'components/modal';

import './style.scss';

const Form = ({
    fields, formError, handlerInputChange, handlerAttachesChange,
    handlerRemoveFile, submitHandler, ...props}) => {
    return (
        <form className="form" onSubmit={submitHandler}>
            <h1 className="form__title">Отправлялка сообщений</h1>

            <div>
                <label className="form__label">От кого</label>
                <div className="form-row">
                    <Input
                        onChange={handlerInputChange}
                        {...fields.fromName}
                    />
                    <Input
                        onChange={handlerInputChange}
                        {...fields.fromEmail}
                    />
                </div>
            </div>

            <div>
                <label className="form__label">Кому</label>
                <div className="form-row">
                    <Input
                        onChange={handlerInputChange}
                        {...fields.toName}
                    />
                    <Input
                        onChange={handlerInputChange}
                        {...fields.toEmail}
                    />
            </div>
            </div>

            <div>
                <label className="form__label">Тема письма</label>
                <div className="form-row">
                    <Input
                        onChange={handlerInputChange}
                        {...fields.subject}
                    />
                </div>
            </div>

            <div>
                <label className="form__label">Сообщение</label>
                <div className="form-row">
                    <TextArea
                        onChange={handlerInputChange}
                        {...fields.messages}
                    />
                </div>
            </div>

            <div>
                <FileInput
                    changeHandler={handlerAttachesChange}
                    attaches={fields.attaches}
                    removeFileHandler={handlerRemoveFile}
                />
            </div>
            <Button disabled={formError}>Отправить</Button>

            {
                props.isMessageLoading ?
                <Modal>
                    <h2 className="modal__title">
                        Сообщение поставлено в очередь на отправку
                    </h2>
                    <p>
                        Совсем скоро сообщение вылетит из сервера,
                        и будет двигаться в сторону почты получателя
                        «{props.currentMessage.toEmail.value}» со скоростью электронов.
                    </p>
                </Modal>
                :null
            }
        </form>
    )
}

Form.propTypes = {
    fields: PropTypes.object,
    formError: PropTypes.bool,
    handlerAttachesChange: PropTypes.func,
    handlerInputChange: PropTypes.func,
    handlerRemoveFile: PropTypes.func,
    submitHandler: PropTypes.func,
}

export default Form;
