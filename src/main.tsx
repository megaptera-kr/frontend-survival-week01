import ReactDom from 'react-dom/client';

import App from './App';

function Demo({count}: {count: number}) {
	return (
		<p>Demo: {count}</p>
	);
}

function main() {
	const element = document.getElementById('root');
	const element2 = document.getElementById('demo');

	if (!element || !element2) {
		return;
	}

	const root = ReactDom.createRoot(element);
	const root2 = ReactDom.createRoot(element2);
	root.render(<App />);

	let count = 0;
	setInterval(() => {
		count += 1;
      	root2.render(<Demo count={count} />);
	}, 1000);
}

main();
