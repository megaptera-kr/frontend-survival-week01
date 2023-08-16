import {useState} from 'react';

export default function App() {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<p>Hello, world!</p>
			<p>Count: {count}</p>
			<button type='button' onClick={handleClick}>
        클릭!
			</button>
		</div>
	);
}
