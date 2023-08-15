import React from 'react';
import {render} from '@testing-library/react';

import Greeting from './Greeting';

test('Greeting', () => {
	render(<Greeting name='world' />);
});
