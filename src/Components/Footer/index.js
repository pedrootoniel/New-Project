import React, { Fragment } from 'react';
import { Container, Wraper, Footer, Span } from './styles'

// import { Container } from './styles';

function Footer1() {
  return (
    <Fragment>
      <Container>
        <Wraper>
          <Footer>
            <Span><i className="iconify" data-icon="cib:visual-studio-code" data-inline="false"></i> &nbsp; WLIB - SOLUÇÕE &nbsp; <i className="iconify" data-icon="cib:visual-studio-code" data-inline="false"></i></Span>
            <Span>O que as suas mãos tiverem que fazer, que o façam com toda a sua força, pois na sepultura, para onde você vai, não há atividade nem planejamento, não há conhecimento nem sabedoria.</Span>
          </Footer>
        </Wraper>
      </Container>
    </Fragment>
  )
}

export default Footer1;