import { useEffect, useState } from "react";

import {
  ButtonWrapper,
  Card,
  Container,
  PokeButtons,
  PokeDescription,
  PokeImage,
  PokeName,
  Select,
} from "./PokemonVIew";
import {
  getPokemonDescription,
  getPokemonList,
  getPokemonSpriteUrl,
} from "./utils";
export default function App() {
  const [pokemonList, setPokemonList] = useState([]); //lista del mio dropdown
  const [description, setDescription] = useState(" "); //descrizione
  const [pokemonName, setPokemonName] = useState([]); // nome del pokemon
  const [selectedPokemonImage, setSelectedPokemonImage] = useState(); //immagine
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pName = await getPokemonList();
      setPokemonList(pName);
    };

    fetchPokemonList();
  }, []);

  useEffect(() => {
    const fetchPokemonImage = async () => {
      const pokemonImage = await getPokemonSpriteUrl(count);
      setSelectedPokemonImage(pokemonImage);
    };
    fetchPokemonImage();
  }, [count]);

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      const pokemon = await getPokemonDescription(count);

      setPokemonName(pokemon.name);
      setDescription(
        pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, "")
      );
    };
    fetchPokemonInfo();
  }, [count]);

  function handleSelectChange(event) {
    const index = event.target.selectedIndex + 1;
    setCount(index);
  }
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Select onChange={handleSelectChange}>
          {pokemonList.map((pokemon, index) => (
            <option key={index} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </Select>
      </div>
      <Card>
        <PokeImage>
          {selectedPokemonImage && (
            <img src={selectedPokemonImage} alt="Selected Pokemon" />
          )}
        </PokeImage>
        <PokeName>
          <h6>{pokemonName}</h6>
        </PokeName>
        <PokeDescription>{description && <p>{description}</p>}</PokeDescription>
      </Card>
      <ButtonWrapper>
        <PokeButtons
          disabled={count === 1}
          style={{ opacity: count === 1 ? 0.8 : 1 }}
          onClick={() => setCount(count - 1)}
        >
          Previous
        </PokeButtons>

        <PokeButtons
          disable={count === 150}
          style={{ opacity: count === 150 ? 0.8 : 1 }}
          onClick={() => setCount(count + 1)}
        >
          Next
        </PokeButtons>
      </ButtonWrapper>
    </Container>
  );
}
