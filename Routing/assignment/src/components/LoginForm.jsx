import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Blobs from './Blobs';

const LoginForm = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: (values) => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.find((u) => u.email === values.email);

            if (!userExists) {
                alert('User not found. Please sign up first.');
                return navigate('/signup');
            }

            const validUser = users.find(
                (u) => u.email === values.email && u.password === values.password
            );

            if (validUser) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', JSON.stringify(validUser));
                alert('Login successful!');
                navigate('/home');
            } else {
                alert('Incorrect password.');
            }
        },
    });

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#fdfaf7]">
            <Blobs />
            <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-4">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

                <input
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}

                <div className="relative">
                    <input
                        name="password"
                        type={showPassword ? 'text' : 'password'} 
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-md"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)} 
                        className="absolute right-3 top-2.5 text-sm text-blue-600"
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                {formik.touched.password && formik.errors.password && (
                    <p className="text-red-500 text-sm">{formik.errors.password}</p>
                )}

                <button
                    type="submit"
                    className="w-full bg-[#A16945] hover:bg-[#7e4929] text-white py-2 px-4 rounded-md transition duration-300"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
