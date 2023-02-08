export default function Gallery({list}) {
    
    return (
        <div>
            {list.map((card, index) => 
            <figure key={index}>
                <figcaption>{card.title}</figcaption>
                <img src={card.img} alt={card.title} width={200} height={300}/>
                <p>{card.description}</p>
            </figure>)}
        </div>
    )
}