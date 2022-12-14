import React from 'react'

import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import * as prismicH from '@prismicio/helpers'

import { createClient } from "services/prismic"

import { IPostDetails } from './intefaces'

import { ContainerPostDetail, Content, Description } from './styles'


export default function Post({ post }: IPostDetails) {
    console.log('post :>> ', post);

    return (
        <>
            <Head>
                {post.title}
            </Head>
            <ContainerPostDetail>
                <Content>
                    <Image
                        quality={100}
                        src={post.cover}
                        width={720}
                        height={410}
                        alt={post.title}
                        placeholder="blur"
                        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0rAcAAQcAwniY66EAAAAASUVORK5CYII='
                    />

                    <h1>{post.title}</h1>
                    <time>{post.updatedAt}</time>
                    <Description dangerouslySetInnerHTML={{ __html: post.description }}></Description>
                </Content>
            </ContainerPostDetail>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    //@ts-ignore
    const { slug } = params
    const client = createClient()

    const { data, last_publication_date } = await client.getByUID('post', slug)

    const post = {
        slug: slug,
        title: prismicH.asText(data.title),
        description: prismicH.asHTML(data.description),
        cover: data.cover.url,
        updatedAt: new Date(last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }),
    }

    return {
        props: {
            post
        }
    }
}