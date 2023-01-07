import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
// import Card from './components/Card';
import Service from './components/Service';
import Nav from './components/Nav';
import Solution from './components/Solution';
import Technologi from './components/Technologi';

function App() {
  return (
  <> 
    <Nav/>
    <Header/>
    <Service/>
    <Solution/>
    <Technologi/> 
  </>
  );
}

export default App;
 