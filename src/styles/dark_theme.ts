const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};


export const dark_theme = {
    colors: {
        white: "#FFF",
        gray_100: "#AFAFAF",
        gray_200: "#525252",
        gray_700: "#15171b",
        gray_900: "#111113",

        blue_900: "#1fa4e5",
        yellow_500: "#FFBE16"
    },
    fonts: ["Poppins"],
    fontSizes: {
        small: "1rem",
        medium: "2.3rem",
        large: "3rem"
    },
    devices: {
        mobileS: `(min-width: ${sizes.mobileS})`,
        mobileM: `(min-width: ${sizes.mobileM})`,
        mobileL: `(min-width: ${sizes.mobileL})`,
        tablet: `(min-width: ${sizes.tablet})`,
        laptop: `(min-width: ${sizes.laptop})`,
        laptopL: `(min-width: ${sizes.laptopL})`,
        desktop: `(min-width: ${sizes.desktop})`
    }
}