import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import Navigation from './components/Navigation/Navigation.js'
// import Jumbotron from './components/Jumbotron.js'
import Container from './components/Container/Container.js'

const styles = {
  body: {
    fontFamily: 'Roboto',
    paddingTop: '4.5rem',
  }
}

const menus = [
  {
    id: uuidv4(),
    name: 'link',
    url: '#'
  },
  {
    id: uuidv4(),
    name: 'link',
    url: '#'
  },
  {
    id: uuidv4(),
    name: 'link',
    url: '#'
  }
];

const cards = [
  {
    id: uuidv4(),
    heading: 'heading',
    body: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    url: '#'
  },
  {
    id: uuidv4(),
    heading: 'heading',
    body: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    url: '#'
  },
  {
    id: uuidv4(),
    heading: 'heading',
    body: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    url: '#'
  },
  {
    id: uuidv4(),
    heading: 'heading',
    body: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    url: '#'
  },
  {
    id: uuidv4(),
    heading: 'heading',
    body: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    url: '#'
  },
  {
    id: uuidv4(),
    heading: 'heading',
    body: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    url: '#'
  }
];

const companyName = 'Company Name';

class App extends Component {
  render() {
    return (
      <div style={styles.body}>
        <Navigation menus={menus} />
        <Container cards={cards} company={companyName} />
      </div>
    );
  }
}

export default App;