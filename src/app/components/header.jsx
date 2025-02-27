"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const authStatus = localStorage.getItem("isAuthenticated") === "true";
        setIsAuthenticated(authStatus);
        if (authStatus) {
            setUsername(localStorage.getItem("username") || "");
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("username");
        setIsAuthenticated(false);
        router.push("/auth");
    };

    return (
        <div className="bg-blue-500 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">Система колледжа</h1>
            {isAuthenticated ? (
                <div className="flex items-center gap-4">
                    <p>Вы вошли как: {username}</p>
                    <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
                        Выйти
                    </button>
                </div>
            ) : (
                <p>Вы не авторизованы</p>
            )}
        </div>
    );
}
