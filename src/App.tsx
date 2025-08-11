import { UserPage } from './pages/usersPage';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { BookPage } from './pages/booksPage';

function App() {
  return (
      
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/utenti" replace/>} />
        <Route path="/utenti" element={<UserPage />} />
        <Route path="/libri" element={<BookPage />} />
        <Route path="*" element={<div>Pagina non trovata</div>} />
      </Routes>
    </BrowserRouter>
     

  );
}

export default App;
