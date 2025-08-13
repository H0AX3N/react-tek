import React, { useEffect, useState } from "react";
import api from "../api/api"; // Axios instance

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [employees, setEmployees] = useState([]);
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    useEffect(() => {
        api.get('/employees')
            .then(res => setEmployees(res.data))
            .catch(err => {
                console.log('Failed to fetch employees: ', err);
                if (err.response?.status === 401) {
                    alert('Unauthorized. Please log in again')
                }
            })
    }, [])
    console.log("UserId from localStorage:", userId);


    return (
        <div className="flexitems-center bg-gray-100">
            <div className="rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Employees</h2>
                <div className="grid grid-cols-3 gap-4">
                    {employees.map(emp => (
                        <div key={emp.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
                            <p><strong>ID:</strong> {emp.id}</p>
                            <p><strong>Name:</strong> {emp.name}</p>
                            <p><strong>Dept:</strong> {emp.department}</p>
                            <p><strong>Email:</strong> {emp.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
