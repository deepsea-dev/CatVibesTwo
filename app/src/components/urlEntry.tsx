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

const fontSize = 20;

const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  height: 60px;
  width: 600px;
  transform: translate(-50%, -50%);
  
  &, * {
    background-color: #383030;
;
  }

  input {
    border: 10px solid red;
    width: 100%;
    height: 100%;
    color: white;
    border: none;
    font-size: ${fontSize}px;
    text-align: center;
    outline: none;
  }

  &:after {
    content: 'Enter a video link (50MB Max.)';
    color: white;
    font-size: ${fontSize}px;
    display: block;
    width: 100%;
    text-align: center;
    top: calc(-55% - ${fontSize/2}px);
    position: relative;
  }
`;