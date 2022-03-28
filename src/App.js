import logo from './logo.svg';
import './App.css';
import { Tab } from './components/tabs/tab.js';

const TABDATA = [{
  id: "01",
  title: "Tab 01",
  isActive: true,
  text: "Conteudo tab 01"
},
{
  id: "02",
  title: "Tab 02",
  isActive: false,
  text: "Conteudo tab 02"
},
{
  id: "03",
  title: "Tab 03",
  isActive: false,
  text: "Conteudo tab 03"
}];

function App() {
  return (
    <div>
      <h5 className='text-center py-4'>Exercicio 02 - Tabs React</h5>
      <Tab data={TABDATA}/>
    </div>
  );
}

export default App;
