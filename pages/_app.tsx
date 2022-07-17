import type { AppProps } from 'next/app'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Header from '../src/components/Header';
import { Container } from '@mui/system';
import Sidebar from '../src/components/Sidebar';
import Footer from '../src/components/Footer';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 900,
      lg: 1024,
      xl: 1400,
    }
  },
  typography: {
    h1: { fontSize: 48 },
    h2: { fontSize: 40 },
    h3: { fontSize: 32 },
    h4: { fontSize: 24 },
    h5: { fontSize: 16 },
    h6: { fontSize: 8 },
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container maxWidth='lg'>
        <Header/>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column',
            sm: 'row'
          }
          
        }}>
          <Component {...pageProps} />
          <Sidebar/>
        </Box>
        <Footer/>
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
