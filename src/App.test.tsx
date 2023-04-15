import {render, screen} from '@testing-library/react';

import App from './App';

describe('App', () => {
	it('renders greeting message', () => {
		render(<App name='World' />);
		const greetingElement = screen.getByText('Hello, World!');
		expect(greetingElement).toBeInTheDocument();
	});
});
