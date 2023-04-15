import {useState} from 'react';
import Greeting from './components/Greeting';

export default function App({name = '무명'}: {name: string}) {
	const [count, setCount] = useState(0);

	const handelClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<Greeting name={name} />
			<img src='/images/free.jpg' alt='꽃 사진' width='200' />
			<p>Count : {count}</p>
			<button type='button' onClick={handelClick}>
        클릭
			</button>
		</div>
	);
}
