export const initialFields = {
    subject: {
        name: 'subject',
        type: 'text',
        placeholder: 'Тема письма',
        value: '',
        error: null,
    },
    fromName: {
        className: 'left-radius',
        name: 'fromName',
        type: 'text',
        placeholder: 'Имя',
        value: '',
        error: null
    },
    fromEmail: {
        className: 'right-radius',
        name: 'fromEmail',
        type: 'email',
        placeholder: 'Email',
        value: '',
        error: null
    },
    toName: {
        className: 'left-radius',
        name: 'toName',
        type: 'text',
        placeholder: 'Имя',
        value: '',
        error: null
    },
    toEmail: {
        className: 'right-radius',
        name: 'toEmail',
        type: 'email',
        placeholder: 'Email',
        value: '',
        error: null
    },
    messages: {
        type: 'text',
        name: 'messages',
        placeholder: 'Текст сообщения',
        value: '',
        error: null
    },
    attaches: []
}