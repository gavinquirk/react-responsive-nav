import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/Toolbar/SideDrawer/SideDrawer';
import Backdrop from './components/Toolbar/Backdrop/Backdrop';

import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className='App'>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <main>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            eaque eligendi distinctio dolor in sequi dignissimos? Eius
            perferendis eos perspiciatis nobis sed repellendus delectus
            aspernatur quidem consectetur! Cupiditate consequatur molestias
            labore ducimus quos neque laborum velit, aperiam, exercitationem,
            aut dolorem repellat praesentium. Iste dolore asperiores, nisi
            aperiam excepturi quaerat impedit.
          </p>
        </main>
      </div>
    );
  }
}

export default App;
