
import { useState, useEffect } from "react"

const FetchComponent = () => {

    const [data, setData] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)

    const fetchData = async () => {
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        const data = await response.json()
        console.log(data)

        setData(data)
        setDataLoaded(true)
    }



    //below runs authomatic on loading the page
    useEffect(() => {
        fetchData()
    }, [])         //if the array is empty means that this is going to run only once , the first time

    return (
        <div>
            {
                dataLoaded ? <><p>I have data</p>
                    <p>Useles fact: {data.text}</p></>
                    : <p>SOme data comes here later or Loading</p>
            }

            <button onClick={fetchData}>Fetch</button>
        </div>
    )
}


export default FetchComponent 