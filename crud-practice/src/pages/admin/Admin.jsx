import { useState, useEffect } from "react";
import api from "../../api/api";


const Admin = () => {
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({ name: "", department: "", email: "" });
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [searchId, setSearchId] = useState("");
    const [editData, setEditData] = useState({ name: "", department: "", email: "" });


    const fetchEmployees = async () => {
        try {
            const res = await api.get("/employees");
            setEmployees(res.data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    const fetchEmployeeById = async () => {
        if (!searchId) return;
        try {
            const res = await api.get(`/employees/${searchId}`);
            setSelectedEmployee(res.data);
        } catch (error) {
            console.error("Error fetching employee:", error);
            alert("Employee not found");
            setSelectedEmployee(null);
        }
    };

    const handleCreate = async () => {
        try {
            await api.post("/employees", newEmployee);
            setNewEmployee({ name: "", department: "", email: "" });
            fetchEmployees();
        } catch (error) {
            console.error("Error creating employee:", error);
            alert("Failed to create employee.");
        }
    };

    const startEditing = (employee) => {
        setSelectedEmployee(employee.id);
        setEditData({
            name: employee.name,
            department: employee.department,
            email: employee.email,
        });
    };

    const handleUpdate = async (id) => {
        try {
            await api.put(`/employees/${id}`, editData);
            setSelectedEmployee(null);
            setEditData({ name: "", department: "", email: "" });
            fetchEmployees();
        } catch (error) {
            console.error("Error updating employee:", error);
            alert("Failed to update employee.");
        }
    };

    const handleDelete = async (id) => {
        try {
            if (!window.confirm("Are you sure you want to delete this employee?")) return;
            await api.delete(`/employees/${id}`);
            fetchEmployees();
        } catch (error) {
            console.error("Error deleting employee:", error);
            alert("Failed to delete employee.");
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">Admin - Dashboard</h1>

            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Create New Employee</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input
                        placeholder="Name"
                        value={newEmployee.name}
                        onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        placeholder="Department"
                        value={newEmployee.department}
                        onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        placeholder="Email"
                        value={newEmployee.email}
                        onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <button
                    onClick={handleCreate}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Create User
                </button>
            </div>


            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Find Employee by ID</h2>
                <div className="flex gap-4">
                    <input
                        placeholder="Enter Employee ID"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                        className="border p-2 rounded w-full"
                    />
                    <button
                        onClick={fetchEmployeeById}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    >
                        Search
                    </button>
                </div>

                {selectedEmployee && typeof selectedEmployee !== "string" && (
                    <div className="mt-4 p-4 border rounded bg-gray-50">
                        <h3 className="font-semibold text-lg mb-2">Employee Details</h3>
                        <p><strong>Name:</strong> {selectedEmployee.name}</p>
                        <p><strong>Department:</strong> {selectedEmployee.department}</p>
                        <p><strong>Email:</strong> {selectedEmployee.email}</p>
                    </div>
                )}
            </div>


            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">All Employees</h2>
                <table className="w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">ID</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Department</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr key={emp.id || emp._id} className="hover:bg-gray-50">
                                <td className="border p-2">{emp.id || emp._id}</td>
                                <td className="border p-2">
                                    {selectedEmployee === (emp.id || emp._id) ? (
                                        <input
                                            value={editData.name}
                                            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                            className="border p-1 rounded w-full"
                                        />
                                    ) : (
                                        emp.name
                                    )}
                                </td>
                                <td className="border p-2">
                                    {selectedEmployee === (emp.id || emp._id) ? (
                                        <input
                                            value={editData.department}
                                            onChange={(e) => setEditData({ ...editData, department: e.target.value })}
                                            className="border p-1 rounded w-full"
                                        />
                                    ) : (
                                        emp.department
                                    )}
                                </td>
                                <td className="border p-2">
                                    {selectedEmployee === (emp.id || emp._id) ? (
                                        <input
                                            value={editData.email}
                                            onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                                            className="border p-1 rounded w-full"
                                        />
                                    ) : (
                                        emp.email
                                    )}
                                </td>
                                <td className="border p-2 flex gap-2 justify-center">
                                    {selectedEmployee === (emp.id || emp._id) ? (
                                        <>
                                            <button
                                                onClick={() => handleUpdate(emp.id || emp._id)}
                                                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setSelectedEmployee(null)}
                                                className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => startEditing(emp)}
                                                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(emp.id || emp._id)}
                                                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {employees.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center p-4 text-gray-500">
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

export default Admin;