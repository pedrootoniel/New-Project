import styled, { css } from 'styled-components'
import { shade } from 'polished'
import { Form } from '@unform/web'

export const Container = styled.div`
  display:flex;
  justify-content:space-between;
  padding:15px;
  align-items:center;
  height:120px;
  background:var(--color-button1);
`

export const Wraper = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-start;
  
`

// DIV PAI DO LOGIN
export const FormUnform = styled(Form)`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right:560px;
`

// BUTTON DE LOGIN DA LANDINGPAGE
export const SignUpButton = styled.button`
  width: 200px;
  height: 40px;
  border: 0;
  font-size:25px;
  border-radius: 5px;
  margin-top:5px;
  background: transparent;
  color: var(--color-white);
  outline: none;
  transition: 0.2s;
  cursor: pointer;
  :hover{
    background: ${shade(0.2, '#575A89')};
  }
  ${props => props.login && css`
    width: 100px;
    align-self: flex-start;
    margin-top: 10px;
  `}
`

export const Img = styled.img`
  display:flex;
  padding:30px;
  
`
export const LinkA = styled.a`
  outline:none;
  text-decoration:none;

`
export const Ul = styled.ul`
    display:flex;

  li{
    display:flex;
    padding:10px;
    font-size:25px;
    font-family: Arial, Helvetica, sans-serif;
    &:hover{
      background:var(--color-button);
    }
    
    a{
      outline:none;
      text-decoration:none;
      color:var(--color-white);
      
    }
  }

`
