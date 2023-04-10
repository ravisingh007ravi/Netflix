import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignUp, LogIn,Home } from './components/AllCompenents'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/SignUp' element={<SignUp />} ></Route>
        <Route path= '/LogIn' element={<LogIn />} ></Route>
        <Route path= '/' element={<Home />} ></Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
