import React, { Component} from 'react';
import {Link} from 'react-router-dom';

export default class logout extends Component {

    constructor(props){
        super(props)
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
    }

  render() {
    return (
      <div>
        <h1>logged out succssesfully</h1>
        <Link to='/'>log in again</Link>
      </div>
    );
  }
}


