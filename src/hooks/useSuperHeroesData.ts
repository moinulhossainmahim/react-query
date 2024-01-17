import axios from "axios";
import { useMutation, useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
}

const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheroes', hero);
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
  return useMutation(addSuperHero)
}
