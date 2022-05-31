import styled from 'styled-components';

export const FooterContent = styled.footer`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`

export const FooterButton = styled.button`
  background-color: ${ (props) => props.bgColor };
  color: ${ (props) => props.colorText };
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 8px;
`