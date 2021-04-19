import './App.css';
import CardPage from './components/cardpage/cardpage';
import Footer from './components/footer/footer';
import NavbarHeader from './components/header/navheader/navbarheader';
import TopHeader from './components/header/topheader/topheader';

// import MainContainer from './components/mainbody/maincontainer';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <NavbarHeader />
      {/* <MainContainer /> */}
      <CardPage />
      <Footer />
    </div>
  );
}

export default App;
