// import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../utils/axios-utils";

const fetchSuperHeroes = () => {
  // return axios.get('http://localhost:4000/superheroes');
  return request({ url: '/superheroes' });
}

const addSuperHero = (hero) => {
  // return axios.post('http://localhost:4000/superheroes', hero);
  return request({ url: '/superheroes', method: 'post', data: hero });
}

interface SuperHeroProps {
  onSuccess: (data) => void;
  onError: (data) => void;
}

export const useSuperHeroesData = ({ onError, onSuccess } : SuperHeroProps) => {
  return useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      onSuccess,
      onError,
      // select: (data) => {
      //   const superHeroNames = data.data.map((hero) => hero.name);
      //   return superHeroNames;
      // }
    }
  )
}

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient()
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries('super-heroes');
      queryClient.setQueryData('super-heroes', (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        }
      })
    }
  })
}
