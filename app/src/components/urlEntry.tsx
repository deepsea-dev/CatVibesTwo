import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

export const UrlEntry: React.FC = () => {
  const [urlEntered, setUrlEntered] = useState<string | undefined>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrlEntered(event.target.value);
  };

  return (
    <StyledInput type="text" value={urlEntered} onChange={handleChange}/>
  );
};

const StyledInput = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: dimgray;
  color: white;
  border: none;
  font-size: 20px;
  text-align: center;
  padding: 16px;
  width: 600px;
  outline: none;
`;