import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  height:120px;
  background:var(--color-button1);
`

export const Wraper = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-start;
  
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
