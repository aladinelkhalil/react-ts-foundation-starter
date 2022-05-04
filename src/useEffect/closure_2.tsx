import { useState, useRef } from "react";

/**
 * This example shows how to write the current count to a reference,
 * in order to read it at a later point in time.
 */
export const App = (): JSX.Element => {
	const [count, setCount] = useState<number>(0);

	/*
	 * Create a reference that will store the current value of count.
	 * Note: The call to useRef only creates the reference once; upon
	 * every subsequent render, the same reference is returned.
	 */
	const currentCount = useRef<number>();

	// Store the current value of count.
	currentCount.current = count; // currentCount = { current: 0 }

	const log = (): void => {
		setTimeout(() => {
			/*
			 * read the current value of count.
			 *
			 * NOTE: Compare with capturing count in closure_1.
			 */
			console.log("Count: " + currentCount.current);
		}, 3000);
	};

	return (
		<>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={log}>Log</button>
		</>
	);
};
