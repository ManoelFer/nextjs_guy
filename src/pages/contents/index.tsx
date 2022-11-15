import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from "react-icons/fi"

import thumbImg from "/public/images/thumb.png"

import { Container, ContainerButtons, Content } from "./styles.module"

function Posts() {
    return (
        <>
            <Head>
                <title>Blog | Sujeito Programador</title>
            </Head>
            <Container>
                <Content>
                    <Link href="/">
                        <Image
                            src={thumbImg}
                            alt="Post"
                            width={720}
                            height={410}
                            quality={100}
                        />
                        <strong>Criando meu primeiro aplicativo</strong>
                        <time>14 JULHO 2021</time>
                        <p>Hoje vamos criar o controle de mostrar a senha no input, uma opção para os nossos formulários de cadastro e login. Mas chega de conversa e bora pro código junto comigo que o vídeo está show de bola!</p>
                    </Link>

                    <ContainerButtons>
                        <div>
                            <button>
                                <FiChevronsLeft size={25} color="#FFF" />
                            </button>
                            <button>
                                <FiChevronLeft size={25} color="#FFF" />
                            </button>
                        </div>

                        <div>
                            <button>
                                <FiChevronsRight size={25} color="#FFF" />
                            </button>
                            <button>
                                <FiChevronRight size={25} color="#FFF" />
                            </button>
                        </div>

                    </ContainerButtons>
                </Content>
            </Container>
        </>
    )
}

export default Posts