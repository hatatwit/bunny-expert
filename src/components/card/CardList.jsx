import Card from "./Card";

import "./styles.scss";

export default function CardList({data}) {
    return (
        <section className="cards">
            {data?.map((food) => {
                return <Card key={food._id} food={food}/>
            })}
        </section>

    )
}