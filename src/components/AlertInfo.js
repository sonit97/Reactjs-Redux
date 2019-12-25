import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import {connect} from 'react-redux';


class AlertInfo extends Component {
    handleDismiss = () => {
            this.props.alertOff();
    }
    render() {
        if (this.props.isAlert === false) return null;
        return (
            <div>
                <AlertContainer>
                    <Alert onDismiss={() => this.handleDismiss()} timeout={1000} type="info">Hello, world</Alert>
                </AlertContainer>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isAlert: state.isAlert
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({
                type: "ALERT_OFF"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)