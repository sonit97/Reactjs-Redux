import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {

    controlProcess = () => {
        this.props.changeStatus()
        console.log(this.props.noteList)
        this.props.getEditDate(this.props.noteList)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#stt" + this.props.i} aria-expanded="true" aria-controls="noteContent1">
                            {this.props.noteTitle}
                        </a>
                    </h5>
                </div>
                <div id={"stt" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.contentNote}
                    </div>
                </div>
                <button onClick={() => this.controlProcess()} className="btn btn-warning">Sửa</button>
                <button className="btn btn-danger">Xóa</button>
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
                type: "EDIT_DATA"
            })
        },
        getEditDate: (editItem) => {
            dispatch({
                type: "GET_DATA",
                editItem
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Item)