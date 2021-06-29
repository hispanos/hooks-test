import {useState} from 'react'

const useCounter = (value=20) => {

    const [counter, setCounter] = useState(value);

    const handleSubstract = () => {
        setCounter(counter -1)
    }

    const handleIncrement = () => {
        setCounter(counter +1)
    }

    const handleReset = () => {
        setCounter(value)
    }

    return {
        counter,
        handleSubstract,
        handleIncrement,
        handleReset
    }
}

export default useCounter;