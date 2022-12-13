import styled from "styled-components";

export const Container = styled.main`
    display: block;
`

export const Content = styled.div`
    min-height: calc(100vh - 6rem);
    margin: 0 auto;
    width: 1120px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        max-width: 600px;
    }
`

export const SectionText = styled.section`
    max-width: 600px;

    h1{
        color: ${({ theme }) => theme.colors.white};
        font-size: 3rem;
        font-weight: 900;
        margin: 2.5rem 0;
    }

    p {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.white};
        white-space: pre-wrap;
        line-height: 2.25rem;
    }

    a, svg {
        margin-top: 15px;
    }

    svg {
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;
        margin-left: 15px;
    }

    svg:hover {
        color: ${({ theme }) => theme.colors.blue_900};
    }
`