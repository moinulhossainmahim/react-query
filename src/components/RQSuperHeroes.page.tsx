import axios from "axios"
import { useState } from "react";
import { useQuery } from "react-query"

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
}

export const RQSuperHeroesPage = () => {
  const [interval, setInterval] = useState(3000);
  const onSuccess = (data) => {
    console.log('successfully fetched', data);
    if (data.data.length >= 4) {
      setInterval(0)
    }
  }

  const onError = (data) => {
    console.log('Getting error', data);
    setInterval(0);
  }

  const { data, isLoading, isError, error, isFetching } = useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      onSuccess,
      onError,
      refetchInterval: interval,
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
        {data?.data.map((superHero: { name: string }) => (
          <div key={superHero.name}>{superHero.name}</div>
        ))}
      </div>
    </>
  )
}
