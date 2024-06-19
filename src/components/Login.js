// src/components/Login.js
import React from 'react';

const Login = () => {
    return (
        <div className="container">
            <h2>Авторизація</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Електронна пошта</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" className="form-control" id="password" required />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Увійти</button>
            </form>
            <a style={{color: "white"}} href="/register">Зареєструватись</a>
            <br />
            <a style={{color: "white"}} href="/">Перейти до додатку</a>
        </div>
    );
};

export default Login;