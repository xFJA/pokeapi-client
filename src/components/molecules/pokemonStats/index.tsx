import React from "react";
import { Stat } from "../../../models/features/pokedex";
import ProgressBar from "../../atoms/progressBar";

const POKEMON_STAT_DEFAULT_MAX_LIMIT = 255;

export interface PokemonStatsProps {
  stats: Stat[];
}

const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <div>
      {stats.map((s, i) => {
        return (
          <ProgressBar
            key={i}
            value={s.baseStat}
            limit={POKEMON_STAT_DEFAULT_MAX_LIMIT}
            title={s.name}
          />
        );
      })}
    </div>
  );
};

export default PokemonStats;
