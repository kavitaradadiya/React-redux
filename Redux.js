const redux = require('redux') //ES5

const createStore = redux.createStore;

const initState = {
    counter:10
}

const rootReducer = (state = initState,action) =>{
    // console.log(state.counter);
    // console.log(action.type);

    let Ncounter;

    switch(action.type){
        case 'INC':{
            Ncounter = {
                ...state,
                counter: state.counter + action.value
            }
            console.log("INC",Ncounter);
        }
        break;
        case 'DEC':{
            Ncounter = {
                ...state,
                counter: state.counter - action.value
            }
            console.log("DEC", Ncounter);
        }
        break;
        case 'RESET':{
            Ncounter = {
                ...state,
                counter: 0
            }
            console.log("RESET", Ncounter);
        }
        break;
        default:
            Ncounter = state
            break;
    }
    return Ncounter;

    return state
}
const store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch({
    type:"INC",
    value:5
})  
store.dispatch({
    type:"DEC",
    value:2
})  
store.dispatch({
    type:"RESET",
    value:0
})  