const { useState, useEffect, useRef } = React


export function CountDown({startFrom = 10, onDone = () => {
    console.log('Done!')}})  {

    const [timer, setTimer] = useState(startFrom)
    const intervalIdRef = useRef(null)


    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            setTimer(timer => {
                if(timer <= 1){
                    clearInterval(intervalIdRef.current)
                    onDone()
                    return 0
                }
                return timer - 1
            })
        }, 1000)

        return () => clearInterval(intervalIdRef.current)
    }, [])


    const countClass = (timer < 7) ? 'low' : ''



    return (
        <section className="count-down">
            <h2>Count Down</h2>
            <div className="timer-container">
                <h1 className={`timer ${countClass}`} >{timer}</h1>
            </div>
       </section>
    )
}
