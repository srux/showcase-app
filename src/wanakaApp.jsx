import React, { Component } from 'react';
import { Link } from "@reach/router"
import './App.css';
import Iframe from 'react-iframe';
import Tilt from 'react-tilt';
import { Scrollbars } from 'react-custom-scrollbars';
import { IoMdClose } from "react-icons/io";
import logo from './assets/SRUX-LOGO.svg';

class Wanaka extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {
    let zIndex = {
        zIndex:'0'
    };

    return (
        <div className="wrap">
                     <Link to="/"><div className={"closeactive"} onClick={this.resetClick}><IoMdClose /></div></Link>
                     <div className="cover active" style={zIndex}>
            <div className={"item1 item showinfo"}>
              <div className="info i1"><h1>Trip Adviser App</h1><p>Step by step guide for your Wanaka travel plans.</p><p>Travel calculator + useful information on accommodation & things to do</p></div>
              <div className="info i2"><p>Plan ahead with the Wanaka Trip Adviser App.</p><p>Select the number of days you plan on travelling, the number of people going, the type of vehicle you wish to rent & your itinerary.</p><p>The App will do the rest, calculating the cost of the rentals & an estimated fuel consumption cost.</p></div>
            </div>
            </div>

        <div id={"oneExpand set"} className={"col col1oneExpand set"}>
        <div className={"mobContainer"}>
          <Tilt
            className={"webWorkMobileTilt "}
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
      </div>
    )
  }
}

export default Wanaka;