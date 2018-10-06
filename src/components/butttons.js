import styled from 'styled-components'
import React, { Component } from 'react';


 const GihubLabel = styled.div`
  right: 5px;
  top: 5px;
  text-align: center;
  padding: 10px;
  color: black;
  background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
  border-radius:20px;
  font-weight: bold;
  width: 400px;
  height: 100px;
  position: absolute;
  a{
    &:visited{
      color: black;
    }
    &:link{
      color: black;
    }
  }
`;
export default GihubLabel
