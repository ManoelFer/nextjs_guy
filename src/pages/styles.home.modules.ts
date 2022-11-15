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


    @media(${({ theme }) => theme.devices.mobileS}){
        flex-direction: column;
        min-height: 0;

        img {
            margin: auto;
            max-width: 500px;
        }

        div h1{
            font-size: ${({ theme }) => theme.fontSizes.large};
        }

        div h2{
            font-size: ${({ theme }) => theme.fontSizes.small};
        }
    }

    @media(${({ theme }) => theme.devices.tablet}){
        img {
            max-width: 600px;
        }

        div h1{
            font-size: ${({ theme }) => theme.fontSizes.large};
        }

        div h2{
            font-size: ${({ theme }) => theme.fontSizes.medium};
        }
    }


    @media(${({ theme }) => theme.devices.laptop}){
        flex-direction: row;
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

    @media(${({ theme }) => theme.devices.mobileS}){
        padding: 0 2rem;

        button {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media(${({ theme }) => theme.devices.tablet}){
        padding: 0 2rem;

        button {
            display: block;
        }
    }
`

export const Divider = styled.hr`
    width: 100%;
    bottom: 0;
    height: 1px;
    border-color: ${({ theme }) => theme.colors.gray_200};
`

export const SectionContent = styled.div`
    margin: 5.5rem auto;
    max-width: 1120px;
    display: flex;
    align-items: center;
    justify-content: center;

    section{
        max-width: 670px;
    }

    img {
        max-width: 550px;
    }

    h2 {
        font-size: 2.2rem;
        line-height: 4.5rem;
        font-weight: 900;
        margin-top: 2.2rem;
        color: ${({ theme }) => theme.colors.white};
    }

    span{
        font-size: 1rem;
        line-height: 2.25rem;
        color: ${({ theme }) => theme.colors.white};
    }

    @media(${({ theme }) => theme.devices.mobileS}){
        img {
            max-width: 350px;
        }

        flex-direction: column;
        padding: 0 2rem;
        margin-top: 2rem;
    }

    @media(${({ theme }) => theme.devices.tablet}){
        flex-direction: column;
        padding: 0 2rem;
    }

    @media(${({ theme }) => theme.devices.laptop}){
        flex-direction: row;
        padding: 0 2rem;
    }
`

export const NextLevelContent = styled.div`
    max-width: 1120px;
    margin: 6rem auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h2{
        font-size: 2.8rem;
        line-height: 4.5rem;
        font-weight: 900;
        color: ${({ theme }) => theme.colors.white};

        span {
            font-size: 2.8rem;
            line-height: 4.5rem;
            font-weight: 900;
            color: ${({ theme }) => theme.colors.blue_900};
        }
    }

    span{
        font-size: ${({ theme }) => theme.fontSizes.small};
        line-height: 2.25rem;
        color: ${({ theme }) => theme.colors.white};
    }

    button {
        background-color: ${({ theme }) => theme.colors.blue_900};
        border: 0;
        padding: 1rem 1.8rem;
        margin-top: 2.5rem;
        border-radius: 6px;
        color:  ${({ theme }) => theme.colors.white};
        font-weight: bold;
    }

    @media(${({ theme }) => theme.devices.mobileS}){
        padding: 0 2rem;
    }

    @media(${({ theme }) => theme.devices.tablet}){
        padding: 0 2rem;
    }

    @media(${({ theme }) => theme.devices.laptop}){
        padding: 0 2rem;
    }
`
