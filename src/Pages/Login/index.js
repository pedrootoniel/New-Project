import React from 'react';
import { Container, Form, Wraper, Span, Input, Button, Topo, Video } from './styles'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import mp4 from '../../assets/video.mp4'

// import { Container } from './styles';

function Login() {
  return (
    <Topo>
      <Header />
      <Container>
        <Wraper>
          <Form>
            <Span>Fazer Login
            <Input type="email" placeholder="Nome de usuário" />
              <Input type="password" placeholder="Sua senha" />
              <Button >Entrar</Button></Span>
            <Video
              autoPlay="autoplay"
              src={mp4} autoplay muted loop>
            </Video>
          </Form>
        </Wraper>
      </Container>
      <Footer />
    </Topo>
  )
}


export default Login;