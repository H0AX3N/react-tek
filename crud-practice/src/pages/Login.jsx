// import React from "react";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../api/api"; // Axios instance
import { Link, useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
});

export default function Login() {
    const navigate = useNavigate()
    const [error, setError] = useState("");
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={LoginSchema}
                    onSubmit={async (values, { resetForm }) => {
                        try {
                            const res = await api.post("/auth/signin", values);
                            console.log("Login Success:", res.data);

                            // Save token and user ID from the response
                            if (res.data?.accessToken) {
                                localStorage.setItem("authToken", res.data.accessToken);
                                localStorage.setItem("userId", res.data.id);
                                localStorage.setItem("username", res.data.username);
                                localStorage.setItem("email", res.data.email);
                                localStorage.setItem("role", res.data.roles);
                            }

                            resetForm();
                            alert("Login successful!");
                            // navigate("/dashboard");
                            const role = localStorage.getItem("role");
                            if(role === 'ROLE_ADMIN') {
                                navigate('/admin')
                            }
                            else if(role === 'ROLE_USER') {
                                navigate('/user')
                            }
                            else {
                                setError('Unknown role. Please contact support.')
                            }
                        } catch (error) {
                            console.error("Login Error:", error.response?.data || error.message);
                            alert("Login failed. Check username/password.");
                        }

                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Username</label>
                                <Field
                                    name="username"
                                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                                />
                                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg"
                            >
                                Login
                            </button>
                        </Form>
                    )}
                </Formik>
                <p className="text-sm mt-4 text-center">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-600 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}



