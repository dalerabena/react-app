import React, { Component } from 'react';

class Footer extends Component {

  render() {

    const {company} = this.props;

    return (
      <footer>
        <p>&copy; {company} 2017</p>
      </footer>
    );
  }
}

export default Footer;