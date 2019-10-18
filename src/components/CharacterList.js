import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';


const CharacterListSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5%;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [list, setList] = useState([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
        const characters = response.data.results.filter(el => 
            el.name.toLowerCase().includes(search.toLowerCase())
            );
        console.log("API Data: ", response.data.results);
        setList(characters);
    })
    .catch(error => {
        console.log('Error: ', error);
    })
  }, [search]);

  const changeHandler = event => {
    setSearch(event.target.value);
};

  return (
    <CharacterListSection className="character-list">
      <SearchForm changeHandler={changeHandler} value={search}/>
      {list.map(el => (
          <CharacterCard key={el.id} name={el.name} species={el.species} location={el.location.name} img={el.image} />
      ))}
    </CharacterListSection>
  );
}
