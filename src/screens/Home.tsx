import React, { useEffect } from "react";
import { useGetPokemonByNameQuery } from "../redux/services/pokemon";
import { ActivityIndicator, Image } from "react-native";

export function Home() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  useEffect(() => {
    console.log(error);
  }, [error]);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <Image
      style={{
        width: 200,
        height: 200,
      }}
      source={{
        uri: data.sprites.front_default,
      }}
    />
  );
}
