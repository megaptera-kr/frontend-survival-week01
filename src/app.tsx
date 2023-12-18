import { useState } from "react"


export default function App() {
    
    const [count, setCount] = useState(0);

    const clickEvent = ()=> {
        setCount(count+1);
    }
    return (
        <div>
        <p>Hello, World! </p>
        <p>Count : {count}</p>
        <button type="button" onClick={clickEvent}>
        클릭
        </button>
        </div>
    );
}