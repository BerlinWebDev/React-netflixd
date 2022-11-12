import Navbar from './components/Navbar'
import './index';
import { Route, Routes} from 'react-router-dom'
import Home from './pages/home'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}


export default App;
