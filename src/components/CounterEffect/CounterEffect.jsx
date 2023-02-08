import { useState } from "react";
import { useEffect } from "react";

export default function CounterEffect() {
        const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("esto es como un ngoninit");
    }, []);
    useEffect(() => {
        console.log("esto se ejecuta siempre que cambie el count");
    }, [count]);
    useEffect(() => {
        console.log("esto es como un ngdestroy");
        return () => {
            console.log("Me ejecuto cuando me destruyo")
        }
    }, []);
    return (
    <div>
        <button onClick={() => setCount(count + 1)}> +1 </button>
    </div>)
}