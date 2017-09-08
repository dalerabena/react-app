import React, { Component } from 'react';

import helper from '../../utils/helpers';

function Result(props) {
  const info = props.info;
  return(
    <div className="card">
      <div className="card-header">
        Student Info
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>Attributes</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(info||{}).map((keyName, keyIndex) => 
              <tr key={keyName.toString()}>
                <td>{keyName}</td>
                <td>{(info[keyName] === null) ? 'null' : info[keyName] }</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Notfound() {
  return(
    <div className="card">
      <div className="card-header">
        Student Info
      </div>
      <div className="card-body">
        <p>Student not found!</p>
      </div>
    </div>
  )
}

class Container extends Component {

  constructor() {
    super();

    this.state = {
      studentNumber: '',
      token: '',
      email: 'xx',
      password: 'xx',
      studentInfo: {},
      render: ''
    }
  }

  componentDidMount() {
    helper.authenticate(this.state.email, this.state.password)
    .then(function(data) {
      this.setState({
        token: data.response.token
      })
    }.bind(this));
  }

  _renderSubComp(){
      switch(this.state.render){
        case 'result': return <Result info={this.state.studentInfo}/>
        case 'notfound': return <Notfound />
      }
  }

  handleChangeNumber(e) {
    const target = e.target;    
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(compName, e) {

    helper.authenticate(this.state.email, this.state.password)
      .then(function(data) {
        this.setState({
          token: data.response.token
        })
      }.bind(this));
    helper.getStudentInfo(this.state.studentNumber, this.state.token)
      .then(function(data) {
        this.setState({
          studentInfo: data.studentInfo
        });
        this.setState({render:compName});
      }.bind(this))
      .catch(function(err) {
        this.setState({render:'notfound'});
      }.bind(this));
    e.preventDefault();
  }

  render() {

    return (
      <div className="container">
        <div className="card">
        <div className="card-header">
            Search Student
          </div>
          <div className="card-body">
          <form onSubmit={this.handleSubmit.bind(this, 'result')}>
            <div className="form-group">
              <label>Student Number</label>
              <input name='studentNumber' type="text" className="form-control" aria-describedby="textHelp" placeholder="Enter student number" value={this.state.studentNumber} onChange={this.handleChangeNumber.bind(this)} />
              <small id="textHelp" className="form-text text-muted">Please enter student number.</small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
        <br/>
        
        {this._renderSubComp()}
        <br />
      </div>
    );
  }
}

export default Container;