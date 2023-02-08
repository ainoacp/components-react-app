import { useState } from "react";

const initialValue = {
    title: 'Título',
    description: 'Lorem',
    img: '',
}
export default function Form({onSubmit}) {
    const [card, setcard] = useState(initialValue);
    
    const submit = (e) => {
        e.preventDefault();
        console.log(card);

        onSubmit(card);
    };

    const changeValue = (e) => {
        setcard({...card, [e.target.name]: e.target.value});
    };
    
    return(
        <form onSubmit={submit}>
            <label>
                Título
                <input type="text" value={card.title} name="title" onChange={changeValue}/>
            </label>
            <label>
                Descripción
                <input type="text" name="description" onChange={changeValue}/>
            </label>
            <label>
                Imagen
                <input type="text" name="img" onChange={changeValue}/>
            </label>
            <button>Enviar</button>
        </form>
    );
}