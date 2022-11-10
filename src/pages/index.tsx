import Head from "next/head";

import { Container, ContainerNextLevel, Divider, SectionContent, SessionNextLevel } from "./styles.home.modules";

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

        <Divider />

        <SectionContent>
          <section>
            <h2>Aprenda a criar aplicativos para Android e IOS</h2>
            <span>Você vai descobrir o jeito mais moderno de desenvolver apps nativos para iOS e Android, construindo aplicativos do zero até aplicativos.</span>
          </section>

          <img src="/images/financasApp.png" alt="Conteúdos desenvolvimento de apps" />
        </SectionContent>

        <Divider />

        <SectionContent>
          <img src="/images/webDev.png" alt="Conteúdos desenvolvimento de apps" />

          <section>
            <h2>Aprenda a criar sistemas web</h2>
            <span>Criar sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado.</span>
          </section>
        </SectionContent>
      </Container>
    </>
  )
}
