import React, { Component } from 'react';
import Nav from '../components/nav';
import List from '../components/List';
import Forms from './Forms.js';
import {connect} from 'react-redux';
import  {firebaseconenct}  from  '../components/firebaseconenct';
import AlertInfo from './AlertInfo';
import Selectt from '../components/Selectt';
class App extends Component {
  getForm = () => {
    if (this.props.isEdit) {
      return  <Forms></Forms>
    }
  }
  render() {
    console.log(firebaseconenct);
    return (
      <div>
        <Nav></Nav>
        <AlertInfo></AlertInfo>
        <div className="container">
          <div className="row">
            <div className="col">
            <List></List>
            </div>
            
           {this.getForm()}
          </div>
          {/* end row */}
        </div>
        <Selectt></Selectt>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeStatus: () => {
      dispatch({
        type:"EDIT_DATA"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)