import React from 'react';

import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className='Toolbar'>
    <nav className='Toolbar__navigation'>
      <div className='Toolbar__toggle-button'>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className='Toolbar__logo'>
        <a href='#'>THE LOGO</a>
      </div>
      <div className='spacer' />
      <div className='Toolbar__navigation-items'>
        <ul>
          <li>
            <a href='#'>Link 1</a>
          </li>
          <li>
            <a href='#'>Link 2</a>
          </li>
          <li>
            <a href='#'>Link 3</a>
          </li>
          <li>
            <a href='#'>Link 4</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
