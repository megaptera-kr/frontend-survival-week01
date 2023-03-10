import React from 'react';
import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';

test('Greeting', () => {
	render(<Greeting name='World' />);
	screen.getByText('Greeting World!');
});
