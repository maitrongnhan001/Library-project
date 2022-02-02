import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/pages/main-page/main-page';
import AdminPage  from './components/pages/admin-page/admin-page';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage/>} ></Route>
        <Route path="/admin/" element={<AdminPage/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
