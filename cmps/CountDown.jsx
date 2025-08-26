const { useState, useEffect, useRef } = React


export function CountDown({startFrom , onDone})  {

    const [timer, setTimer] = useState(startFrom)
    const intervalIdRef = useRef(null)


    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            setTimer(timer => timer -1 )
        }, 1000)

        return () => clearInterval(intervalIdRef.current)
    }, [])

    useEffect(() => {
        if(timer <= 0){
            clearInterval(intervalIdRef.current)
            if(onDone) onDone()
        }
    }, [timer]) 


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
