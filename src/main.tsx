import ReactDOM from 'react-dom/client';
import App from './App';

function Demo({count}: {count: number}) {
	return (<p> Demo {count}</p>);
}

function main() {
	const element = document.getElementById('root');
	const demoElement = document.getElementById('demo');

	if (!element || !demoElement) {
		return;
	}

	const root = ReactDOM.createRoot(element);
	const demoRoot = ReactDOM.createRoot(demoElement);
	let count = 0;

	root.render(<App/>);
	demoRoot.render(<Demo count={count}/>);

	setInterval(() => {
		count += 1;
		demoRoot.render(<Demo count={count}/>);
	}, 1_000);
}

main();
