export default function List({list}) {
    //id y si no index
    return <ul>
        {list.map((item, index) => <li key={index}>{item}</li>)} 
    </ul>
}
