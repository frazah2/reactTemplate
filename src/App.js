
import './App.css';
import Head from './components/header/Header';
import Maincontent from './components/main/Main';
import Nav from './components/navbar/Nav';

function App() {
  return (
    <div className='full'>
        <Nav/>
        <Head title="About Us"/>
        <Maincontent/>
        <Head title="About the studio" className="foot"/>
    </div>
  );
}

export default App;
