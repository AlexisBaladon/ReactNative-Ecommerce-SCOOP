import { useState } from 'react'

const useCounter = (minCount = 0, initialCount = 0) => {
    const [count, setCount] = useState(initialCount);

    const addToCounter = (added: number) => {
        setCount(count + added);
    }

    const decToCounter = (dec: number) => {
        if (count - dec >= minCount) setCount(count - dec)
        else setCount(minCount);
    }

    const resetCounter = () => {
        setCount(minCount);
    }

    return [count, addToCounter, decToCounter, resetCounter] as const;
}

export default useCounter