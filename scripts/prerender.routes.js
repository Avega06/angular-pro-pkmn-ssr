const TotalPages = 5;
const TotalPokemons = 151;
const fs = require("fs");

(async () => {
  const pokemonsIds = Array.from({ length: TotalPokemons }, (_, i) => i + 1);
  let allPokemons = pokemonsIds.map((id) => `/pokemons/${id}`).join("\n");

  const pages = Array.from({ length: TotalPages }, (_, i) => i + 1);
  const allPages = pages.map((page) => `/pokemons/page/${page}`).join("\n");

  let fileContent = allPokemons + "\n" + allPages;

  const pokemonNameList = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${TotalPokemons}`
  ).then((res) => res.json());

  fileContent += "\n";
  fileContent += pokemonNameList.results
    .map((pokemon) => `/pokemons/${pokemon.name}`)
    .join("\n");

  fs.writeFileSync("routes.txt", fileContent);
  console.log("routes.txt generated");
})();
