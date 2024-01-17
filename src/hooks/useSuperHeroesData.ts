import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
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
      select: (data) => {
        const superHeroNames = data.data.map((hero) => hero.name);
        return superHeroNames;
      }
    }
  )
}
