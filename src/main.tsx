import ReactDOM from 'react-dom/client';
import App from './App';

function main() {
	const element = document.getElementById('root');

	if (!element) {
		return;
	}

	const root = ReactDOM.createRoot(element);

	const count = 0;

	root.render(<App name='한국' />);
}

main();
