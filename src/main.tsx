import ReactDOM from 'react-dom/client';

function App() {
	return (
		<p>hi</p>
	);
}

const element = document.getElementById('root');

if (element) {
	const root = ReactDOM.createRoot(element);

	root.render(<App/>);
}
