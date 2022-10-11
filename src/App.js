import React, { useEffect, useState } from "react";
import { CardPerson } from "./Components/CardPerson";
import { Navbar } from "./Components/Navbar";
import Pagination from "./Components/Pagination";
import './styles.css'

function App() {

  const [character, setCharacter] = useState([]);
  const [info, setInfo] = useState({});

  const initialurl = "https://rickandmortyapi.com/api/character"

  const fetchCharacter = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.error(error))
  };

  const onPrevious = () => {
    fetchCharacter(info.prev);
  }

  const onNext = () => {
    fetchCharacter(info.next);
  }

  useEffect(() => {
    fetchCharacter(initialurl);
  }, [])
  return (
    <>
      <Navbar brand="Rick and Morty" />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <div className="container">
        <CardPerson character={character} />
      </div>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}

      />
    </>

  );
}

export default App;
