import * as React from "react";
import * as ReactDOM from "react-dom";
import {useRef} from 'react';


import "react-toastify/dist/ReactToastify.css";
import { useConnect, useAccount, useDisconnect, useNetwork } from 'wagmi'




function ConnectModal() {
 
  const { address, connector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } =
  useConnect()
  const { disconnect } = useDisconnect()

  const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

  const truncateEthAddress = (address) => {
    if (address !== undefined) {
      const match = address.match(truncateRegex);
      if (!match) return address;
      return `${match[1]}…${match[2]}`;
    }
  };
  const myRefname= useRef(null);
  const { chain } = useNetwork()





  const customConnect = async() => {
    // connect({connector: connectors[3]});
    console.log('err is ', error, isLoading, pendingConnector)
    connect({connector: connectors[2]});
    console.log('err is ', error, isLoading, pendingConnector, connectors[2])
  }

  return (
      <div>
        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{background:'rgba(40, 13, 95, 0.6)'}}
        >
          <div class="modal-dialog" role="document" style={{width:"100%", maxWidth:'432px'}}>
            <div class="modal-content" style={{background:'#16182e'}}>
              <div class="modal-header" style={{background:'#16182e', color:'white'}}>
                <h5 class="modal-title" id="exampleModalLabel">
                  Connect Wallet
                </h5>
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    ref={myRefname}
                    style={{color:'white'}}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body" style={{ color:'white'}}>
                <div className="row">
                  {isConnected && address ? (
                      <div className="col-12">
                        <p style={{ textAlign: "center" }}>
                          Connected as{" "}
                          <span style={{ fontWeight: "bold" }}>{truncateEthAddress(address)}</span>{" "}
                        </p>
                        {/* <p style={{ textAlign: "center" }}>
                      on{" "}
                      {chainId == 56
                        ? "Binance Smart Chain"
                        : "Unsupported chain"}
                    </p> */}
                        <p style={{ textAlign: "center", color: "grey", width:'100%' }}>
                          You are connected to {chain.name}
                        </p>
                        <button
                            className="btn btn-outline-light"
                            style={{ width: "80%", margin:'0 auto', display:'block', marginTop:"1%" }}
                            onClick={() => {
                              disconnect()
                            }}
                        >
                          Disconnect
                        </button>
                      </div>
                  ) : (
                      <div style={{ width: "100%" }}>
                        <div className="row">
                          <div
                              className="col-12"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                connect({connector: connectors[3]});
                              }}
                          >
                                                        <div style={{border:'1px solid hsla(0,0%,100%,0.1607843137254902)', padding:'10px'}}>
                            <img src="/metamask.png" width="100%" style={{maxWidth:"40px", margin:'0 auto', display:'block'}} alt="metamask" />
                            <h5 style={{textAlign:"center"}}>
                              MetaMask
                            </h5>
                            </div>
                          </div>
                          <div
                              className="col-12"
                              style={{ cursor: "pointer", marginTop:"2rem", marginBottom:'2rem' }}
                              onClick={() => {
                                customConnect()
                                // connect({connector: connectors[2]});
                                myRefname.current.click();
                              }}
                          >
                                                        <div style={{border:'1px solid hsla(0,0%,100%,0.1607843137254902)', padding:'10px'}}>
                            <img
                                src="/walletconnect.png"
                                width="100%"
                                style={{maxWidth:"40px",  margin:'0 auto', display:'block'}}
                                alt="walletconnect"
                            />
                            <h5 style={{textAlign:"center"}}>
                              WalletConnect
                            </h5>
                            </div>
                          </div>

                          <div
                              className="col-12"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                connect({connector: connectors[1]});
                              }}
                          >
                            <div style={{border:'1px solid hsla(0,0%,100%,0.1607843137254902)', padding:'10px'}}>
                            <img src="/coinbase.png" width="100%" style={{maxWidth:"40px", margin:'0 auto', display:'block'}} alt="coinbase" />
                            <h5 style={{textAlign:"center"}}>
                              Coinbase
                            </h5>
                            </div>
                          </div>
    
                          {/* <div
                        className="col-6"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          activate(connectorsByName["Injected"]);
                          setProvider("Injected");
                        }}
                      >
                        <img
                          src="/trustwallet.svg"
                          width="100%"
                          style={{maxWidth:"40px",  margin:'0 auto',display:'block'}}
                          alt="trustwallet"
                        />
                        <h4 style={{textAlign:"center"}}>
                        TrustWallet
                        </h4>
                      </div> */}
                        </div>
                      </div>
                  )}
                </div>
              </div>
              {/* <div class="modal-footer">
                <button type="button" class="btn btn-dark" data-dismiss="modal">
                  Close
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
  );
}

export default ConnectModal;
