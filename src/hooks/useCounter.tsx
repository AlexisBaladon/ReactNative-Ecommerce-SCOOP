import React, { useState } from 'react'

const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);
    

    const addToCounter = (added: number) => {
        setCount(count + added);
    }

    const decToCounter = (dec: number) => {
        if (count - dec >= 0) setCount(count - dec);
    }

    const resetCounter = () => {
        setCount(0);
    }

    return [count, addToCounter, decToCounter, resetCounter] as const;
}

export default useCounter