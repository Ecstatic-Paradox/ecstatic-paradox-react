import Home from './home/Home';
import './index.css'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';
import Publications from './publications/Publications';

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/publications" component={Publications}/>

    </Switch>
    </BrowserRouter>
  
    <Footer/>
    </>
  );
}

export default App;
