import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/authService';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await getUsers();
                setUsers(res.data);
            } catch (err : any) {
                console.error(err.response.data);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center text-gray-700">Registered Users</h2>
                <ul className="mt-4">
                    {users?.map((user:any) => (
                        <li
                            key={user._id}
                            className="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-2"
                        >
                            <span>{user.firstName} {user.lastName}</span>
                            <span className="text-gray-600">{user.email}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserList;
