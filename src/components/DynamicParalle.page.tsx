import { useQueries } from "react-query"
import axios from "axios"

const fetchSuperHeroById = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
}

export const DynamicParallelPage = ({ heroIds } : { heroIds: string[] }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHeroById(id),
      }
    })
  )

  console.log({queryResults});

  return (
    <h1>DynamicParallelPage</h1>
  )
}
