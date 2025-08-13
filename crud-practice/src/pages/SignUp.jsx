import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../api/api"; // Axios instance
import { Link, useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
    username: Yup.string().min(3, "At least 3 characters").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "At least 6 characters").required("Required"),
    role: Yup.string().oneOf(["admin", "user"], "Invalid role").required("Required"),
});

export default function SignUp() {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                <Formik
                    initialValues={{ username: "", email: "", password: "", role: "" }}
                    validationSchema={SignupSchema}
                    onSubmit={async (values, { resetForm }) => {
                        try {
                            const payload = {
                                username: values.username,
                                email: values.email,
                                password: values.password,
                                role: [values.role], // convert string to array
                            };

                            const res = await api.post("/auth/signup", payload);
                            console.log("Signup Success:", res.data);

                            resetForm();
                            alert("Signup successful!");
                            navigate("/");
                        } catch (error) {
                            console.error("Signup Error:", error.response?.data || error.message);
                            alert("Signup failed. Check console for details.");
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
                                <label className="block text-sm font-medium">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
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

                            <div>
                                <label className="block text-sm font-medium">Role</label>
                                <Field
                                    as="select"
                                    name="role"
                                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                                >
                                    <option value="">Select role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </Field>
                                <ErrorMessage name="role" component="div" className="text-red-500 text-sm" />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
                            >
                                {isSubmitting ? "Signing up..." : "Sign Up"}
                            </button>
                        </Form>
                    )}
                </Formik>
                <p className="text-sm mt-4 text-center">
                    Already have an account?{" "}
                    <Link to="/" className="text-green-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
