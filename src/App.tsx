import {useState} from 'react';

import Greeting from './components/Greeting';

export default function App() {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<Greeting name='world' />
			<img src='/images/dummy.jpeg' alt='listImage' width='200' height='200' />
			<p>Count: {count}</p>
			<button type='button' onClick={handleClick}>
        Increment
			</button>
		</div>
	);
}
