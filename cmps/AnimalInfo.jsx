export function AnimalInfo({infoArray}) {

    return (
        <header className="animal-info">
            <section className="header-container">
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Count</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {infoArray.map((animal, idx) => (
                            <tr key = {idx}>
                                <td>{animal.type}</td>
                                <td>{animal.count}</td>
                                <td><a href={`//www.google.com/search?q=${animal.type}`}>Search</a></td>
                            </tr>

                        ))}
                    </tbody>
                </table>



            </section>
        </header>
    )
}