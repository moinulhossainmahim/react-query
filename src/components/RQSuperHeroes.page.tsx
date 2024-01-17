import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
}

export const RQSuperHeroesPage = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery('super-heroes', fetchSuperHeroes );

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
