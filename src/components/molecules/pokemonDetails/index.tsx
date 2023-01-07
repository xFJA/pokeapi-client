import React from "react";
import DetailText from "../../atoms/detailText";

export interface PokemonDetailsProps {
  weight: number;
  height: number;
  experience: number;
}

const PokemonDetails = ({
  weight,
  height,
  experience,
}: PokemonDetailsProps) => {
  const weightInKilograms = weight / 10; // Data received from API in hectograms
  const heightInMetres = height / 10; // Data received from API in decimetres

  return (
    <div>
      <DetailText title="Base experience" value={experience.toString()} />
      <DetailText title="Weight" value={`${weightInKilograms} Kg`} />
      <DetailText title="Weight" value={`${heightInMetres} m`} />
    </div>
  );
};

export default PokemonDetails;
