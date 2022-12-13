import React from 'react'

import { GetServerSideProps } from 'next'

import * as prismicH from '@prismicio/helpers'

import { createClient } from "services/prismic"

import { IPostDetails } from './intefaces.module'

import { ContainerPostDetail } from './styles.module'


export default function Post({ post }: IPostDetails) {
    console.log('post :>> ', post);

    return (
        <ContainerPostDetail>
            <h1>Detalhes dessa postagem</h1>
        </ContainerPostDetail>
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