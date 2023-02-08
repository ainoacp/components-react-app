export default function ClickBtn(){

    const clickMe = (text) => {
        console.log("heyyy!" + text);
    }
    return <button onClick={() => clickMe("Soy Ainoa")}>Click me</button>
    //return <button onClick={clickMe}>Click me</button>
}

// const a = () => {
//     console.log("Soy a")
//     return "pepe"
// }
// const b = a(); //pepe
// const c = a; // c

// b()
// c()