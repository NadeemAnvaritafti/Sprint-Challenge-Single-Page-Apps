import React, { useState } from "react";
import styled from 'styled-components';


const FormSection = styled.section`
  input {
    border: 2px solid #8ED043;
    border-radius: 10px;
    padding: 2%;
  }
`;

export default function SearchForm(props) {
 
  return (
    <FormSection>
      <form>
        <input
            type="text"
            name="search"
            placeholder='Search By Name'
            value={props.value}
            onChange={props.changeHandler}
            />
      </form>
    </FormSection>
  );
}
