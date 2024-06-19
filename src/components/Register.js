// src/components/Register.js
import React from 'react';

const Register = () => {
    return (
        <div className="container">
            <h2>Реєстрація</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Ім'я</label>
                    <input type="text" className="form-control" id="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Електронна пошта</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="birthdate">Дата народження</label>
                    <input type="date" className="form-control" id="birthdate" required />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Стать</label>
                    <select className="form-control" id="gender" required>
                        <option>Чоловік</option>
                        <option>Жінка</option>
                        <option>Інше</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" className="form-control" id="password" required />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Зареєструватися</button>
            </form>
            <a style={{color: "white"}} href="/login">Авторизуватись</a>
        </div>
    );
};

export default Register;