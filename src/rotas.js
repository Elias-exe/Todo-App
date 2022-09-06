import { Route, Routes } from 'react-router-dom';
import ActiveList from './components/activeList';
import Home from './pages/home';

export default function Rotas() {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/active" component={ActiveList} />
    </Routes>
  );
}
