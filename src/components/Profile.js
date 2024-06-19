// src/components/Profile.js
import React from 'react';

const Profile = () => {
    return (
        <div className="container">
            <h2>Профіль користувача</h2>
            <p><strong>Ім'я:</strong> Ім'я користувача</p>
            <p><strong>Електронна пошта:</strong> email@example.com</p>
            <p><strong>Дата народження:</strong> 01.01.1990</p>
            <p><strong>Стать:</strong> Чоловік</p>
        </div>
    );
};

export default Profile;