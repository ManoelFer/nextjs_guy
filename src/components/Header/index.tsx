import Image from 'next/image'

import logo from '/public/images/logo.svg'
import { itemsMenuHandled } from 'shared/constants/itemsMenu'

import { ContainerHeader, ContentHeader, LinkStyled, ReadyButton } from './styles.modules'

export const Header = () => {
    const links = itemsMenuHandled()

    return (
        <ContainerHeader>
            <ContentHeader>
                <a>
                    <Image src={logo} alt="sujeito programador logo" />
                </a>

                <nav>
                    {links.map(({ active, label, route }) => (
                        <LinkStyled
                            key={label}
                            href={route}
                            active={active}
                        >
                            {label}
                        </LinkStyled>
                    ))}
                </nav>

                <ReadyButton type="button" href='https://sujeitoprogramador.com'>COMEÇAR</ReadyButton>

            </ContentHeader>
        </ContainerHeader>
    )
}