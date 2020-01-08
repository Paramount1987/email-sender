import Sendsay from 'sendsay-api';

class createSendSay {
    create() {
        if (this.sendsay) {
            return this.sendsay;
        }

       return this.sendsay = new Sendsay({
            auth: {
                login: process.env.REACT_APP_USER, 
                password: process.env.REACT_APP_PASSWORD,
            }
        });
    }
}

const sendsay = new createSendSay();

export default sendsay;
