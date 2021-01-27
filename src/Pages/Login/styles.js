import styled, { css } from 'styled-components'
import { shade } from 'polished'
import { Form } from '@unform/web'

export const Topo = styled.div`
  display:flex;
  height: 100%;
  flex-direction:column;
`
export const Container = styled.div`
  display:flex;
	flex:1;
  justify-content:center;
  align-items:center;
  position:relative;
`
export const WrapperDrop = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:30px;
  height:400px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
// DIV PAI DO LOGIN
export const FormUnform = styled(Form)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color:var(--color-background-geral);
    padding: 0 50px;
    width:700px;
    height: 100%;
    border-radius:30px;
    opacity:80%;
    .Inputs{
      width:300px;
    }
`
export const Video = styled.video`
position: absolute;
  right: 0;
  bottom: 0;
  top:0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index:-1;
`
export const TextLogin = styled.p`
  display:flex;
  justify-content:center;
  align-items:center;
  padding-left: 5px;
  color: var(--color-black);
  font-size: 20px;
  font-weight: 500;
  ${props => props.subtitle && css`
    padding: 0 0 0 90px;
    width: 525px;
    font-size: 22px;
  `}
  `
// BUTTON DE LOGIN DA LANDINGPAGE
export const SignUpButton = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 200px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  background: var(--color-button);
  color: var(--color-white);
  outline: none;
  transition: 0.2s;
  cursor: pointer;
  :hover{
    background: ${shade(0.2, '#575A89')};
  }
  ${props => props.login && css`
    width: 100px;
    margin-top: 10px;
  `}
`
export const Div = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
  background-color:var(--color-text);
`
export const Img = styled.img`
  display:flex;
`