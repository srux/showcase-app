import React, {Component} from 'react';

import './App.css';
import Iframe from 'react-iframe';
import Tilt from 'react-tilt';
import { Scrollbars } from 'react-custom-scrollbars';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cover:'',
        wrapState:'',
        colExpand:'',
        lock:'noPointer',
    }
  }




colClick = (e) => {
  this.setState({
    colExpand:e.target.id,
    wrapState:'open',
    cover:'active',
    lock:'',
  })
  console.log(e.target.id);

}

render () {
  let {colExpand,wrapState,cover,lock} = this.state;

  return (
    <div className="App">
      <div className={"cover "+cover}></div>
      <div className={"wrap "+wrapState}>
        <div className="container">

          <div id={"oneExpand set"} onClick={e => this.colClick(e)} className={"col col1"+colExpand}>
          <div className={"mobContainer "+lock}>
                    <Tilt
                                      className="webWorkMobileTilt"
                                      options={{
                                                      perspective:2000,
                                                      max:25,
              
                                                      scale: 1.1,
                                                      axis:'x',
                                                      speed:4000,
                                                      easing:"cubic-bezier(.03,.98,.52,.99)",
                                                  }}>
              
                                      <div
                                          className={"webWorkMobile Tilt-inner "}
                                          onMouseEnter={this.handleMobVerticalLock}
                                          onMouseLeave={this.handleMobVerticalActive}>
                                          <Scrollbars
                                              className="webWorkInner"
                                              autoHideTimeout={1000}
                                              autoHideDuration={200}>
                                         
                                                      <div className="webImage inapp-m"><Iframe url="http://sam.robertson.yoobee.net.nz/Wanaka%20Tourism%20Trip%20Adviser%20App/index.html"
                                                        
                                                                  id="inapp-mobile"
                                                                  className="inapp-mobile"
                                                                  display="initial"
                                                                  position="relative"/></div>
                                                  
                                          </Scrollbars>
                                      </div>
                                  </Tilt>
                                  </div>
          </div>
          <div id={"twoExpand set"}  onClick={e => this.colClick(e)} className={"col col2"+colExpand}>

            <div className={"mobContainer "+lock}>
                    <Tilt
                                      className="webWorkMobileTilt"
                                      options={{
                                                      perspective:2000,
                                                      max:25,
              
                                                      scale: 1.1,
                                                      axis:'x',
                                                      speed:4000,
                                                      easing:"cubic-bezier(.03,.98,.52,.99)",
                                                  }}>
              
                                      <div
                                          className={"webWorkMobile Tilt-inner "}
                                          onMouseEnter={this.handleMobVerticalLock}
                                          onMouseLeave={this.handleMobVerticalActive}>
                                          <Scrollbars
                                              className="webWorkInner"
                                              autoHideTimeout={1000}
                                              autoHideDuration={200}>
                                         
                                                      <div className="webImage inapp-m"><Iframe url="https://in-shop7.firebaseapp.com/"
                                                        
                                                                  id="inapp-mobile"
                                                                  className="inapp-mobile"
                                                                  display="initial"
                                                                  position="relative"/></div>
                                                  
                                          </Scrollbars>
                                      </div>
                                  </Tilt>
                                  </div>
          </div>
        </div>
        <div className="container">
          <div className={"col col3"+colExpand}></div>
          <div className={"col col4"+colExpand}></div>
        </div>
        <div className="container">
          <div className={"col col5"+colExpand}></div>
          <div className={"col col6"+colExpand}></div>
        </div>
      </div>
    </div>
  );
}

}


export default App;
