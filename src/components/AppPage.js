// src/components/AppPage.js
import React from 'react';
import Calculator from './Calculator';

const AppPage = () => {
    return (
        <div className="container">
            <h2>Калькулятор</h2>
            <div className="btn-group mb-3" role="group">
                <button type="button" className="btn btn-secondary" id="standardMode">Звичайний</button>
                <button style={{marginLeft: "15px"}} type="button" className="btn btn-secondary" id="programmerMode">Режим для програміста</button>
            </div>
            <Calculator />
        </div>
    );
};

export default AppPage;