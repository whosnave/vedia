import '../src/App.css'
import Navbar from './Components/Navbar/Navbar';
import Content1 from './Components/Content-1/Content-1';
import Content2 from './Components/Content-2/Content-2';
import Content3 from './Components/Content-3/Content-3';
import Footer from './Components/Footer/Footer';


function App () {
  return(
    <>
    <Navbar/>
    <Content1/>
    <Content2/>
    <Content3/>
    <Footer/>
    </>
  );
};

export default App;