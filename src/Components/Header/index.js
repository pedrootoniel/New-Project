import React, { Fragment } from 'react';
import { Container, Wraper, Img, LinkA, Ul } from './styles'
import Logo from '../../assets/logo.svg'




// import { Container } from './styles';

function Header() {
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
            <li> <a href="google.com">
              Fazer Login
          </a>
            </li>
          </Ul>

        </Wraper>
      </Container>
    </Fragment>
  )
}

export default Header;