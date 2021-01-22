import styled from 'styled-components';

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
export const Wraper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:100px;
  border-radius:30px;
  height:400px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
export const Form = styled.div`
    background-color: var(--color-purple);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
    border-radius:30px;
`;
export const Span = styled.span`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  font-size:30px;
  padding:200px;
  color:var( --color-purple3);

  
`;
export const Input = styled.input`
  display:flex;
  width:300px;
  margin-top:30px;
  padding:20px;
  outline:none;
  border-radius:30px;
  
`;
export const Button = styled.button`
    border-radius: 20px;
    border: 1px solid green;
    background-color: var(--color-button1);
    color: var(--color-white);
    font-size: 12px;
    font-weight: bold;
    padding: 14px 35px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top:30px;
  &:hover{
    background-color:var(--color-purple2);
    color:var(--color-white);
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