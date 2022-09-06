import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import ActiveList from './components/activeList';
import CompleteList from './components/completeList';

export default function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/active" element={<ActiveList />} />
      <Route path="/completed" element={<CompleteList />} />
    </Routes>
  );
}
