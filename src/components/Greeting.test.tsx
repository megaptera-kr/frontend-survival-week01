import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';

test('Greeting', () => {
	render(<Greeting name='world'/>);

	screen.getByText('Hello, world!');

	screen.getByText(/Hello,/);

	// QueryByText는 없는 것을 확인할 때 사용
	expect(screen.queryByText(/Hi,/)).not.toBeInTheDocument();
});
