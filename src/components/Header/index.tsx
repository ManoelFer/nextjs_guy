import Image from 'next/image'
import Link from 'next/link'

import logo from '/public/images/logo.svg'

import { ContainerHeader, ContentHeader, ReadyButton } from './styles.modules'

export const Header = () => {
    return (
        <ContainerHeader>
            <ContentHeader>
                <a>
                    <Image src={logo} alt="sujeito programador logo" />
                </a>

                <nav>
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/">
                        Conteúdos
                    </Link>
                    <Link href="/">
                        Quem somos?
                    </Link>
                </nav>

                <ReadyButton type="button" href='https://sujeitoprogramador.com'>COMEÇAR</ReadyButton>

            </ContentHeader>
        </ContainerHeader>
    )
}