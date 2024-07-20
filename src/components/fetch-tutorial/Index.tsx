import { useEffect, useState } from "react"
import Loading from "../../utils/Loading";
import ErrorComponent from "../../utils/ErrorComponent";

interface Data {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const Index = () => {

    const [data, setData] = useState<Data[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const abortController = new AbortController()

        fetch('https://jsonplaceholder.typicode.com/postffffasass/', {signal: abortController.signal})
        .then(response => {
            if (!response.ok) {
                throw new Error('Something happened')
            }
            return response.json()
        })
        .then(result => setData(result))
        .catch( err => {
            if (err.name === 'AbortError') {
                console.log('Request cancelled')
            } else {
                setError(err.message)
            }
            
        })
        .finally(() => setLoading(false))

        return () => abortController.abort();
        
    }, [])

    if (loading) return <Loading />

    if (error) return <ErrorComponent errorMessage={error}/>

return (
        <div className="w-full flex flex-col justify-center items-center gap-6 my-6">
            <h2 className="text-5xl font-bold">Fetch API</h2>
            {/* <>{console.log('data',data)}</> */}
            <ul>
                {data && data?.map( item => <li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    )
}

export default Index