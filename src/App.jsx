//import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Card from "./componets/card";
const url = "https://rickandmortyapi.com/api/character";

function App() {
  const [characters, setCaracters] = useState();
  useEffect(() => {
    fetch(url) 
      .then((res) => res.json()) // res es la respuesta que nos da el servidor
      .then((data) => {
        setCaracters(data.results); // data es la informacion que nos trae el servidor
      });
  }, []);

  console.log("characters", characters); // para ver que nos trae la api
  return (
    <>
      <h1> Rick and Morty in ruta N botcamp</h1>
      <p> With React by Juan Pablo Pineda L v:x|</p>
      <p>Personajes:</p>

      <div className="liscar">
        {characters?.map((cha) => (
          <Card key={cha.id} char={cha} />
        ))}
      </div>
    </>
  );
}

export default App;
