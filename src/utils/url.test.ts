import { getPokemonIdFromUrL } from "./url";

describe("[Url] utils module", () => {
  describe("getPokemonIdFromUrL() method if the URL is valid", () => {
    it("should return the id", () => {
      const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/2/";
      const expectedId = "2";

      const id = getPokemonIdFromUrL(pokemonUrl);

      expect(id).toBe(expectedId);
    });

    it("should return 'undefined' if the URL is invalid", () => {
      const pokemonUrl = "asdfasd6-1239dfasd-asf";

      const id = getPokemonIdFromUrL(pokemonUrl);

      expect(id).toBe(undefined);
    });
  });
});
