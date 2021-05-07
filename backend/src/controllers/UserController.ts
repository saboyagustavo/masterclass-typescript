import { Request, Response } from 'express';
const users = [
    { id: 1, name: 'Gustavo', email: 'gustavo@example.com' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    }
};