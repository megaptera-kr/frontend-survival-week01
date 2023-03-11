import ReactDOM from 'react-dom/client';
import App from './App';

function Demo() {
	return (<p> Hello World! from Demo!</p>);
}

function main() {
	const element = document.getElementById('root');
	if (!element) {
		return;
	}

	const root = ReactDOM.createRoot(element);
	root.render(<App />);
}

main();
