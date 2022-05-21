import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  { HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from './layout/dashboard';
import Home from './pages/home';
import Catalogue from './pages/catalogue';
import Rental from './pages/rental';


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}>
            <Route index element={<Home/>}/>
            <Route path="catalogue" element={<Catalogue/>}/>
            <Route path="rental" element={<Rental/>}/>
            <Route path="*" element={<Navigate replace to="/"/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
