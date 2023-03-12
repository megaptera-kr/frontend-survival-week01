import {useState} from 'react';
import Greeting from './components/Greeting';

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Greeting name='world' />
			<img src='/images/testImage.jpg' alt='Test Image' width='250'/>
			<p>Count: {count}</p>
			<button type = 'button' onClick={() => {
				setCount(count + 1);
			}}>click</button>
		</div>
	);
}
