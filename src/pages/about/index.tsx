import React from 'react'

import { GetStaticProps } from 'next'
import Head from 'next/head'

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import * as prismicH from '@prismicio/helpers'

import { createClient } from 'services/prismic'

import { IAboutProps } from './interfaces.module'

import { Container, Content, SectionText } from './styles.module'


export default function About({ about }: IAboutProps) {
    return (
        <>
            <Head>
                <title>{about.title}</title>
            </Head>
            <Container>
                <Content>
                    <SectionText>
                        <h1>{about.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: about.description }} />

                        <a href={about.youtube}>
                            <FaYoutube size={30} />
                        </a>
                        <a href={about.instagram}>
                            <FaInstagram size={30} />
                        </a>
                        <a href={about.facebook}>
                            <FaFacebook size={30} />
                        </a>
                        <a href={about.linkedin}>
                            <FaLinkedin size={30} />
                        </a>
                    </SectionText>

                    <img
                        src={about.banner}
                        alt="Sobre o mano dev"
                    />
                </Content>
            </Container>
        </>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const client = createClient()

    const { data } = await client.getSingle('about')

    const about = {
        title: prismicH.asText(data.title),
        description: prismicH.asHTML(data.description),
        banner: data.banner.url,
        facebook: data.facebook.url,
        instagram: data.instagram.url,
        youtube: data.youtube.url,
        linkedin: data.linkedin.url,
    }

    return {
        props: {
            about
        },
        revalidate: 60 * 15 // 15 minutes revalidate
    }
}