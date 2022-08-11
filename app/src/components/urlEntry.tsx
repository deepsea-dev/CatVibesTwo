import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

export const UrlEntry: React.FC = () => {
  const [urlEntered, setUrlEntered] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrlEntered(event.target.value);
  };

  return (
    <StyledDiv 
      data-testid="url-entry"
    >
      <input 
        type="text"
        value={urlEntered}
        onChange={handleChange}
        placeholder='Enter a video link (50MB Max.)'
        data-testid="url-entry-input"
      />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  height: 50px;
  width: 800px;
  transform: translate(-50%, -50%);
  
  &, * {
    background-color: #383030;
  }

  input {
    border: 10px solid red;
    width: 100%;
    height: 100%;
    color: white;
    border: none;
    font-size: 20px;
    text-align: center;
    outline: none;

    ::placeholder {
      color: white;
      opacity: 1;
    }
  }
`;