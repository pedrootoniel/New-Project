import React, { Fragment } from 'react';
import { Container, Wraper } from './styles'
import Header from '../Header'

// import { Container } from './styles';

function Main() {
	return (

		<Fragment>
			<Header />
			<Container>
				<Wraper>

					<div className="produtos__content content">
						<div className="produtos__item">
							<div className="produtos__logo"><img src="https://www.wlib.com.br/img/logo-wlib.svg" width="134" height="53" alt="WLIB" className="produtos__img" /></div>
							<p className="produtos__descricao">Desenvolvimento de soluções web personalizadas:</p>
							<ul className="produtos__lista">
								<li>Software web</li>
								<li>Websites</li>
								<li>Landing Pages</li>
								<li>Intranets</li>
								<li>Aplicativos</li>
								<li>Desenvolvimento in loco</li>
							</ul>
						</div>
						<div className="produtos__item">
							<div className="produtos__logo"><img src="https://www.wlib.com.br/img/logo-talk.svg" width="108" height="32" alt="WLIB Talk" className="produtos__img" /></div>
							<p className="produtos__descricao">Plataforma de atendimento para call-center.</p>
							<a href="https://www.wtalk.com.br" target="_blank" className="produtos__link button">ACESSE O SITE <i className="iconify" data-icon="mdi-arrow-right"></i></a>
						</div>
						<div className="produtos__item">
							<div className="produtos__logo"><img src="https://www.wlib.com.br/img/logo-finance.svg" width="181" height="34" alt="WLIB Finance" className="produtos__img" /></div>
							<p className="produtos__descricao">Plataforma de gestão financeira, fluxo de caixa e planejamento financeiro.</p>
						</div>
						<div className="produtos__item">
							<div className="produtos__logo"><img src="https://www.wlib.com.br/img/logo-tasks.svg" width="139" height="32" alt="WLIB Tasks" className="produtos__img" /></div>
							<p className="produtos__descricao">Plataforma de suporte ao cliente e gestão de chamados.</p>
						</div>
						<div className="produtos__item">
							<div className="produtos__logo"><img src="https://www.wlib.com.br/img/logo-chatbot.svg" width="189" height="30" alt="Chatbot AI" className="produtos__img" /></div>
							<p className="produtos__descricao">Criação de chatbots com inteligência artificial e integração com serviços.</p>
						</div>
						<div className="produtos__item">
							<div className="produtos__logo"><img src="https://www.wlib.com.br/img/logo-chatpro.svg" width="152" height="30" alt="chatPro" className="produtos__img" /></div>
							<p className="produtos__descricao">Plataforma de multi-atendimento via WhatsApp.</p>
							<a href="https://www.chatpro.com.br" target="_blank" className="produtos__link button">ACESSE O SITE <i className="iconify" data-icon="mdi-arrow-right"></i></a>
						</div>
						<div className="produtos__item">
							<div className="produtos__logo"><img src="https://www.wlib.com.br/img/logo-chatpro-api.svg" width="213" height="25" alt="chatPro API" className="produtos__img" /></div>
							<p className="produtos__descricao">API não-oficial para integrações com WhatsApp.</p>
							<a href="https://api.chatpro.com.br" target="_blank" className="produtos__link button">ACESSE O SITE <i className="iconify" data-icon="mdi-arrow-right"></i></a>
						</div>
						<div className="produtos__item">
							<div className="produtos__logo"><img src="https://www.wlib.com.br/img/logo-aniz.svg" width="82" height="34" alt="Aniz Design" className="produtos__img" /></div>
							<p className="produtos__descricao">Agência parceira na criação de marca e identidade visual.</p>
							<a href="http://www.anizdesign.com.br" target="_blank" className="produtos__link button">ACESSE O SITE <i className="iconify" data-icon="mdi-arrow-right"></i></a>
						</div>
					</div>




					<div className="depoimentos__content content">
						<img src="https://www.wlib.com.br/img/icone-quote.png" alt="" width="86" height="86" className="depoimentos__icone" margi-top="100" />
						<div className="depoimentos__inner1">
							<quote className="depoimentos__quote">O Grupo Viamais cresceu muito após a presença da WLIB. Hoje nós temos todos os processos informatizados, com software totalmente aderente ao nosso negócio, incluindo RH, DP, Financeiro e principalmente o software pra Call Center, que aumentou nossa produtividade.</quote>
							<div className="depoimentos__inner2" id="menu">
								<p className="depoimentos__autor">João Victor Saddi, diretor do <a href="">Grupo Viamais</a></p>
								<a href="" className="depoimentos__link button">PRÓXIMO DEPOIMENTO <i className="iconify" data-icon="mdi-arrow-right"></i></a>
							</div>
						</div>
					</div>



					<div className="portfolio__content content">
						<h1 className="portfolio__titulo1">PORTFOLIO</h1>
						<div className="portfolio-grid">
							<a href="https://www.wlib.com.br/portfolio/grupo-viamais7" className="portfolio-grid__item">

								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/bg_listagem/9.jpg" alt="Grupo Viamais" width="" height="" className="portfolio-grid__bg" />
								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/logotipo/9.png" alt="Grupo Viamais - Portfolio WLIB" width="" height="" className="portfolio-grid__img" />
								<p className="portfolio-grid__tags">
									<span>WLIB</span><span>TALK</span><span>FINANCE</span><span>TASKS</span><span>CHATPRO</span><span>CHATPRO API</span>					</p>
							</a>
							<a href="portfolio/unialfa2" className="portfolio-grid__item">

								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/bg_listagem/10.jpg" alt="UNIALFA" width="" height="" className="portfolio-grid__bg" />
								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/logotipo/10.png" alt="UNIALFA - Portfolio WLIB" width="" height="" className="portfolio-grid__img" />
								<p className="portfolio-grid__tags">
									<span>WLIB</span>					</p>
							</a>
							<a href="portfolio/fadisp" className="portfolio-grid__item">

								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/bg_listagem/11.jpg" alt="FADISP" width="" height="" className="portfolio-grid__bg" />
								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/logotipo/11.png" alt="FADISP - Portfolio WLIB" width="" height="" className="portfolio-grid__img" />
								<p className="portfolio-grid__tags">
									<span>WLIB</span>					</p>
							</a>
							<a href="portfolio/hughesnet" className="portfolio-grid__item">

								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/bg_listagem/12.jpg" alt="HughesNet" width="" height="" className="portfolio-grid__bg" />
								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/logotipo/12.png" alt="HughesNet - Portfolio WLIB" width="" height="" className="portfolio-grid__img" />
								<p className="portfolio-grid__tags">
									<span>WLIB</span><span>TALK</span><span>CHATPRO</span><span>CHATPRO API</span><span>CHATBOT AI</span>					</p>
							</a>
							<a href="portfolio/a3-consultoria" className="portfolio-grid__item">

								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/bg_listagem/13.jpg" alt="A3 Consultoria" width="" height="" className="portfolio-grid__bg" />
								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/logotipo/13.png" alt="A3 Consultoria - Portfolio WLIB" width="" height="" className="portfolio-grid__img" />
								<p className="portfolio-grid__tags">
									<span>WLIB</span>					</p>
							</a>
							<a href="portfolio/honda-cical" className="portfolio-grid__item">

								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/bg_listagem/14.jpg" alt="Honda Cical" width="" height="" className="portfolio-grid__bg" />
								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/logotipo/14.png" alt="Honda Cical - Portfolio WLIB" width="" height="" className="portfolio-grid__img" />
								<p className="portfolio-grid__tags">
									<span>WLIB</span>					</p>
							</a>
							<a href="https://www.wlib.com.br/portfolio/ola-telecom" className="portfolio-grid__item">

								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/bg_listagem/15.jpg" alt="Olá Telecom" width="" height="" className="portfolio-grid__bg" />
								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/logotipo/15.png" alt="Olá Telecom - Portfolio WLIB" width="" height="" className="portfolio-grid__img" />
								<p className="portfolio-grid__tags">
									<span>TALK</span><span>CHATPRO API</span>					</p>
							</a>
							<a href="https://www.wlib.com.br/portfolio/lifebox-burger" className="portfolio-grid__item">

								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/bg_listagem/16.jpg" alt="Lifebox Burger" width="" height="" className="portfolio-grid__bg" />
								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/logotipo/16.png" alt="Lifebox Burger - Portfolio WLIB" width="" height="" className="portfolio-grid__img" />
								<p className="portfolio-grid__tags">
									<span>WLIB</span><span>FINANCE</span><span>CHATPRO API</span>					</p>
							</a>
							<a href="https://www.wlib.com.br/portfolio/casa-das-antenas" className="portfolio-grid__item">

								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/bg_listagem/17.jpg" alt="Casa das Antenas" width="" height="" className="portfolio-grid__bg" />
								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/logotipo/17.png" alt="Casa das Antenas - Portfolio WLIB" width="" height="" className="portfolio-grid__img" />
								<p className="portfolio-grid__tags">
									<span>TALK</span><span>CHATPRO API</span>					</p>
							</a>
							<a href="https://www.wlib.com.br/portfolio/hable" className="portfolio-grid__item">

								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/bg_listagem/18.jpg" alt="Hable" width="" height="" className="portfolio-grid__bg" />
								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/logotipo/18.png" alt="Hable - Portfolio WLIB" width="" height="" className="portfolio-grid__img" />
								<p className="portfolio-grid__tags">
									<span>TALK</span><span>CHATPRO</span>					</p>
							</a>
							<a href="https://www.wlib.com.br/portfolio/clube-telecom" className="portfolio-grid__item">

								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/bg_listagem/19.jpg" alt="Clube Telecom" width="" height="" className="portfolio-grid__bg" />
								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/logotipo/19.png" alt="Clube Telecom - Portfolio WLIB" width="" height="" className="portfolio-grid__img" />
								<p className="portfolio-grid__tags">
									<span>TALK</span><span>CHATPRO API</span>					</p>
							</a>
							<a href="portfolio/meu-seguro-auto" className="portfolio-grid__item">

								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/bg_listagem/20.jpg" alt="Meu Seguro Auto" width="" height="" className="portfolio-grid__bg" />
								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/logotipo/20.png" alt="Meu Seguro Auto - Portfolio WLIB" width="" height="" className="portfolio-grid__img" />
								<p className="portfolio-grid__tags">
									<span>WLIB</span><span>TALK</span><span>CHATPRO</span>					</p>
							</a>
							<a href="https://www.wlib.com.br/portfolio/vitamedic" className="portfolio-grid__item">

								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/bg_listagem/21.jpg" alt="Vitamedic" width="" height="" className="portfolio-grid__bg" />
								<img src="https://www.wlib.com.br/wlib/arqs/portfolio/logotipo/21.png" alt="Vitamedic - Portfolio WLIB" width="" height="" className="portfolio-grid__img" />
								<p className="portfolio-grid__tags">
									<span>WLIB</span></p>
							</a>
						</div>

					</div>


				</Wraper>
			</Container>
		</Fragment>
	)
}

export default Main;