import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import { createClient } from 'services/prismic'

import techImage from "/public/images/techs.svg"

import { IHomeProps } from "./interfaces.home.modules";

import { Container, ContainerNextLevel, Divider, NextLevelContent, SectionContent, SessionNextLevel } from "./styles.home.modules";

export default function Home({ content }: IHomeProps) {

  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Sujeito Programador</title>
      </Head>
      <Container>
        <ContainerNextLevel>
          <SessionNextLevel>
            <h1>{content.title}</h1>
            <span>{content.sub_title}</span>
            <a href={content.link_action}>
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
            <h2>{content.mobile}</h2>
            <span>{content.mobile_content}</span>
          </section>

          <img src={content.mobile_banner} alt="Conteúdos desenvolvimento de apps" />
        </SectionContent>

        <Divider />

        <SectionContent>
          <img src={content.web_banner} alt="Conteúdos desenvolvimento de apps" />

          <section>
            <h2>{content.title_web}</h2>
            <span>{content.web_content}</span>
          </section>
        </SectionContent>

        <NextLevelContent>
          <Image src={techImage} alt="Tecnologias" />
          <h2>Mais de <span>15 mil</span> já levaram sua carreira ao próxima nível.</h2>
          <span>E você vai perder a chance de evoluir de uma vez por todas?</span>

          <a>
            <button>ACESSAR TURMA!</button>
          </a>
        </NextLevelContent>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = createClient()

  const { data } = await prismic.getByUID('home', "1")
  const {
    title,
    sub_title,
    link_action,
    mobile,
    mobile_content,
    mobile_banner,
    title_web,
    web_content,
    web_banner
  } = data

  const content = {
    title: title[0].text,
    sub_title: sub_title[0].text,
    link_action: link_action.url,
    mobile: mobile[0].text,
    mobile_content: mobile_content[0].text,
    mobile_banner: mobile_banner.url,
    title_web: title_web[0].text,
    web_content: web_content[0].text,
    web_banner: web_banner.url
  }

  return {
    props: {
      content
    },
    revalidate: 60 * 2 //every two minutes
  }
}
