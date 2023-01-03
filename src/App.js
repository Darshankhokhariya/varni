import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Card from './components/Card';
import Service from './components/Service';
import Nav from './components/Nav';
import Solution from './components/Solution';

function App() {
  return (
  <> 
    <Nav/>
    <Header/>
    {/* <Card/> */}
    <Service/>
    <Solution/>

  </>
  );
}

export default App;
 