
import { Home } from "./cmps/Home.jsx"
import { AnimalInfo } from "./cmps/AnimalInfo.jsx"
import { CountDown } from "./cmps/CountDown.jsx"
import {SeasonClock} from "./cmps/SeasonClock.jsx"
import { WatcherApp } from "./cmps/WatcherApp.jsx"
import { MouseMonitor } from "./cmps/MouseMonitor.jsx"

function onDone() {
    console.log("Done!")
}

export function RootCmp() {
    return (
        <section className="app main-layout">
            {/* <AppHeader /> */}
            <main>
                <Home />
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