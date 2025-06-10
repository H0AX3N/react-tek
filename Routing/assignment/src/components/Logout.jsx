import React from 'react';

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        window.location.href = '/login'; // or use navigate()
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
