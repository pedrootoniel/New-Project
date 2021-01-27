import React, { useRef, useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Input from '../../Components/Input'
import { Container, FormUnform, WrapperDrop, TextLogin, SignUpButton, Video, Topo, Img, Div } from './styles'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import mp4 from '../../assets/video.mp4'
import Loading1 from '../../assets/loading.svg'

// import { Container } from './styles';

const login_account = gql`
query MyQuery($email: String, $password: String) {
  memb_info(where: {email: {_eq: $email}, password: {_eq: $password}}) {
    email
    id
    name
    password
  }
}
`

export const Login = ({ history, match, instance }) => {

  const [loginaccount] = useMutation(login_account);

  const submitLogin = ({ email, password }) => {
    const { data, loading, error } = useQuery(login_account, {
      fetchPolicy: 'network-only',
      variables: {
        email,
        password
      }
    });

    console.log(data)
  }


  return (
    <Topo>
      <Header />
      <Container>
        <WrapperDrop>
          <FormUnform handleSubmit={submitLogin}>
            <TextLogin>Faça login para continuar</TextLogin>

            <Input className="Inputs"
              type='text' name='email'
              placeholder='Email' />

            <Input className="Inputs"
              type='password'
              name='password'
              placeholder='Senha' />

            <SignUpButton login
              type='submit'>{loading ? 'Carregando...' : 'Entrar'}</SignUpButton>

          </FormUnform>
          <Video
            autoPlay="autoplay"
            src={mp4} autoplay muted loop>
          </Video>

        </WrapperDrop>
      </Container>
      <Footer />
    </Topo>
  )
}

export default Login