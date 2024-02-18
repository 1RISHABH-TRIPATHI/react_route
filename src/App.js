
import { BrowserRouter,  Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import HoMme from './component/router/home';
import AboUt from './component/router/about';
import DatA from './component/router/data';
import NavBaR from './component/navbar/navbar';
import UseR from './component/router/user';
import FilTer from './component/router/filter';
import ConText from './component/router/nested/context';
import ComPanY from './component/router/nested/company';
import OtherPage from './component/router/nested/otherPage';
import CheNal from './component/router/nested/chenal';
import Login from './component/router/Login';
import Protected from './component/Protected';

function App() {
  return (
    <div className="App">
       
       <BrowserRouter>
        <NavBaR />
        <Routes>
          <Route path='/' element={<Protected Component={HoMme} />} />
          <Route path='/about' element={<Protected Component={AboUt} />} />
          <Route path='/data' element={<DatA />} />
          <Route path='/filter' element={ <FilTer /> } />
          <Route path='/user/:name' element={ <UseR />} />
          <Route path='/*' element={ <Navigate to='/' /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/context/' element={ <Protected Component={ConText} />}>

              <Route path='company' element={ <ComPanY />}/>
              <Route path='otherpage' element={ <OtherPage />}/>
              <Route path='chenal' element={ <CheNal />}/>
            </Route >
        </Routes>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
