import React from "react";
import styled from "styled-components";

const Modal = ({width, height, children}) => {
    return (
        <Background>
            <Content width={width} height={height}>
                {children}
            </ Content>
        </Background>
    );
};

export default Modal;

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  
  background-color: (255, 255, 255, 0.5);
`;

const Content = styled.div`
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};
  position: relative;
  overflow: auto;
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: beige;
`;