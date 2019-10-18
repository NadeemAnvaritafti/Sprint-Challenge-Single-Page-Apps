import React from "react";
import styled from 'styled-components';

const CardDiv = styled.div`
  border: 2px solid #A9D3E9;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 black;
  padding: 2%;
  margin: 2%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const CardImgDiv = styled.div`
  img {
    border-radius: 20px;
  }
`;

export default function CharacterCard(props) {
  return (
    <CardDiv>
      <CardImgDiv>
          <img src={props.img} alt='character'/>
      </CardImgDiv> 
      <h2>{props.name}</h2>
      <h5>Species: {props.species}</h5>
      <p>Location: {props.location}</p>
    </CardDiv>
  );
}
