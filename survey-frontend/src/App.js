import './App.css';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './pages/admin';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/register'  element={<Register />}/>
          <Route path='/login' element={<LogIn />}/>
          <Route path='/admin' element={<Admin />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
