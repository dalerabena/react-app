import React, { Component } from 'react';
import axios from 'axios'

function Result(props) {
  const result = props.result;
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
            {Object.keys(result.info||{}).map((keyName, keyIndex) => 
              <tr key={keyName.toString()}>
                <td>{keyName}</td>
                <td>{(result.info[keyName] === null) ? 'null' : result.info[keyName] }</td>
              </tr>
            )}
          </tbody>
        </table>
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
      result: {},
      render: ''
    }
  }

  componentDidMount() {
    this.authenticate();
  }

  _renderSubComp(){
      switch(this.state.render){
        case 'result': return <Result result={this.state.result}/>
      }
  }

  authenticate() {
    var self = this;
    var querystring = require('querystring');
    var url = 'https://laravelapidev.tk/api/authenticate';
    var cred = {
      email: 'xx',
      password: 'xx',
      result: {}
    };

    axios.post(url, querystring.stringify(cred), {
          headers: { 
            "Accept": "application/prs.laravelapidev.v1+json",
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function(response) {
          self.setState({
            token: response.data.token,
          });
        }).catch(function (error){
          console.log(error);
        });
  }

  getStudent() {
    
    this.authenticate();

    var self = this;

    var url = 'https://laravelapidev.tk/api/students/' + this.state.studentNumber;
    axios.get(url, {
      headers: { 
        "Accept": "application/prs.laravelapidev.v1+json",
        "Authorization": "Bearer " + this.state.token
      }
    }).then(function(response) {
        self.setState({
          result: response.data
        });
    }).catch(function (error){
      console.log(error);
    });
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
    this.getStudent();
    this.setState({render:compName});
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