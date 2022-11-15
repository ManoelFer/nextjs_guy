import styled from 'styled-components'

export const Container = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
`

export const Content = styled.div`
    max-width: 720px;
    margin: 5rem auto;

    a{
        display: block;

        & + a {
            margin-top: 2rem;
            padding-top: 2rem;
        }

        time {
            font-size: 1rem;
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.colors.gray_200};
        }

        img{
            max-width: 100%;
            max-height: 410px;
            border: 2px solid ${({ theme }) => theme.colors.blue_900};
            border-radius: 6px;
            border-image: linear-gradient(95deg, #31b4d0, transparent) 1;
        }

        strong {
            display: block;
            font-size: 1.5rem;
            margin: 1rem 0;
            line-height: 2rem;
            color: ${({ theme }) => theme.colors.white};
            transition: color 0.3s;

            :hover {
                color: ${({ theme }) => theme.colors.blue_900};
            }
        }

        p {
            color: ${({ theme }) => theme.colors.white};
            margin-top: 0.5rem;
            line-height: 1.62rem;
        }
    }
`