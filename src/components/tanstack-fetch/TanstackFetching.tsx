import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Data {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const fetchData = async (): Promise<Data[]> => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
};

const TanstackFetching = () => {
    const { data, error, isLoading } = useQuery<Data[], Error>({
        queryKey: ['data'],
        queryFn: fetchData
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='flex-col w-full'>
        <h2 className='m-6 text-5xl'>Posts using Tanstack Query</h2>
        <ul className='flex flex-col gap-4 m-6'>
            {data?.map( item => <li key={item.id}>{item.title}</li>)}
        </ul>
    </div>
  )
}

export default TanstackFetching