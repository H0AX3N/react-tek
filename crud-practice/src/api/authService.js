// src/api/authService.js
import api from "./api";

// Signup
export const signupUser = async (userData) => {
    try {
        const response = await api.post("/auth/signup", userData);
        return response.data;
    } catch (error) {
        console.error("Signup Error:", error.response?.data || error.message);
        throw error;
    }
};

// Login
export const loginUser = async (credentials) => {
    try {
        const response = await api.post("/auth/signin", credentials);
        return response.data;
    } catch (error) {
        console.error("Login Error:", error.response?.data || error.message);
        throw error;
    }
};
