import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { TodoProvider } from '../context';
import Rotas from '../../rotas';
import Home from '../../pages/home';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <TodoProvider>
          <Home />
          <Rotas />
        </TodoProvider>
      </ThemeProvider>
    </BrowserRouter>

  );
}
