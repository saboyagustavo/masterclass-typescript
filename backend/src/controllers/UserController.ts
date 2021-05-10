import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { id: 1, name: 'Gustavo', email: 'gustavo@example.com' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({ name: 'Gustavo Saboya', email: 'gustavo@example.com' },
            { subject: 'Greetings', body: 'Welcome to the team, Gustavo!' });

        return res.send();
    }
};