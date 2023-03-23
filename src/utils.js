/**
 * Fetches first 150 Pokemon and returns an array of obejcts,
 * where each object represents a Pokemon.
 *
 *
 */

export async function getPokemonList() {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`
  ).then((res) => res.json());
  return data.results;
}

/**
 * @returns {string} Short description of Pokemon
 */
export async function getPokemonDescription(index) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${index}`
  ).then((res) => res.json());

  return pokemon;
}

/**
 * Returns URL of a Pokemon sprite image
 */
export function getPokemonSpriteUrl(index) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index}.png`;
}
