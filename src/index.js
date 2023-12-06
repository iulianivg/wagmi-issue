import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { WagmiConfig } from 'wagmi'

import 'react-toastify/dist/ReactToastify.css';


import {config} from './wagmi/connectors'
import Profile from './Profile'





const GlobalStyles = createGlobalStyle`
  body {
    height: 100%;
    color: black;
  }
`

function App() {


  return (
    <Router>
    <div>

    <GlobalStyles />
    <WagmiConfig config={config}>
    {/* <Web3ReactProvider getLibrary={getLibrary}> */}
          <Switch>  
          

          
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </WagmiConfig>
    {/* </Web3ReactProvider> */}

    </div>
    </Router>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));
