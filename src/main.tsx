import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const main = () => {
  const element = document.querySelector('#root');

  if (!element) return;

  const root = ReactDOM.createRoot(element);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

main();
