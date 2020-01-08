import sendsayCreater from 'utils/sendSay';

const sendsay = sendsayCreater.create();

const getMessageTrack = ({subject, fromName, fromEmail, toName, toEmail, messages, attaches} ) => {
    return sendsay.request({
        "action" : "issue.send.test",
        "letter" : {
        "subject" : subject.value,
        "from.name" : fromName.value ,
        "from.email" : fromEmail.value,
        "to.name" : toName.value,
        "message": { "text" : messages.value },
        "attaches": attaches.map(file => ({
            "name": file.name,
            "content": file.content,
            "encoding": file.encoding,
        }))
        },
        "sendwhen": "test",
        "mca": [toEmail.value],
    }).then(res => res['track.id']);
}

const getMessageStatus = trackId => {
    return sendsay.request({
        "action": "track.get",
        "id": trackId,
        "session": "session",
    }).then(res =>  res.obj.status);
}

export default {
    getMessageTrack,
    getMessageStatus,
}
