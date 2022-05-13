import { getPokemonById, getPokemonDescriptionById } from "../../../api/api";
import { suspendWithCache } from "../../../api/suspendWithCache";

export const usePokemon = (id: number) => {
  const asyncFn = () =>
    Promise.all([getPokemonById(id), getPokemonDescriptionById(id)]);

  return suspendWithCache(asyncFn, id);
};
