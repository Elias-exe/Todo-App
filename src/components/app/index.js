import { ThemeProvider } from 'styled-components';
import { Container } from './styles';
import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import Home from '../../pages/home';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>

  );
}
