import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import "../../styles/colors.css";
import "../../styles/universal.css";
import "./style.css";

const Register = () => {
    const { register, error, loading, isAuthenticated } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        await register(email, password);
    };

    return (
        <div className="dark">
            <Navbar />
            <div className="register-section">
                <img className="logo" src="../../images/logo.webp" alt="GuitarLink Logo" />
                <div className="register-box">
                    <p className="register-title">Зареєструйтесь</p>
                    <p className="register-subtitle">щоб почати навчання</p>
                    <form onSubmit={handleRegister} className="form">
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
                        <Link className="login" to="/login">
                            Вже є акаунт?
                        </Link>
                        <input
                            id="submit"
                            type="submit"
                            value={loading ? "Завантаження..." : "Зареєструватись"}
                            disabled={loading}
                        />
                        {error && <p>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
