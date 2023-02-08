export default function Card({card}) {
    return (
    <figure>
        <figcaption>{card.title}</figcaption>
        <img src={card.img} alt={card.title} height="300px"/>
        <p>{card.description}</p>
    </figure>
    );
}