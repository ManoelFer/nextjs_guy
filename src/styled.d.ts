import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string,
            gray_100: string,
            gray_200: string,
            gray_700: string,
            gray_900: string,

            blue_900: string,
            yellow_500: string
        },
        fonts: string[],
        fontSizes: {
            small: string,
            medium: string,
            large: string
        }
    }
}
