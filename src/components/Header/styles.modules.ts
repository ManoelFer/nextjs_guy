import styled, { css } from 'styled-components'

import { IStylesLink } from './interfaces.module'


export const ContainerHeader = styled.header`
    height: 6rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200};
    background-color: ${({ theme }) => theme.colors.gray_700};

    @media (max-width: 870px){
        height: 11rem;
        padding: 0.5rem 0;
    }
`

export const ContentHeader = styled.div`
    max-width: 1120px;
    height: 6rem;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;

    img{
        cursor: pointer;
    }

    nav{
        margin-left: 5rem;
        height: 6rem;
    }


    @media (max-width: 870px){
        display: flex;
        flex-direction: column;

        nav{
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    }
`

export const LinkStyled = styled.a<IStylesLink>`
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 6rem;
    line-height: 6rem;
    color: ${({ theme }) => theme.colors.gray_100};
    transition: color 0.2s;

    & + a {
        margin-left: 2rem;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }

    ${({ active }) => active && css`
        color: ${({ theme }) => theme.colors.yellow_500};
        font-weight: bold;
    `}
`

export const ReadyButton = styled.a`
    margin-left: auto;
    height: 3rem;
    border-radius: 3rem;
    background-color: ${({ theme }) => theme.colors.blue_900};
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    transition: filter 0.2s;

    &:hover{
        filter: brightness(1.1);
    }

    @media (max-width: 870px){
        display: none;
    }
`