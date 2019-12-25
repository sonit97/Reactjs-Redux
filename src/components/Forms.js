import React, { Component } from 'react';
// import {connect} from 'react-redux';
import {connect} from 'react-redux';

class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titlenote: '',
            contentnote: '',
            id:''
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        })

    }
    componentWillMount() {
        if (this.props.itemData) {
          this.setState({
            titlenote: this.props.itemData.titlenote,
            contentnote: this.props.itemData.contentnote,
            id:this.props.itemData.i 
          }  );
        }
    }
    addData = (title, content) => {
            var item= {};
            item.title = title;
            item.content = content;
            console.log(item);
           // item = JSON.stringify(item);
            this.props.addDataStore(item); 
    }

    render() {
        return (

            <div className="col-4">
                <h3>Edit content note</h3>
                <div className="form-group">
                    <label htmlFor="title">Title note</label>
                    <input defaultValue = {this.props.itemData.titlenote} type="text" onChange= {(event) => this.isChange(event)} className="form-control" name="titlenote" id="title" aria-describedby="helpNoteId" placeholder="Tieu de note" />
                    <small id="helpNoteId" className="form-text text-muted">{this.props.testConnect}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Noi dung note</label>
                    <textarea defaultValue = {this.props.itemData.contentnote} type="text"  onChange= {(event) => this.isChange(event)} className="form-control" name="contentnote" id="content" aria-describedby="helpNoteId" placeholder="noi dung de note"  />
                    <small id="helpNoteId" className="form-text text-muted">Dien noi dung vao day</small>
                </div>
                <button type="submit"  onClick= {() => this.addData(this.state.titlenote, this.state.contentnote)} className="btn btn-primary btn-block">Luu</button>
            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        testConnect: state.testConnect,
        itemData: state.editItem
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type: "ADD_DATA",
            getItem
        })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Forms)
