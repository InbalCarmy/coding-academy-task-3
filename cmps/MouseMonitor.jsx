const { useState, useEffect } = React


export function MouseMonitor()  {

    const [isOn, setIsOn] = useState(true)
    const [pos, setPos] = useState({x: 0, y: 0})

    useEffect(() => {
        if(!isOn) return

          function updatePos(e){
        setPos({x: e.clientX, y: e.clientY})
        }

        document.addEventListener('mousemove', updatePos)

        return () => document.removeEventListener('mousemove', updatePos)
    }, [isOn])


    const on = (isOn) ? '' : 'paused'

    return (
        <section className={`mouse-monitor ${on}`}>
            <div className="row">
                <p>Mouse:</p>
                <p>x: {pos.x}</p>
                <p>y: {pos.y}</p>
            </div>

            <button className="toggle-btn" onClick={() => setIsOn(on => !on)}>{isOn ? 'Pause' : 'Resume'}</button>
            {/* <h2>Mouse Monitor</h2> */}
       </section>
    )
}

