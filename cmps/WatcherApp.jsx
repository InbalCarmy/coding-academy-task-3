const { useState, useEffect } = React
import { watcherService } from "../services/watcher.service.js"
import {utilService} from "../services/util.service.js"


export function WatcherApp()  {
    const [watchers, setWatchers] = useState(null)
    const [selectedWatcher, setSelectedWatcher]= useState(null)
    const [isHide, setIsHide] = useState(true)

    useEffect(() => {
        loadWatchers()
    }, [])

    function loadWatchers() {
        watcherService.query()
            .then(watchers => {
                console.log('watchers: ', watchers)
                setWatchers(watchers)
            })
            .catch( err => 
                console.log('err: ', err)
            )
    }

    function onRemove(watcherId) {
        watcherService.remove(watcherId)
            .then(() => {
                setWatchers(watchers => watchers.filter(watcher => watcher.id !== watcherId))
                console.log(watchers)
            })
            .catch(err => {
                console.log('err: ', err)
            })
    }

    function onSelect(watcherId){
        setIsHide(isHide => !isHide)
        watcherService.get(watcherId)
            .then(watcher => {
                console.log(watcher)
                setSelectedWatcher(watcher)
            })
            .catch(err => {
                console.log('err: ', err)
            })
    }

    function onAdd() {
        const fullName = prompt("Enter full name:")
        if(!fullName) return

        const moviesStr = prompt ("Enter movies (, separated):")
        const movies = moviesStr ? moviesStr.split(",").map(m => m.trim()) : []

        const id = null

        const newWatcher ={
            id, fullName, movies
        }

        watcherService.save(newWatcher)
            .then(savedWatcher => {
                setWatchers(watchers => [...watchers, savedWatcher])
            })
            .catch(err => {
                console.log('err: ', err)
            })
    }


    const hide = isHide ? 'hidden' : ''

    if(!watchers) return <div>Loading...</div>
    return (
        <section className="watcher">
            <h2>Watchers List</h2>
            <button onClick ={()=> onAdd()}>Add Watcher</button>

            <div className="watchers-list">
                {selectedWatcher && (<div className={`selected ${isHide}`}>
                    <h1>{`${selectedWatcher.fullName}`}</h1>
                    <ul>
                        {selectedWatcher.movies && selectedWatcher.movies.map(movie =>
                            <li key={movie}>{movie}</li>
                        )}
                    </ul>
                    <button onClick={() => setSelectedWatcher(null)} >cancel</button>
                </div>)}

                {watchers.map(watcher => 
                    <div key={watcher.id}>
                        <h1>{`${watcher.fullName}`}</h1>
                        <button onClick={() => onRemove(watcher.id)} >X</button>
                        <button onClick={() => onSelect(watcher.id)} >Select</button>
                    </div>
                )}

            </div>
       </section>
    )
}

