import React, { Component } from 'react';

const ListItem = (props) => {
  return (
    <div className="col-md-4">
      <h2>{props.card.heading}</h2>
      <p>{props.card.body}</p>
      <p><a className="btn btn-secondary" href={props.card.url} role="button">View details &raquo;</a></p>
    </div>
  )
}

class ContainerList extends Component {
  render() {

    const {cards} = this.props;

    return (
      <div className="row">
        {cards.map((card) => 
          <ListItem key={card.id} card={card} />
        )}
      </div>
    );
  }
}

export default ContainerList;