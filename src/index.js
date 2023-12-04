import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
// import Analytics from './Analytics';
// import Project from './Project';
import { ToastContainer } from 'react-toastify';
import { WagmiConfig } from 'wagmi'
import 'react-toastify/dist/ReactToastify.css';


import ConnectModal from './components/ConnectModal'
import {config} from './wagmi/connectors'
import NavBar from './components/Navbar'

// import Token from './Token';


import './home.css'






const GlobalStyles = createGlobalStyle`
  body {
    // font-family: 'OpenSans';
    height: 100%;
    // background: url('/bg.png');
    // background-size: cover;
    font-family:Relative,sans-serif;
  }
`

function App() {
  return (
    <Router>
    <div>

    <GlobalStyles />
    <WagmiConfig config={config}>
    {/* <Web3ReactProvider getLibrary={getLibrary}> */}
    <ConnectModal />
    <ToastContainer />
          <Switch>  
          

          
          <Route path="/">
            <NavBar />
            <p style={{textAlign:'center'}}>test</p>
          </Route>
        </Switch>
      </WagmiConfig>
    {/* </Web3ReactProvider> */}

    </div>
    </Router>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));
