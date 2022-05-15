import React from 'react';
import Header from '../Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test('adult add button renders with +', () => {
	render(<Header />);
	const addAdultBtn = screen.getByRole('button',{
		name: /add adult value/i
	})

	expect(addAdultBtn.textContent).toBe('+');
});

test('adult subtract button renders with -', () => {
	render(<Header />);
	const asubtractAdultBtn = screen.getByRole('button',{
		name: /subtract adult value/i
	})

	expect(asubtractAdultBtn.textContent).toBe('-');
});

test('click add adult button handler', () => {
	render(<Header />);
	const addAdultBtn = screen.getByRole('button',{
		name: /add adult value/i
	})
	const AdultInput = screen.querySelector('.optionAdultValue');

	addAdultBtn.click();

	expect(AdultInput.textContent).toBe('2');
});