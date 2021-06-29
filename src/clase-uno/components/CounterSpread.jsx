import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const CounterSpread = () => {

    const value1 = 10;
    const value2 = 20;
    const value3 = 30;
    const value4 = 40;

    const [counter, setCounter] = useState({
        counter1: value1,
        counter2: value2,
        counter3: value3,
        counter4: value4
    })

    const {counter1, counter2, counter3, counter4} = counter;

    const handleSubstract = () => {
        setCounter({
            ...counter,
            counter1: counter1 - 1,
            counter2: counter2 - 2,
            counter3: counter3 - 5,
            counter4: counter4 - 10
        })
    }

    const handleReset = () => {
        setCounter({
            ...counter,
            counter1: value1,
            counter2: value2,
            counter3: value3,
            counter4: value4
        })
    }

    const handleIncrement = () => {
        setCounter({
            ...counter,
            counter1: counter1 - 1,
            counter2: counter2 - 2,
            counter3: counter3 - 5,
            counter4: counter4 - 10
        })
    }
    

    return (
        <div>
            <h1>{counter1}</h1>
            <h1>{counter2}</h1>
            <h1>{counter3}</h1>
            <h1>{counter4}</h1>
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

export default CounterSpread;
