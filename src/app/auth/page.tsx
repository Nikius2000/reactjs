"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LOGIN_CREDENTIALS = {
  username: "Admin",
  password: "pswrd",
};

export default function AuthPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (username === LOGIN_CREDENTIALS.username && password === LOGIN_CREDENTIALS.password) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("username", username);
      router.push("/");
    } else {
      setError("Неверный логин или пароль");
    }
  };

  if (loading) return <div className="flex h-screen items-center justify-center text-white bg-gray-900">Загрузка...</div>;

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <div className="p-6 bg-gray-800 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Авторизация</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Логин"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-600 bg-gray-700 rounded mb-2 text-white"
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-600 bg-gray-700 rounded mb-2 text-white"
          />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white p-2 rounded">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}