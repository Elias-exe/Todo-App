import { NavigationBar } from './styles';

export default function NavBar() {
  return (
    <NavigationBar>
      <button type="button">All</button>
      <button type="button">Active</button>
      <button type="button">Completed</button>
    </NavigationBar>
  );
}
