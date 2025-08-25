import { AnimalInfo } from "./AnimalInfo.jsx"
const { useState, useEffect } = React


export function Home()  {

    const [animals, setAnimals] = useState([
        {type: 'Malayan Tiger', count: 787},
        {type: 'Mountain Gorilla', count: 212},
        {type: 'Fin Whale', count: 28},
    ])

    return (
        <section className="home">
            <h2>Rare Animals</h2>
            {<AnimalInfo infoArray={animals} />}
       </section>
    )
}

