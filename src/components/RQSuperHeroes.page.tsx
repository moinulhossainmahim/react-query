import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log('successfully fetched', data);
  }

  const onError = (data) => {
    console.log('Getting error', data);
  }

  const { data, isLoading, isError, error, isFetching } = useSuperHeroesData({onSuccess, onError})

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
        {data?.data.map((superHero: { name: string, id: string, alterEgo: string }) => (
          <div key={superHero.id}>
            <Link to={`/rq-super-heroes/${superHero.id}`}>{superHero.name}</Link>
          </div>
        ))}
        {/* {data.map((superHeroName) => (
          <div key={superHeroName}>{superHeroName}</div>
        ))} */}
      </div>
    </>
  )
}
