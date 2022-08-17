import './App.css';
import Header from './component/Header/Header'
import Nav from './component/Header/Nav'
import AllImages from './component/AllImages/AllImages'
import BImage from './component/AllImages/BImage'
import PImage from './component/AllImages/PImage'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<AllImages></AllImages>}></Route>
        <Route path='/b-image' element={<BImage></BImage>}></Route>
        <Route path="/p-image" element={<PImage></PImage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
