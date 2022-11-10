import Head from "next/head";

import { Container, ContainerNextLevel, SessionNextLevel } from "./styles.home.modules";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Sujeito Programador</title>
      </Head>
      <Container>
        <ContainerNextLevel>
          <SessionNextLevel>
            <h1>Levando você ao próximo nível!</h1>
            <span>Uma plataforma com cursos que vão do zero até o profissional na pratica, direto ao ponto aplicando o que usamos no mercado de trabalho. 👊</span>
            <a>
              <button>
                COMEÇAR AGORA!
              </button>
            </a>
          </SessionNextLevel>

          <img
            src="/images/banner-conteudos.png"
            alt="Conteúdos Sujeito Programador"
          />
        </ContainerNextLevel>
      </Container>
    </>
  )
}
