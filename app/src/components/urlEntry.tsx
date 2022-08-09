import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

export const UrlEntry: React.FC = () => {
  const [urlEntered, setUrlEntered] = useState<string | undefined>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrlEntered(event.target.value);
  };

  return (
    <StyledDiv>
      <input 
        type="text"
        value={urlEntered}
        onChange={handleChange}
      />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  height: 60px;
  width: 600px;
  transform: translate(-50%, -50%);
  
  &, * {
    background-color: dimgray;
  }

  input {
    flex-grow: 1;
    margin: 16px;
    color: white;
    border: none;
    font-size: 20px;
    text-align: center;
    outline: none;
  }

  /* &:after {
    content: 'sdfsdfsdfsdf';
    display: block;
    width: 100px;
    height: 100px;
    border: 10px solid red;
  } */
`;