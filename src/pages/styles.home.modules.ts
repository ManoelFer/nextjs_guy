import styled from 'styled-components'

export const Container = styled.main`
    display: block;
`

export const ContainerNextLevel = styled.div`
    min-height: calc(100vh - 5rem);
    margin: 0 auto;
    max-width: 1120px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        max-width: 640px;
    }
`

export const SessionNextLevel = styled.section`
    max-width: 600px;

    h1 {
        font-size: 3.5rem;
        line-height: 4.5rem;
        font-weight: 900;
        margin-top: 2.5rem;
        color: ${({ theme }) => theme.colors.white};
    }

    span{
        font-size: 1rem;
        line-height: 2.25rem;
        font-weight: 900;
        margin-top: 2.5rem;
        color: ${({ theme }) => theme.colors.white};
    }

    button{
        background-color: ${({ theme }) => theme.colors.blue_900};
        color: ${({ theme }) => theme.colors.white};
        border: 0;
        padding:  1rem 1.8rem;
        border-radius: 7px;
        font-weight: bold;
        margin-top: 2.5rem;
    }
`