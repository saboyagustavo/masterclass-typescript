import React from 'react';
interface IUser {
    id: number;
    name: string;
    email: string;
}

interface Props {
    user: IUser;
}

/* tipagem que herda propriedades específicas do react e inclui o uso da children dentro de Props */
const User: React.FC<Props> = ({ user }) => {
    return (
        <div>
            <strong>Name: </strong> {user.name} <br />
            <strong>Email: </strong> {user.email} <br /><br />
        </div>
    );
}

export default User;
