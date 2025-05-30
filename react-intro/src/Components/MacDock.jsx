import React from "react";

const apps = [
    { name: "Finder", icon: "/icons/finder.png" },
    { name: "Safari", icon: "/icons/safari.png" },
    { name: "VS Code", icon: "/icons/vscode.png" },
    { name: "Terminal", icon: "/icons/terminal.png" },
    { name: "Photos", icon: "/icons/photos.png" },
];

export default function MacDock() {
    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md border border-white/20 px-4 py-2 rounded-3xl shadow-lg flex space-x-4 z-50">
            {apps.map((app, index) => (
                <div
                    key={index}
                    className="transition-transform duration-200 hover:scale-125"
                >
                    <img
                        src={}
                        alt={app.name}
                        className="w-12 h-12 object-contain"
                        title={app.name}
                    />
                </div>
            ))}
        </div>
    );
}
