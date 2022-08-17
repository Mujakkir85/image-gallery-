import './App.css';
import Header from './component/Header/Header'
import Nav from './component/Header/Nav'
import AllImages from './component/AllImages/AllImages'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<AllImages></AllImages>}></Route>
      </Routes>
    </div>
  );
}

export default App;
