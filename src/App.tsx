import {useState} from 'react';
import Greeting from './components/Greeting';

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Greeting name='world'/>
			<p>Count : {count}</p>
			<button type='button' onClick={() => {
				setCount(count + 1);
			}}>
            클릭!
			</button>
		</div>
	);
}
