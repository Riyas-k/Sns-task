import React, { useState } from 'react';
import { login } from '../services/authService';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e : any) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e : any) => {
        e.preventDefault();
        try {
            const res = await login(formData);
            console.log(res.data);
        } catch (err  :any) {
            console.error(err.response.data);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={onSubmit} className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
                <div className="mt-4">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mt-4">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Password"
                        required
                    />
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
