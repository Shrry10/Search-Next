import React from "react";

class Header extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-center">
          <a className="navbar-brand mx-auto">Searchbar Using React</a>
        </div>
      </nav>
    );
  }
}

export default Header;

