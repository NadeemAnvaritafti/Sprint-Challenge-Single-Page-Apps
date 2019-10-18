import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
`;
const HeaderTitle = styled.div`
  width: 80%;
  text-align: left;
  display: flex;
  justify-content: flex-start;
`;
const HomeDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20%;
`;

export default function Header() {
  return (
    <HeaderDiv className="ui centered">
      <HeaderTitle>
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </HeaderTitle>
      <HomeDiv>
          <Link to='/'>
          HOME
          </Link>
      </HomeDiv>
    </HeaderDiv>
  );
}
