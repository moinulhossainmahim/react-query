import axios from "axios";
import { useQuery, useQueryClient } from "react-query"

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
}

export const useSuperHeroData = (heroId: string) => {
  const queryClient = useQueryClient();
  return useQuery(['super-hero', heroId], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient.getQueryData('super-heroes')?.data?.find((hero) => hero.id === heroId)
      if (hero) {
        console.log('found');
        return {
          data: hero,
        }
      } else {
        return undefined;
      }
    }
  });
}
