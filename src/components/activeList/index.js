import Header from '../header';
import NavBar from '../navBar';
import { Container } from '../../pages/home/styles';

export default function ActiveList() {
  return (
    <Container>
      <Header />
      <NavBar />
      <h1>
        ActiveList
      </h1>
    </Container>
  );
}