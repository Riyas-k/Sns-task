import axios from 'axios';
 
export const API_URL = 'http://localhost:5000/api/auth/';

export const signup = async (userData:any) => {    
    return await axios.post(API_URL + 'signup', userData);
};

export const login = async (userData:any) => {
    return await axios.post(API_URL + 'login', userData);
};

export const getUsers = async () => {
    return await axios.get(API_URL + 'users');
};
