import { useRouter } from "next/router"

interface IItemsMenu {
    route: string;
    label: string;
    active: boolean;
}

const itemsMenu = [
    {
        route: '/',
        label: 'Home',
        active: false,
    },
    {
        route: '/contents',
        label: 'Conteúdos',
        active: false,
    },
    {
        route: '/who_we_are',
        label: 'Quem somos?',
        active: false,
    }
]

export function itemsMenuHandled(): IItemsMenu[] {
    const { asPath } = useRouter()

    const position = itemsMenu.findIndex((item) => item.route == asPath)

    itemsMenu.forEach((_item, index) => {
        if (index == position) {
            itemsMenu[index].active = true
        } else {
            itemsMenu[index].active = false
        }
    })

    return itemsMenu
}