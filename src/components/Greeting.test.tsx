import {render} from '@testing-library/react';

import Greeting from './Greeting';

describe('App', () => {
	it('renders greeting message', () => {
		const {container} = render(<Greeting />);

		expect(container).toHaveTextContent('Hello, WORLD!');
	});
});
