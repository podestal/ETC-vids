import { useEffect, useState } from 'react';
import axios from 'axios';

interface Data {
    userId: number,
    id: number,
    title: string,
    body: string,
}
const AxiosAndEffect = () => {

    const [data, setData] = useState<Data[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          setData(response.data);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

  return (
    <div className='flex-col w-full'>
        <h2 className='m-6 text-5xl'>Posts using axios and useEffect</h2>
        <ul className='flex flex-col gap-4 m-6'>
            {data?.map( post => <li key={post.id}>{post.title}e</li>)}
        </ul>
    </div>
  )
}

export default AxiosAndEffect