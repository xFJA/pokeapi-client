import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CardsGrid from ".";
import { Pokemon } from "../../../models/features/pokedex";

describe("<CardsGrid /> component", () => {
  const pokemonList: Pokemon[] = [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
  ];

  it("should render the same number of 'Card' components than the pokemon list length given", () => {
    render(<CardsGrid pokemonList={pokemonList} />);

    const cards = screen.getAllByTestId("card");

    expect(cards.length).toBe(pokemonList.length);
  });

  describe("when a pokemon 'Card' is clicked", () => {
    it("should open the pokemon details dialog component", async () => {
      render(<CardsGrid pokemonList={pokemonList} />);

      const card = screen.getAllByTestId("card")[0];

      fireEvent.click(card);

      await waitFor(() => {
        expect(screen.getByTestId("modal")).toBeInTheDocument();
      });
    });
  });

  describe("when the pokemon 'Card' has been rendered and the user click outside", () => {
    it("should render again the grid list without any open modal", async () => {
      render(<CardsGrid pokemonList={pokemonList} />);

      const card = screen.getAllByTestId("card")[0];

      fireEvent.click(card);

      await waitFor(() => {
        expect(screen.getByTestId("modal")).toBeInTheDocument();
      });

      const backdrop = screen.getByTestId("backdrop");
      fireEvent.click(backdrop);

      const modal = screen.queryByTestId("modal");
      expect(modal).not.toBeInTheDocument();
    });
  });
});
