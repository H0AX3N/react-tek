import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Blobs from './Blobs';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
            navigate('/login');
        } else {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            setUser(currentUser);
        }
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fdfaf7]">
        <Blobs />
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                {user ? (
                    <p className="text-lg text-gray-700">
                        Welcome, <span className="font-semibold text-blue-600">{user.name}</span> 👋
                    </p>
                ) : (
                    <p className="text-gray-500">Loading...</p>
                )}
                <button
                    onClick={() => {
                        localStorage.removeItem('isLoggedIn');
                        localStorage.removeItem('currentUser');
                        navigate('/login');
                    }}
                    className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
