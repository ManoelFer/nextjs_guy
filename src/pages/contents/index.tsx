import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import thumbImg from "/public/images/thumb.png"

import { Container, Content } from "./styles.module"

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
                </Content>
            </Container>
        </>
    )
}

export default Posts