import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import DirectoryCls from './components/DirectoryComponent'
import Directory from './components/functionalApproach/DirectoryComp'
import './App.css';
import { CAMPSITES } from './shared/campsites';
import MainCLS from './components/MainComponent'
import NavbarComponent from './components/functionalApproach/NavbarComp'
import Main from './components/functionalApproach/MainComp'
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         campsites: CAMPSITES
  //     };
  // }
  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainCLS />
      </div>
    </BrowserRouter>
  );
  }
}


const FuncApp = () => {
  // const [campsites, setCampsites] = React.useState({
  //   campsites: CAMPSITES
  // })

  return (
    <div className="App">
      <Main />
      {/* <NavbarComponent />
      <Directory campsites={campsites.campsites}/> */}
    </div>
  );
}

export default App;
