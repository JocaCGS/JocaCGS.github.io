import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Feed from '../pages/Feed';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />          {/* Página inicial */}
        <Route path="/feed" element={<Feed />} />    {/* Página Feed */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
