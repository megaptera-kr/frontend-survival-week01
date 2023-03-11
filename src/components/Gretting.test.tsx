import {render, screen} from '@testing-library/react'

import Greeting from './Greeting';

it('Greeting', () => {
  render(<Greeting name="taewoong" />);

  screen.getByText(/Hello/);


  expect(screen.queryByText(/taewoong/)).toBeInTheDocument();
});