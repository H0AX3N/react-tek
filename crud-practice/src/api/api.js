import axios from "axios";

const api = axios.create({
    baseURL: "http://10.10.50.96:8080/api", // Swagger API base URL
    headers: {
        "Content-Type": "application/json",
    },
});

// Optional: Add interceptors for auth tokens
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken");
    // const token = localStorage.getItem("token");
    console.log("Token sent:", token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
