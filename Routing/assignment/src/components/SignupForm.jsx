import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Blobs from './Blobs';

const SignupForm = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().min(6, 'Min 6 characters').required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Please confirm your password'),
        }),
        onSubmit: (values) => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const exists = users.find((u) => u.email === values.email);
            if (exists) return alert('User already exists!');

            users.push({
                name: values.name,
                email: values.email,
                password: values.password,
            });

            localStorage.setItem('users', JSON.stringify(users));
            alert('Signup successful! Please login.');

            navigate('/login');
        },
    });

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#fdfaf7]">
            <Blobs />
            <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-4">
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

                <div>
                    <input
                        name="name"
                        placeholder="Name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                    )}
                </div>

                <div>
                    <input
                        name="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                    )}
                </div>

                <div>
                    <div className="relative">
                        <input
                            name="password"
                            type={showPassword ? 'text' : 'password'} 
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                        <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                    )}
                </div>

                <div className="relative">
                    <input
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-2.5 text-sm text-blue-600"
                    >
                        {showConfirmPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>
                )}

                <button
                    type="submit"
                    className="w-full text-white py-2 px-4 rounded-md bg-[#A16945] hover:bg-[#7e4929] transition ease-in-out duration-300"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
