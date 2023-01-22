import { useState, useReducer, useEffect, useCallback } from 'react'

const useCounter = (minCount = 0, initialCount = 0, maxCount: number | null = null) => {
    const [count, setCount] = useState(initialCount);
    const [, forceUpdate] = useReducer(x=>x+1, 0);

    const addToCounter = (added: number) => {
        if (maxCount && count + added > maxCount) forceUpdate();
        else setCount(count + added);
    }

    const decToCounter = (dec: number) => {
        if (count - dec >= minCount) setCount(count - dec)
        else forceUpdate();
    }

    const resetCounter = () => {
        setCount(minCount);
    }

    return [count, addToCounter, decToCounter, resetCounter] as const;
}

export default useCounter