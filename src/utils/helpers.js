import axios from 'axios';

function authenticate(email, password) {
  var querystring = require('querystring');
  var url = 'https://laravelapidev.tk/api/authenticate';
  var cred = {
    email: email,
    password: password
  };

  return axios.post(url, querystring.stringify(cred), {
    headers: { 
      "Accept": "application/prs.laravelapidev.v1+json",
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

function getStudent(studentNumber, token) {
  var url = 'https://laravelapidev.tk/api/students/' + studentNumber;
  return axios.get(url, {
    headers: { 
      "Accept": "application/prs.laravelapidev.v1+json",
      "Authorization": "Bearer " + token
    }
  });
}

var helpers = {
  authenticate: (email, password) => {
    return authenticate(email, password)
      .then(function(data) {
        return {
          response: data.data
        }
      })
  }, 
  getStudentInfo: (studentNumber, token) => {
    return getStudent(studentNumber, token)
      .then(function(data) {
        return {
          studentInfo: data.data.info
        }
      })
  }
}

export default helpers;