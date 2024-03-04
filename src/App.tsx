import { useState } from 'react';
import Greeting from './components/Greeting';

export default function App({ name }: { name: string }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Greeting name='world' />
      <img
        src='../static/images/images.jpg'
        alt=''
        style={{ width: '200px', height: '200px' }}
      />
      <p>Count: {count}</p>
      <button type='button' onClick={handleClick}>
        클릭!
      </button>
    </>
  );
}
