import React, { useState } from 'react'
import { Container, TextSignUp, FormUnform, Button } from './styles'
import { GoTriangleUp } from 'react-icons/go'
import Input from '../../Components/Input'

function SignUp({ history }) {

  const [loading, setLoading] = useState(false)
  const addUser = (inputData) => {

    // {
    //   name: '',
    //   email: '',
    //   password: '',
    //   user: '',
    //   passwordconfirm: ''
    // }

    // name (*): nome do usuário
    // email (*): email do usuário
    // github_user (*): nome de usuário do github
    // password (*): senha do usuário

    setLoading(true)

    const objPost = {
      name: inputData.name,
      email: inputData.email,
      github_user: inputData.user,
      password: inputData.password
    }


    return (
      <Container>
        <GoTriangleUp style={{ position: 'absolute', zIndex: '15', color: '#575A89', right: '15', marginTop: '-10' }} />
        <TextSignUp>Faça cadastro e aproveite!</TextSignUp>

        <FormUnform onSubmit={addUser}>

          <Input type='text' name='name' placeholder='Nome completo' />
          <Input type='email' name='email' placeholder='Email' />
          <Input type='text' name='user' placeholder='Usuário do GitHub' />
          <Input type='password' name='password' placeholder='Senha' />
          <Input type='password' name='passwordconfirm' placeholder='Confirmar Senha' />

          <Button type='submit' >{loading ? 'Carregando...' : 'Criar'}</Button>
        </FormUnform>
      </Container>
    )
  }
}

export default SignUp