// * Production start
import '@testing-library/jest-dom'
import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import App from '/home/damner/code/src/App'
import List from '/home/damner/code/src/List'


describe("suite", () => {
test('clear all button', () => {
	render(<App />)
	screen.getByText('Clear All')
})

test('all people', () => {
	render(<App />)
	screen.getByText('Bertie Yates')
	screen.getByText('Hester Hogan')
	screen.getByText('Larry Little')
	screen.getByText('Sean Walsh')
	screen.getByText('Lola Gardner')
})

test('clear all button', () => {
	render(<App />)
	screen.getByText('Bertie Yates')
	screen.getByText('Hester Hogan')
	screen.getByText('Larry Little')
	screen.getByText('Sean Walsh')
	screen.getByText('Lola Gardner')
	fireEvent.click(screen.getByText('Clear All'))

	let fail = false
	try {
		screen.getByText('Bertie Yates')
		fail = true
	} catch (err) {
		// okie
	}

	if (fail) throw 'fail'
})
})