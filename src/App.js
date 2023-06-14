import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Input from './Components/Input';
import More from './Components/More';

function App() {
  return (
    <div>
        <h1 className='welcome'>Welcome to your calculator</h1>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Input />}/>
            <Route path='/more' element={<More />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
