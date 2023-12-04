

import * as React from "react";
import * as ReactDOM from "react-dom";



import 'react-toastify/dist/ReactToastify.css';
import {useAccount, useNetwork   } from 'wagmi'






function NavBar() {




  const { address, connector, isConnected } = useAccount()
  const { chain } = useNetwork()





  const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

  const truncateEthAddress = (address) => {
    if(address !== undefined){
    const match = address.match(truncateRegex);
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
    }
  };

  return (
<nav class="navbar navbar-expand-lg navbar-dark" style={{background:'black'}}>
  <a class="navbar-brand" href="/" style={{marginLeft:"3%"}}><h2 style={{color:'white'}}>Some Logo</h2> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" style={{letterSpacing:'.05rem'}}>
        {/* <a class="nav-link" href="/">Dashboard </a> */}
        <a class="nav-link" href="/" style={{ textDecoration:'none', color:'#a0a3c4'}}>Home</a>
      </li>
     



      {/* <li class="nav-item">
        <a class="nav-link" href="https://stake.mintstarter.app">Staking</a>
      </li> */}

      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}

    </ul>
    <div class="d-flex" style={{minWidth:'120px'}}>

        {address && isConnected ?         <button class="btn btn-txt"  data-toggle="modal" data-target="#exampleModal" style={{border:'1px solid hsla(0,0%,100%,.161)', width:'100%', background:'#17181e', color:'white'}} type="button">   <span> {truncateEthAddress(address)} </span>
        </button>
        :         <button class="btn btn-text"  data-toggle="modal" data-target="#exampleModal" style={{border:'1px solid hsla(0,0%,100%,.161)', width:'100%', color:'white'}} type="button">  <span> Connect Wallet </span></button>
      }
    </div>

  </div>


</nav>


  ); 
}

export default NavBar;