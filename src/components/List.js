import React, { Component } from 'react';
import Item from './Item';
import { firebaseconenct } from './firebaseconenct';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayGet: []
        };
    }

    componentWillMount() {
        var datafb = firebaseconenct.database().ref('dataForNote');
        datafb.on('value', (notes) => {
            var arrayData = [];
            notes.forEach(element => {
                const key = element.key;
                const noteTitle = element.val().title;
                const noteContent = element.val().content;
                arrayData.push({
                    titlenote: noteTitle,
                    contentnote: noteContent
                })
            })
            this.setState({
                arrayGet: arrayData
            })
            console.log(notes.val());
            console.log(arrayData);
        })
    }

    getData = () => {
        if (this.state.arrayGet) {
            return  this.state.arrayGet.map((value, key) => {
                return (
                    <Item i = {key} key={key} noteTitle = {value.titlenote} noteList = {value} contentNote = {value.contentnote}></Item>  
                )
            })
        }
    }

    render() {
        return (
            <div>
                <div id="noteList" role="tablist" aria-multiselectable="true" >
                   {this.getData()}
                   
                </div>
            </div>
        );
    }
}

export default List;