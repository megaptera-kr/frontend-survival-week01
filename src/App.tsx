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
			<p>Count: {count}</p>
			<button type='button' onClick={handleClick}>
                올라가랏 얍
			</button>
		</div>
	);
}
