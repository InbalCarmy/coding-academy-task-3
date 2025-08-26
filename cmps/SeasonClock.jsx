const {useState, useEffect} = React


export function SeasonClock() {

    const [isDark, setIsDark] = useState(false)
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNow(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    function onToggleDarkMode() {
        setIsDark(isDark => !isDark)
    }

    function getSeason() {
        const month = now.getMonth()
        if(month >= 2 && month <= 4) return "spring"
        if (month >= 5 && month <= 7) return "summer"
        if (month >= 8 && month <= 10) return "autumn"
        return "winter";  
    }

    const currSeason = getSeason(now);
    const currMonth = now.toLocaleString(undefined, {month: "long"})
    const currDay = now.toLocaleString(undefined, {weekday: "long"})
    const currTimer = now.toLocaleTimeString('he');
    const darkModeClass = isDark ? 'dark' : ''
    const imgUrl = `/assets/img/${currSeason}.png`

    return (
            <section className="season-clock-container">
                <h1>The Season Now is: </h1>
                <div className={`season-img-wrap ${darkModeClass}`} onClick={onToggleDarkMode} > 
                    <h1>{`${currMonth} (${currSeason})`}</h1>
                    <img src={imgUrl} alt={currSeason} />
                    <h1>{`${currDay}`}</h1>
                    <h1>{`${currTimer}`}</h1>
                </div>
            </section>
    )
}
