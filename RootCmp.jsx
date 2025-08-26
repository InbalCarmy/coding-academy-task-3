
import { Home } from "./cmps/Home.jsx"
import { AnimalInfo } from "./cmps/AnimalInfo.jsx"
import { CountDown } from "./cmps/CountDown.jsx"
import {SeasonClock} from "./cmps/SeasonClock.jsx"
import { WatcherApp } from "./cmps/WatcherApp.jsx"
import { MouseMonitor } from "./cmps/MouseMonitor.jsx"
const { useState, useEffect } = React


export function RootCmp() {
        const [animals, setAnimals] = useState([
        {type: 'Malayan Tiger', count: 787},
        {type: 'Mountain Gorilla', count: 212},
        {type: 'Fin Whale', count: 28},
    ])


    function onDone() {
        console.log("Done!")
    }


    return (
        <section className="app main-layout">
            {/* <AppHeader /> */}
            <main>
                {/* <Home /> */}
                <AnimalInfo infoArray={animals} />
                <SeasonClock />
                <CountDown
                    startFrom ={10}
                    onDone={onDone}/>
                <WatcherApp/>
                <MouseMonitor/>
            </main>
        </section>
    )
}