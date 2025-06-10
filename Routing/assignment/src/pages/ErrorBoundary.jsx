import React from "react";
import NotFound from "../assets/not-found.svg"

function ErrorBoundary() {
    return (
        <div className="flex flex-col justify-center items-center gap-5 h-screen bg-[#000]">
            <img src={NotFound} alt="" className="w-50" />
            <h1 className="text-red-600 text-3xl font-bold">Error 404 not found!</h1>
        </div>

    );
}

export default ErrorBoundary;