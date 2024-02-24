
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DataUse from './component2/process/dataUse';


function App() {
  return (
    <div className="App">
       
       <BrowserRouter>
        <DataUse />
       </BrowserRouter>
    </div>
  );
}

export default App;
