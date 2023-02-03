import { useState, useReducer, useRef } from 'react';

const useCounter = (minCount = 1, initialCount = 1, maxCount: number | null = null) => {
	const [count, setCount] = useState(initialCount);
	const counterRef = useRef(count);
	const [, forceUpdate] = useReducer((x) => x + 1, 0);

	const addToCounter = (added: number) => {
		if (maxCount && count + added > maxCount) forceUpdate();
		else {
			counterRef.current += added;
			console.log('counterRef en use', counterRef.current);
			setCount(prevCount => {
				return prevCount + added;
			});
		}
	};

	const decToCounter = (dec: number) => {
		if (count - dec < minCount) forceUpdate();
		else {
			counterRef.current -= dec;
			setCount(prevCount => {
				return prevCount - dec;
			});
		}
	};

	const resetCounter = () => {
		counterRef.current = minCount;
		setCount(minCount);
	};

	return [count, counterRef, addToCounter, decToCounter, resetCounter] as const;
};

export default useCounter;
