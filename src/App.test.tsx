import {render, screen} from '@testing-library/react';

import App from './App';

describe("App", () => {
  const AppComponent = (<App />);
  render(AppComponent);

  it('taewoong', () => {
    screen.getByText('!!Hello!!');
  })
})


