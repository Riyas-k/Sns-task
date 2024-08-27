import React, { useState } from 'react';
import { signup } from '../services/authService';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        role: 'User',
        password: '',
    });

    const { firstName, lastName, email, mobile, role, password } = formData;

    const onChange = (e : any) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e : any) => {
        e.preventDefault();
        try {
            const res = await signup(formData);
            console.log(res.data);
        } catch (err : any) {
            console.error(err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen  bg-gray-100">
            <form onSubmit={onSubmit} className="w-full bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
                <div className="mt-4">
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={onChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="First Name"
                        required
                    />
                </div>
                <div className="mt-4">
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={onChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Last Name"
                        required
                    />
                </div>
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
                        type="text"
                        name="mobile"
                        value={mobile}
                        onChange={onChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Mobile Number"
                        required
                    />
                </div>
                <div className="mt-4">
                    <select
                        name="role"
                        value={role}
                        onChange={onChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    >
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                        <option value="Guest">Guest</option>
                    </select>
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
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
