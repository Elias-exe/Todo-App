import { Container } from './styles';

export default function SearchBar() {
  return (
    <Container>
      <input type="text" placeholder="add details" />
      <button type="button">Add</button>
    </Container>
  );
}
