import './App.css';
import CardPage from './components/cardpage/cardpage';
import Footer from './components/footer/footer';
import NavbarHeader from './components/header/navheader/navbarheader';
import TopHeader from './components/header/topheader/topheader';
import MainContainer from './components/mainbody/maincontainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <TopHeader />
        <NavbarHeader />
        <Switch>
          <Route exact path='/'><MainContainer /></Route>
          <Route path='/cardpage' component={CardPage}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
