import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';

test('Greeting', () => {
	render(<Greeting name={'world'} />);

	screen.getByText('Hello, world!'); // 정확한 문자열을 찾아야함
	screen.getByText(/Hello/);
	expect(screen.queryByText(/Hi/)).toBeFalsy();
	expect(screen.queryByText(/Hi/)).not.toBeInTheDocument();
	expect(screen.queryByText(/Hello/)).toBeInTheDocument();
	// Expect(screen.queryByText(/Hi/)).not.toBeVisible();
});
