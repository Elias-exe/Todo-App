import { Link } from 'react-router-dom';
import { NavigationBar } from './styles';

export default function NavBar() {
  return (
    <NavigationBar>
      <Link to="/">All</Link>
      <Link to="/active">Active</Link>
      <Link to="/completed">Completed</Link>
    </NavigationBar>
  );
}
