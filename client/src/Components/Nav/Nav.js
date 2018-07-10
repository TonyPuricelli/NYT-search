import React from "react";

const style = {
  navBar: {
  borderColor: '#428bca',
  backgroundColor: '#428bca',
  color: 'white'
}
};

const Nav = () =>
  <nav className="navbar navbar-default navbar-top" style={style.navBar}>
    <div className="container-fluid">
      <div className="navbar-header">
        <a style={style.navBar} href="/" className="navbar-brand">
          Refresh articles
        </a>
      </div>
    </div>
  </nav>;

export default Nav;