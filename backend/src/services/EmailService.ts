interface ImailTo {
    name: string;
    email: string;
}

interface ImailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

class EmailService {
    sendMail(to: ImailTo, message: ImailMessage) {
        console.log(`\n Mail sent to ${to.name}: ${message.subject}`);
    }
}
export default EmailService;