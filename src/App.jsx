import React, { Component } from 'react';

import './App.css';
import Iframe from 'react-iframe';
import Tilt from 'react-tilt';
import { Scrollbars } from 'react-custom-scrollbars';
import { IoMdClose } from "react-icons/io";
import logo from './assets/SRUX-LOGO.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: '',
      wrapState: '',
      colExpand: '',
      lock: 'noPointer',
      containerStateOne:'',
      containerStateTwo:'',
      showinfo:'',
    }
  }




  resetClick = (e) => {
    setTimeout(() => {
      this.setState({
        colExpand: ' transitisonNone',
        wrapState: ' transitionNone',
        lock: 'noPointer transitionNone',
        containerStateOne:'',
        containerStateTwo:'',
        showinfo:'',
      })
    }, 100)
    setTimeout(() => {
      this.setState({
        cover: '',
      })
    }, 700)

    // window.location.reload(false);

  }

  colClick = (e) => {

    const containerActive = this.state.containerStateOne == '';

    if  (containerActive) {
      this.setState({
        colExpand: e.target.id,
        wrapState: 'open',
        containerStateOne:'containerOpen',
        containerStateTwo:'hidden',
        cover: 'active',
        lock: '',
      })
      setTimeout(() => {
        this.setState({
            showinfo:'showinfo',
        })
    }, 2000)
    }
    else {
      this.setState({
        lock: '',
      })
    }
    console.log(e.target.id);
  }

  colClickTwo = (e) => {

    const containerActive = this.state.containerStateTwo == '';

    if  (containerActive) {
    this.setState({
      colExpand: e.target.id,
      wrapState: 'open',
      containerStateOne:'hidden',
      containerStateTwo:'containerOpen',
      cover: 'active',
      lock: '',
    })
    setTimeout(() => {
      this.setState({
          showinfo:'showinfo',
      })
  }, 2000)
  }
    else {
      this.setState({
        lock:'',
      })
    }
    console.log(e.target.id);
  }

  render() {
    let { colExpand, wrapState, cover, lock,containerStateOne,containerStateTwo,showinfo } = this.state;
    let itemState = this.state.colExpand;

    return (
      <div className="App">
   
        <div className={"close" + cover} onClick={this.resetClick}><IoMdClose /></div>
        <div className={"cover " + cover}>
          
            { itemState=='oneExpand set' ? (<div className={"item1 item "+showinfo}>
              <div className="info i1"><h1>Trip Adviser App</h1><p>Step by step guide for your Wanaka travel plans.</p><p>Travel calculator + useful information on accommodation & things to do</p></div>
              <div className="info i2"><p>Plan ahead with the Wanaka Trip Adviser App.</p><p>Select the number of days you plan on travelling, the number of people going, the type of vehicle you wish to rent & your itinerary.</p><p>The App will do the rest, calculating the cost of the rentals & an estimated fuel consumption cost.</p></div>
              </div>) : 
            (<></>) }
            { itemState=='twoExpand set' ? (
            <div className={"item2 item "+showinfo}>
              <div className="info i1"><h1>Online Shop App</h1><p>The store stocks new & second hand trade in's.<br></br> listing is then checked, verified & accepted by the store.</p><p>We were required to design & develop the App using React along with with a fully functioning API & server.</p></div>
              <div className="info i2"><p>The app has a full CRUD process from the user being able to register, login, sell, purchase, review, edit account details & edit or delete their products.</p></div>
            </div>) : (<></>)}
            { itemState=='threeExpand set' ? (
            <div className={"item3 item "+showinfo}>
              <div className="info i1"><h1>Mitchell's Joinery</h1></div>
              <div className="info i2"><p>The team over at Mitchell's Joinery required a new brand design along with a website upgrade to a more modern and intuitive UX design.<br></br>Mitchell's Joinery main focus was on the marine industry.</p><p>The new logo and website required a more premium design along with a more logical catagory / navigation hirechy.</p>
              </div>
            </div>):(<></>)}
            { itemState=='fourExpand set' ? (
            <div className={"item4 item "+showinfo}>
               <div className="info i1"><h1>NOMAD WordPress Theme</h1></div>
              <div className="info i2"><p>Designer Textile E-Commerce Website & CMS solution.</p><p>SEO evaluation of current content.
- 3 page design Home, Contact, Shop) - E-commerce solution, shop, categories, products, cart, checkout, orders</p></div>
            </div>) :(<></>)}
            
        </div>
        <div className={"wrap " + wrapState}>
        <div className="logo-container"><a href="http://www.samrobertson.nz" target="_blank"><img src={logo} alt=""/></a></div>
          <div className={"container " + containerStateOne}>

            <div id={"oneExpand set"} onClick={e => this.colClick(e)} className={"col col1" + colExpand}>
              <div className={"mobContainer " + lock}>
                <Tilt
                  className={"webWorkMobileTilt " + lock}
                  options={{
                    perspective: 2000,
                    max: 25,

                    scale: 1.1,
                    axis: 'x',
                    speed: 5000,
                    easing: "cubic-bezier(.03,.98,.52,.99)",
                  }}>

                  <div
                    className={"webWorkMobile Tilt-inner "}>
                    <Scrollbars
                      className="webWorkInner"
                      autoHideTimeout={1000}
                      autoHideDuration={200}>

                      <div className="webImage inapp-m"><Iframe url="https://srux.github.io/wanakaApp/"

                        id="inapp-mobile"
                        className="inapp-mobile"
                        display="initial"
                        position="relative" /></div>

                    </Scrollbars>
                  </div>
                </Tilt>
              </div>
            </div>
            <div id={"twoExpand set"} onClick={e => this.colClick(e)} className={"col col2" + colExpand}>

              <div className={"mobContainer " + lock}>
                <Tilt
                  className="webWorkMobileTilt"
                  options={{
                    perspective: 2000,
                    max: 25,

                    scale: 1.05,
                    axis: 'x',
                    speed: 4000,
                    easing: "cubic-bezier(.03,.98,.52,.99)",
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
                        position="relative" /></div>

                    </Scrollbars>
                  </div>
                </Tilt>
              </div>
            </div>
          </div>
          <div className={"container "+ containerStateTwo}>
            <div id={"threeExpand set"} onClick={e => this.colClickTwo(e)} className={"col col3" + colExpand}>

             
              <Tilt
                className={"webWorkTilt " + lock}
                options={{
                  perspective: 2000,
                  max: 25,
                  reverse: true,
                  scale: 1.1,
                  axis: 'x',
                  speed: 4000,
                  easing: "cubic-bezier(.03,.98,.52,.99)",
                }}>
                <div
                  className={"webWork "}
                  onMouseEnter={this.handleVerticalLock}
                  onMouseLeave={this.handleVerticalActive}>
                  <Scrollbars
                    className="webWorkInner"
                    autoHideTimeout={1000}
                    autoHideDuration={200}>

                    <div className="webImage mj">

                    </div>

                  </Scrollbars>
                </div>

              </Tilt>
              <div className={"mobContainer " + lock}>

<Tilt
  className="webWorkMobileTilt"
  options={{
    perspective: 2000,
    max: 25,

    scale: 1.1,
    axis: 'x',
    speed: 4000,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  }}>

  <div
    className={"webWorkMobile Tilt-inner imgscroll"}
    onMouseEnter={this.handleMobVerticalLock}
    onMouseLeave={this.handleMobVerticalActive}>
    <Scrollbars
      className="webWorkInner"
      autoHideTimeout={1000}
      autoHideDuration={200}>

      <div className="webImage mj-m">
      </div>

    </Scrollbars>
  </div>
</Tilt>
</div>

            </div>
            <div className={"col col4" + colExpand}> <div id={"fourExpand set"} onClick={e => this.colClickTwo(e)} className={"col col4" + colExpand}>

              <div className={"mobContainer " + lock}>

                <Tilt
                  className="webWorkMobileTilt"
                  options={{
                    perspective: 2000,
                    max: 25,

                    scale: 1.1,
                    axis: 'x',
                    speed: 4000,
                    easing: "cubic-bezier(.03,.98,.52,.99)",
                  }}>

                  <div
                    className={"webWorkMobile Tilt-inner "}
                    onMouseEnter={this.handleMobVerticalLock}
                    onMouseLeave={this.handleMobVerticalActive}>
                    <Scrollbars
                      className="webWorkInner"
                      autoHideTimeout={1000}
                      autoHideDuration={200}>

                      <div className="webImage inapp-m">
                        <Iframe url="https://new.wearenomad.nz/"

                          id="inapp-mobile"
                          className="inapp-mobile"
                          display="initial"
                          position="relative" /></div>

                    </Scrollbars>
                  </div>
                </Tilt>
              </div>
              <Tilt
                className={"webWorkTilt " + lock}
                options={{
                  perspective: 2000,
                  max: 25,
                  reverse: true,
                  scale: 1.1,
                  axis: 'x',
                  speed: 4000,
                  easing: "cubic-bezier(.03,.98,.52,.99)",
                }}>
                <div
                  className={"webWork "}
                  onMouseEnter={this.handleVerticalLock}
                  onMouseLeave={this.handleVerticalActive}>
                  <Scrollbars
                    className="webWorkInner"
                    autoHideTimeout={1000}
                    autoHideDuration={200}>

                    <div className="webImage">
                      <Iframe url="https://new.wearenomad.nz/"

                        id="inapp-mobile"
                        className="inapp-mobile"
                        display="initial"
                        position="relative" />
                    </div>

                  </Scrollbars>
                </div>

              </Tilt>
            </div>
            </div>
          </div>
          {/* <div className="container">
          <div className={"col col5"+colExpand}></div>
          <div className={"col col6"+colExpand}></div>
        </div> */}
        </div>
      </div>
    );
  }

}


export default App;
