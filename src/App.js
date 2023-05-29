

import './App.css';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import EditUser from './components/EditUser';
import LoginUser from './components/LoginUser';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/all" element={<AllUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

