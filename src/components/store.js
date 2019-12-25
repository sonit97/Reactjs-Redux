import { firebaseconenct } from './firebaseconenct';
import * as firebase from 'firebase'

var redux = require('redux');
const nameInitialState = {
    testConnect: 'tesstthoi',
    isEdit: false,
    editItem: {},
    isAlert: false
}
const name = (state = nameInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            var datafb = firebase.database().ref('dataForNote');
            datafb.push(action.getItem);

            console.log('dsdsdssdheehehe', action.getItem);
            return { ...state, ...state.testConnect = 'ds',isAlert: true }
        case "EDIT_DATA":
            // var datafb = firebase.database().ref('dataForNote');
            console.log('dsdsdssdheehehe', action.getItem);
            return { ...state, isEdit: !state.isEdit }
        case "GET_DATA":
            // var datafb = firebase.database().ref('dataForNote');
            //console.log('dsdsdssdheehehe', action.getItem);
            return { ...state, editItem: action.editItem }
            case "ALERT_OFF":
                // var datafb = firebase.database().ref('dataForNote');
                //console.log('dsdsdssdheehehe', action.getItem);
                return { ...state,isAlert: false }

        default:
            return state
    }
}
var store = redux.createStore(name);
store.subscribe(function(){
    console.log(store.getState());
})
export default store;