import { useState, useEffect } from "react";
import api from "../../api/api";

const User = () => {
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async () => {
        try {
            const res = await api.get("/employees");
            setEmployees(res.data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-xl mt-10 border border-gray-200">

            <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
                User Dashboard
            </h1>
            <p className="text-center text-gray-500 mb-8">
                Manage and view all employees in the system.
            </p>


            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-sm text-left text-gray-600">
                    <thead className="text-xs uppercase bg-blue-600 text-white">
                        <tr>
                            <th scope="col" className="px-6 py-4">ID</th>
                            <th scope="col" className="px-6 py-4">Name</th>
                            <th scope="col" className="px-6 py-4">Department</th>
                            <th scope="col" className="px-6 py-4">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length > 0 ? (
                            employees.map((emp, index) => (
                                <tr
                                    key={emp.id}
                                    className={`border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        }`}
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900">{emp.id}</td>
                                    <td className="px-6 py-4">{emp.name}</td>
                                    <td className="px-6 py-4">{emp.department}</td>
                                    <td className="px-6 py-4">{emp.email}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="text-center py-6 text-gray-400 italic"
                                >
                                    No employees found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;