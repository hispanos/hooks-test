import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import useCounter from '../hook/useCounter';

const Counter = () => {

    const value = 10;
    const {counter, handleSubstract, handleIncrement, handleReset} = useCounter(value)
    

    return (
        <div>
            <h1>{counter}</h1>
            <button
                type="button"
                className="btn btn-primary"
                onClick = {handleSubstract}
            >-1</button>
            <button
                type="button"
                className="btn btn-warning"
                onClick = {handleReset}
            >Reset</button>
            <button
                type="button"
                className="btn btn-success"
                onClick = {handleIncrement}
            >+1</button>
        </div>
    )
}

export default Counter;
