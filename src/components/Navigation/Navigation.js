import React, { Component } from 'react';

import NavMenuList from './NavMenuList'

class Navigation extends Component {
  render() {

    const {menus} = this.props;

    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavMenuList menus={menus}/>
      </nav>
    );
  }
}

export default Navigation;