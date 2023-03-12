import {render, screen} from '@testing-library/react';

import Greeting from './Greeting';

test('Greeting', () => {
	render(<Greeting name='World' />);

	screen.getByText('Hello, World!');

	screen.getByText(/Hello/);

	expect(screen.queryByText(/Hi/)).not.toBeInTheDocument();
});
