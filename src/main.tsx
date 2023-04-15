import ReactDOM from 'react-dom/client';
import App from './App';

function Demo({count}: {count: number}) {
	return <p>Demo Count : {count} </p>;
}

function main() {
	const element = document.getElementById('root');
	const element2 = document.querySelector('#demo');

	if (!element || !element2) {
		return;
	}

	const root = ReactDOM.createRoot(element);
	const root2 = ReactDOM.createRoot(element2);

	root.render(<App name='오리' />);

	let count = 0;

	root2.render(<Demo count={count} />);

	setInterval(() => {
		count += 1;
		root2.render(<Demo count={count} />);
	}, 1_000);
}

main();
