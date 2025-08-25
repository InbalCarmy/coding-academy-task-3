
import { Home } from "./cmps/Home.jsx"
import { AnimalInfo } from "./cmps/AnimalInfo.jsx"
import { CountDown } from "./cmps/CountDown.jsx"
import {SeasonClock} from "./cmps/SeasonClock.jsx"
import { WatcherApp } from "./cmps/WatcherApp.jsx"
import { MouseMonitor } from "./cmps/MouseMonitor.jsx"

export function RootCmp() {
    return (
        <section className="app main-layout">
            {/* <AppHeader /> */}
            <main>
                {/* <Home /> */}
                {/* <SeasonClock /> */}
                {/* <CountDown/> */}
                {/* <WatcherApp/> */}
                <MouseMonitor/>
            </main>
        </section>
    )
}