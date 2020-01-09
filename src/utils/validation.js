export const validateInput = (value, type) => {
    if (type === 'text') {
        return value.length ? null : 'Поле не может быть пустым';
    }

    if (type === 'email') {
        if (!value.length) {
            return 'Поле не может быть пустым';
        } else {
            return validateEmail(value) ? null : 'Поле заполнено не корректно';
        }
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
