/* eslint-disable testing-library/no-debugging-utils */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

test("should increment the counter with 1 when the increment button is clicked", async () => {
	render(<App />);

	/*
	 * Will print out the dom in the console which you can use on
	 * this webpage in order to get some suggestions:
	 * https://testing-playground.com/
	 */
	screen.debug(); // Will print out the dom in the console.

	const increment = screen.getByRole("button", { name: /increment/i });
	const result = screen.getByText(/count: 0/i);

	expect(result).toHaveTextContent(/count: 0/i);

	userEvent.click(increment);
	expect(result).toHaveTextContent(/count: 1/i);
});

test("should reset the counter to 0 when the reset button is clicked", async () => {
	render(<App />);
	screen.debug();

	const incrementButton = screen.getByRole("button", { name: /increment/i });

	// We click the increment-button a random number of times (between 1-10 times)
	const numberOfIncrements = Math.floor(Math.random() * 10) + 1;
	for (let i = 1; i <= numberOfIncrements; i++) {
		userEvent.click(incrementButton);
	}

	// This will match "Count: (any number not starting with 0)" in the p-tag.
	const pContent = screen.getByText(/count: [1-9]/i);

	const resetButton = screen.getByRole("button", { name: /reset/i });

	userEvent.click(resetButton);
	expect(pContent).toHaveTextContent(/count: 0/i);
});
