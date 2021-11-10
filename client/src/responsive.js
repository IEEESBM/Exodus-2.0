import React, {Component, useState, useEffect} from 'react';

import styled from 'styled-components';

const Main = styled.div`
    align-content: center;
    width: 100%;
    height: 100vh;
    margin: auto;
    background-color: #1B262C;  
    @media (min-width: 1024px) {
    display: none;
  } 
    `;

    const Image = styled.div`
    height: 100%;
    width: 50%;
    text-align:  center;
    display: flex;
    justify-content: center;
  align-items: center;
     img { 
     width: 60%;
     border-radius: 60%;
     margin:auto;
     }
  
    `;

    const Container = styled.div`
    display: flex;
    flex-flow: row;

    display: flex;
    justify-content: center;
  align-items: center;
    height: 100%;
    color: white;
    
    `;

    const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: center;
    color: white;
    justify-content: center;
    font-size: 1rem;
    line-height: 1.4rem;
    letter-spacing: 1.2px;
    align-items: flex-start;
    div{
      color: white;
      border: none;
    }
    `;



export default function ReponsiveScreen(Props) {

    return (
      <Main>
      <Container>
          <TextDiv>
        Please open the website on your laptop for the best experience
    </TextDiv>
      </Container>
        
  </Main>

    );
    
}

