import React, { useState, Fragment } from 'react'

import 'react-router-dom'
import SignUp from '../../Pages/Singup'
import { Container, Wraper, Img, LinkA, Ul, SignUpButton } from './styles'
import Logo from '../../assets/logo.svg'



function Header({ history }) {

  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <Fragment>
      <Container>
        <Wraper>
          <LinkA
            href="https://www.wlib.com.br/">
            <Img src={Logo} />
          </LinkA>


          <Ul>

            <li>
              <a href="google.com">

                Inicio
          </a>
            </li>
            <li> <a href="google.com">
              Produtos
          </a>
            </li>
            <li> <a href="google.com">
              Clientes
          </a>
            </li>

          </Ul>
        </Wraper>
        <Ul>
          <li> <a href="google.com">
            Fazer Login
          </a>
          </li>
          <SignUpButton onClick={() => setShowSignUp(!showSignUp)}>Criar uma conta</SignUpButton>
          {
            showSignUp &&
            <SignUp setShowSignUp={setShowSignUp} history={history} />
          }
        </Ul>
      </Container>
    </Fragment>
  )
}

export default Header;