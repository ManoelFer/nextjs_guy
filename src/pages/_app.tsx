import type { AppProps } from 'next/app'

import GlobalStyle from 'styles/global'
import { ThemeProvider } from 'styled-components';
import { dark_theme } from 'styles/dark_theme';
import { Header } from 'components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={dark_theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
