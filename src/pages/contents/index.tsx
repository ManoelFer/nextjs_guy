import { useState } from 'react'

import { GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from "react-icons/fi"

import { paginate } from 'shared/utils'

import { createClient } from "services/prismic"

import { IPostsProps } from './interface.contents.module'

import { Container, ContainerButtons, Content } from "./styles.module"


export default function Posts({ posts: postsBlog }: IPostsProps) {
    const perPage = 3
    const totalPages = Math.ceil(postsBlog.length / perPage)
    const [currentPage, setCurrentPage] = useState(1)
    const [posts, setPosts] = useState(paginate(postsBlog, perPage, currentPage) || [])


    const nextPost = (jumpToPage: number) => {
        setCurrentPage(currentPage + jumpToPage)
        setPosts(paginate(postsBlog, perPage, currentPage + jumpToPage))
    }

    function backPost(jumpToPage: number) {
        setCurrentPage(currentPage - jumpToPage)
        setPosts(paginate(postsBlog, perPage, currentPage - 1))
    }

    return (
        <>
            <Head>
                <title>Blog | Sujeito Programador</title>
            </Head>
            <Container>
                <Content>
                    {posts.map(({ slug, cover, title, updatedAt, description }) => (
                        <Link key={slug} href={`/contents/${slug}`}>
                            <Image
                                src={cover}
                                alt={title}
                                width={720}
                                height={410}
                                quality={100}
                                placeholder='blur'
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0rAcAAQcAwniY66EAAAAASUVORK5CYII="
                            />
                            <strong>{title}</strong>
                            <time>{updatedAt}</time>
                            <p>{description}</p>
                        </Link>
                    ))}

                    <ContainerButtons>
                        {
                            currentPage >= 2 && (
                                <div>
                                    <button onClick={() => backPost(2)}>
                                        <FiChevronsLeft size={25} color="#FFF" />
                                    </button>
                                    <button onClick={() => backPost(1)}>
                                        <FiChevronLeft size={25} color="#FFF" />
                                    </button>
                                </div>
                            )
                        }

                        {
                            currentPage < totalPages && (
                                <div>
                                    <button onClick={() => nextPost(2)}>
                                        <FiChevronsRight size={25} color="#FFF" />
                                    </button>
                                    <button onClick={() => nextPost(1)}>
                                        <FiChevronRight size={25} color="#FFF" />
                                    </button>
                                </div>
                            )
                        }
                    </ContainerButtons>
                </Content>
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const client = createClient()

    const result = await client.getAllByType('post', {
        orderings: {
            field: 'document.last_publication_date',
            direction: 'desc',
        },
        fetch: ["post.title", "post.description", "post.cover"]
    })

    const posts = result.map((post) => {
        return {
            slug: post.uid,
            title: post.data.title[0].text,
            description: post.data.description.find((content: any) => content.type === 'paragraph')?.text ?? '',
            cover: post.data.cover.url,
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return {
        props: {
            posts
        },
        revalidate: 60 * 2 //every two minutes
    }
}