import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroe1s');
}

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log('successfully fetched', data);
  }

  const onError = (data) => {
    console.log('Getting error', data);
  }

  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      enabled: false,
      onSuccess,
      onError,
    });

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error?.message}</h2>
  }


  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <div>
        <button onClick={refetch}>Fetch Heroes</button>
        {data?.data.map((superHero: { name: string }) => (
          <div key={superHero.name}>{superHero.name}</div>
        ))}
      </div>
    </>
  )
}
