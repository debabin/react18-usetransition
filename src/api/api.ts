export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getPokemonById = (id: number) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(async (res) => {
    await sleep(2000);
    const pokemon = await res.json();

    return {
      name: pokemon.name,
      images: [
        pokemon.sprites.front_default,
        pokemon.sprites.back_default,
        pokemon.sprites.front_shiny,
        pokemon.sprites.back_shiny,
      ].filter((image) => !!image),
      id: pokemon.id,
    };
  });
};

export const getPokemonDescriptionById = (id: number) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(
    async (res) => {
      await sleep(1000);
      const des = await res.json();
      return des.flavor_text_entries[10].flavor_text;
    }
  );
};
