import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { useAuth } from '../../hooks/useAuth';
import "../../styles/colors.css";
import "../../styles/universal.css";
import "../../pages/login/style.css";

const Login = () => {
    const { login, error, loading, isAuthenticated } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <div className="dark">
            <Navbar />
            <div className="login-section">
                <img className="logo" src="../../images/logo.webp" alt="GuitarLink Logo" />
                <div className="login-box">
                    <p className="login-title">Увійдіть</p>
                    <p className="login-subtitle">щоб почати навчання</p>
                    <form onSubmit={handleLogin} className="form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Link className="register" to="/register">
                            Немає акаунта?
                        </Link>
                        <input
                            id="submit"
                            type="submit"
                            value={loading ? "Завантаження..." : "Увійти"}
                            disabled={loading}
                        />
                        {error && <p>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
