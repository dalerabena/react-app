import React, { Component } from 'react';


const MenuItem = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.menu.url}>{props.menu.name}</a>
    </li>
  )
}

class NavMenuList extends Component {
  render() {

    const {menus} = this.props;

    return (
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          {menus.map((menu) => 
            <MenuItem key={menu.id} menu={menu} />
          )}
        </ul>
      </div>
    );
  }
}

export default NavMenuList;