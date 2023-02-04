import { useState, useReducer, useRef } from 'react';

const useCounter = (minCount = 1, initialCount = 1, maxCount: number | null = null) => {
	const [count, setCount] = useState(initialCount);
	const counterRef = useRef(count);
	const [, forceUpdate] = useReducer((x) => x + 1, 0);

	const addToCounter = (added: number) => {
		if (maxCount && count + added > maxCount) forceUpdate();
		else if (count + added < minCount) forceUpdate();
		else {
			counterRef.current += added;
			setCount(counterRef.current);
		}
	};

	const resetCounter = (value: number = minCount) => {
		counterRef.current = value;
		setCount(value);
	};

	return [count, counterRef, addToCounter, resetCounter] as const;
};

export default useCounter;
