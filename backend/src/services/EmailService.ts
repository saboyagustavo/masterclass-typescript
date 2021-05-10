interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

/*data transfer object - ddd */
interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

/*especificando méotodos e propriedades a serem implementados em uma classe*/
interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
    sendMail({ to, message }: IMessageDTO) {
        console.log(`\n Mail sent to ${to.name}: ${message.subject}`);
    }
}


export default EmailService;