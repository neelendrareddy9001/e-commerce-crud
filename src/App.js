import './App.css';
import CardDetails from './components/CardDetails';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route} from 'react-router-dom';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Cards/>} />
        <Route path='/cart/:id' element={<CardDetails/>} />
      </Routes>
    </>
  );
}

export default App;
