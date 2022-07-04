import { Container } from './styles';
import Header from '../header';
import NavBar from '../navBar';
import SearchBar from '../searchBar';

export default function Home() {
  return (
    <Container>
      <Header />
      <NavBar />
      <SearchBar />
    </Container>

  );
}
