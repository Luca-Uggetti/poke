import { useEffect, useState } from "react";
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
    <div
      style={{
        width: "400px",
        backgroundColor: "#bbe6e4",
        padding: "10px",
        font: "Roboto",
        color: "black opacity(80%)",
        fontSize: "18px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <select
          style={{
            height: "50px",
            marginBottom: "10px",
            fontSize: "18px",
            width: "394px",
          }}
          onChange={handleSelectChange}
        >
          {pokemonList.map((pokemon, index) => (
            <option key={index} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px 10px 60px",
          textAlign: "center",
          borderRadius: "10px",
          width: "380px",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            border: "1px solid grey",
            width: "293px",
            height: "293px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#c7c5c5",
            margin: "0 auto 20px auto",
          }}
        >
          {selectedPokemonImage && (
            <img src={selectedPokemonImage} alt="Selected Pokemon" />
          )}
        </div>
        <div
          style={{
            fontWeight: " 700",
            fontSize: "40px",
            marginBottom: "10px",
          }}
        >
          <h6>{pokemonName}</h6>
        </div>
        <p
          style={{
            fontWeight: "400",
            fontSize: "18px",
          }}
        >
          {description && <p>{description}</p>}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          disabled={count === 1}
          style={{
            opacity: count === 1 ? 0.8 : 1,
            background: "#7d70ba",
            borderRadius: "6px",
            width: "180px",
            height: "50px",
            border: "0",
            fontSize: "18px",
            color: "white",
            fontFamily: "Roboto",
            marginTop: "308px",
          }}
          onClick={() => setCount(count - 1)}
        >
          Previous
        </div>

        <div
          disable={count === 150}
          style={{
            opacity: count === 1 ? 0.8 : 1,
            background: "#7d70ba",
            borderRadius: "6px",
            width: "180px",
            height: "50px",
            border: "0",
            fontSize: "18px",
            color: "white",
            fontFamily: "Roboto",
            marginTop: "308px",
          }}
          onClick={() => setCount(count + 1)}
        >
          Next
        </div>
      </div>
    </div>
  );
}
