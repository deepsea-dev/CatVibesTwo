import React, { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';

export const UrlEntry: React.FC = () => {
  const [urlEntered, setUrlEntered] = useState<string>('');
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const inputElement = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrlEntered(event.target.value);
  };

  return (
    <StyledDiv 
      onClick={() => inputElement.current?.focus()}
    >
      <input 
        type="text"
        value={urlEntered}
        onChange={handleChange}
        ref={inputElement}
        onFocus={() => setIsHidden(true)}
        onBlur={() => setIsHidden(urlEntered !== '')}
      />
      <span className={isHidden ? 'fadeOut' : 'fadeIn'}>Enter a video link</span>
    </StyledDiv>
  );
};

const fontSize = 20;

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
    font-size: ${fontSize}px;
    text-align: center;
    outline: none;
  }

  span {
    content: 'Enter a video link (50MB Max.)';
    color: white;
    font-size: ${fontSize}px;
    display: block;
    width: 100%;
    text-align: center;
    top: calc(-55% - ${fontSize/2}px);
    position: relative;
    cursor: text;

    &.fadeIn {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s linear 0s, opacity 300ms;
    }

    &.fadeOut {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s linear 300ms, opacity 300ms;
    }
  }
`;