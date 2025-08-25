import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const WATCHER_KEY = 'watchDB'
var gFilterBy = { txt: '', minSpeed: 0 }

_createWatchers()

export const watcherService = {
    query,
    get,
    remove,
    save,
    getEmptyWatcher,
    getNextWatcherId,
    getFilterBy,
    setFilterBy
}

function query() {
    return storageService.query(WATCHER_KEY)
        .then(watchers => {
            if (gFilterBy.txt) {
                const regex = new RegExp(gFilterBy.txt, 'i')
                watchers = watchers.filter(watcher => regex.test(watcher.vendor))
            }
            if (gFilterBy.minSpeed) {
                watchers = watchers.filter(watcher => watcher.maxSpeed >= gFilterBy.minSpeed)
            }
            return watchers
        })
}

function get(watcherId) {
    return storageService.get(WATCHER_KEY, watcherId)
}

function remove(watcherId) {
    // return Promise.reject('Oh No!')
    return storageService.remove(WATCHER_KEY, watcherId)
}

function save(watcher) {
    if (watcher.id) {
        return storageService.put(WATCHER_KEY, watcher)
    } else {
        return storageService.post(WATCHER_KEY, watcher)
    }
}

function getEmptyWatcher(fullName = '', movies = []) {
    return { id: '', fullName, movies }
}

function getFilterBy() {
    return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
    if (filterBy.minSpeed !== undefined) gFilterBy.minSpeed = filterBy.minSpeed
    return gFilterBy
}

function getNextWatcherId(watcherId) {
    return storageService.query(WATCHER_KEY)
        .then(watchers => {
            var idx = watchers.findIndex(watcher => watcher.id === watcherId)
            if (idx === watchers.length - 1) idx = -1
            return watchers[idx + 1].id
        })
}

// function _createCars() {
//     let cars = utilService.loadFromStorage(CAR_KEY)
//     if (!cars || !cars.length) {
//         cars = []
//         cars.push(_createCar('audu', 300))
//         cars.push(_createCar('fiak', 120))
//         cars.push(_createCar('subali', 100))
//         cars.push(_createCar('mitsu', 150))
//         utilService.saveToStorage(CAR_KEY, cars)
//     }
// }

function _createWatchers() {
    let watchers = utilService.loadFromStorage(WATCHER_KEY)
    if (!watchers || !watchers.length) {
        watchers = []
        watchers.push(_createWatcher('Puki Ba', ['rambo', 'Rocky']))
        watchers.push(_createWatcher('Fiak Eli', ['Game of thrones']))
        watchers.push(_createWatcher('Muki Da', ['Back to the Future', 'Lilo and Steach']))
        watchers.push(_createWatcher('Shuki Sa', ['Men in Black', 'Free Guy']))
        utilService.saveToStorage(WATCHER_KEY, watchers)
    }
}

function _createWatcher(fullName, movies) {
    const watcher = getEmptyWatcher(fullName, movies)
    watcher.id = utilService.makeId()
    return watcher
}