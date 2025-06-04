import React from "react";

function ErrorBoundary() {
    return (
        <div>
            <h1 className="h-screen flex justify-center items-center text-red-600 text-3xl font-bold">Error 404 not found!</h1>
        </div>

    );
}

export default ErrorBoundary;