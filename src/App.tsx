import { useState } from 'react';
import Greeting from './components/Greeting';

function App({name = 'World'}: {name?: string}) {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<Greeting name='world'/>
			<img src='/images/test.jpg' alt='test image' />
			<p>Count: {count}</p>
			<button type='button' onClick={handleClick}>
        Count up
			</button>
		</div>
	);
}

export default App;
