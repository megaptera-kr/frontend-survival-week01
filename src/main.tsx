import ReactDOM from 'react-dom/client';
import React from 'react';

function App() {
  return <div>Hello World</div>;
}
const element = document.getElementById('root');
if (element) {
  const root = ReactDOM.createRoot(element);
  root.render(<App />);
}
