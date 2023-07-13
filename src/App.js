import './App.css';
import Card from './components/Card';
import CardDetails from './components/CardDetails';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Card/>} />
        <Route path='/cart' element={<CardDetails/>} />
      </Routes>
    </>
  );
}

export default App;
