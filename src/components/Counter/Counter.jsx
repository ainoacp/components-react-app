import { useState } from "react";

export default function Counter() {
    //let count = 0;
    const [count, setCount] = useState(0); 
    
    const name = "Calculator 3000"

    const res = () => {
        //console.log(count)
        //count++
        setCount(count - 1)
    }
    const sum = () => {
        setCount(count + 1)
    }
    const mult = () => {
        setCount(count * 2) 
    }
    const div = () => {
        setCount(count / 2)
    }
    return (
    <div>
    {name}
    <br></br>
    {count}
    <br></br>
        <button onClick={res}>-</button>
        <button onClick={sum}>+</button>
        <button onClick={mult}>*2</button>
        <button onClick={div}>/2</button>
    </div>
    );
    
}