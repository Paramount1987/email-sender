export const saveMessageLS = (message) => {
    let messages = [];
    const messagesStr = localStorage.getItem("messages");

    if (messagesStr) {
        messages = JSON.parse(messagesStr);
    } 
    messages.push(message);

    localStorage.setItem("messages", JSON.stringify(messages))
}

export const getMessagesFromLS = () => {
    const messagesStr = localStorage.getItem("messages");

    if (messagesStr) {
        return JSON.parse(messagesStr);
    }

    return null;
}

export const updateMessageToLS = (updatedMessage) => {
    const messagesStr = localStorage.getItem("messages");

    if (messagesStr) {
        const messages = JSON.parse(messagesStr);
        const idx = messages.findIndex(el => el.trackId === updatedMessage.trackId);
        messages.splice(idx, 1, updatedMessage);
        localStorage.setItem("messages", JSON.stringify([...messages]))
    }
}