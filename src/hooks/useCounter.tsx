import { useState, useReducer, useRef } from 'react';

const useCounter = (
	minCount = 1,
	initialCount = 1,
	maxCount: number | null = null,
): readonly [
	number,
	React.MutableRefObject<number>,
	(added: number) => void,
	(value?: number) => void,
] => {
	const [count, setCount] = useState(initialCount);
	const counterRef = useRef(count);
	const [, forceUpdate] = useReducer((x: number) => x + 1, 0);

	const addToCounter = (added: number): void => {
		if (maxCount != null && count + added > maxCount) forceUpdate();
		else if (count + added < minCount) forceUpdate();
		else {
			counterRef.current += added;
			setCount(counterRef.current);
		}
	};

	const resetCounter = (value: number = minCount): void => {
		counterRef.current = value;
		setCount(value);
	};

	return [count, counterRef, addToCounter, resetCounter] as const;
};

export default useCounter;
