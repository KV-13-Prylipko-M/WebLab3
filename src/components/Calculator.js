// src/components/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('');
    const [pendingValue, setPendingValue] = useState('');
    const [operation, setOperation] = useState('');

    const appendNumber = (number) => {
        setDisplayValue(displayValue + number);
    };

    const handleOperation = (op) => {
        if (displayValue === '') return;
        if (pendingValue !== '') {
            calculate();
        }
        setPendingValue(displayValue);
        setDisplayValue('');
        setOperation(op);
    };

    const calculate = () => {
        if (pendingValue === '' || displayValue === '' || operation === '') return;
        let result;
        switch (operation) {
            case '+':
                result = parseFloat(pendingValue) + parseFloat(displayValue);
                break;
            case '-':
                result = parseFloat(pendingValue) - parseFloat(displayValue);
                break;
            case '*':
                result = parseFloat(pendingValue) * parseFloat(displayValue);
                break;
            case '/':
                result = parseFloat(pendingValue) / parseFloat(displayValue);
                break;
            default:
                return;
        }
        setDisplayValue(result.toString());
        setPendingValue('');
        setOperation('');
    };

    const clearDisplay = () => {
        setDisplayValue('');
        setPendingValue('');
        setOperation('');
    };

    return (
        <div id="calculator" className="calculator">
            <input type="text" className="form-control mb-3" value={displayValue} readOnly />
            <div className="btn-group" role="group">
                <button className="btn btn-light" onClick={() => appendNumber('7')}>7</button>
                <button className="btn btn-light" onClick={() => appendNumber('8')}>8</button>
                <button className="btn btn-light" onClick={() => appendNumber('9')}>9</button>
                <button className="btn btn-dark" onClick={() => handleOperation('/')}>/</button>
            </div>
            <div className="btn-group" role="group">
                <button className="btn btn-light" onClick={() => appendNumber('4')}>4</button>
                <button className="btn btn-light" onClick={() => appendNumber('5')}>5</button>
                <button className="btn btn-light" onClick={() => appendNumber('6')}>6</button>
                <button className="btn btn-dark" onClick={() => handleOperation('*')}>*</button>
            </div>
            <div className="btn-group" role="group">
                <button className="btn btn-light" onClick={() => appendNumber('1')}>1</button>
                <button className="btn btn-light" onClick={() => appendNumber('2')}>2</button>
                <button className="btn btn-light" onClick={() => appendNumber('3')}>3</button>
                <button className="btn btn-dark" onClick={() => handleOperation('-')}>-</button>
            </div>
            <div className="btn-group" role="group">
                <button className="btn btn-light" onClick={() => appendNumber('0')}>0</button>
                <button className="btn btn-light" onClick={() => appendNumber('.')}>.</button>
                <button className="btn btn-success" onClick={calculate}>=</button>
                <button className="btn btn-dark" onClick={() => handleOperation('+')}>+</button>
            </div>
            <button className="btn btn-danger mt-3" onClick={clearDisplay}>C</button>
        </div>
    );
};

export default Calculator;