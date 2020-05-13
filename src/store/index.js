import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
const getReducers=()=>{
    const files=require.context('./reducers',true,/\.js$/);
    return files.keys().reduce((prev,item)=>{
        const reducers=files(item).default;
        const key=item.match(/\.\/(\w+)\.js/)[1];
        prev[key]=reducers;
        return prev;
    },{})
}

// const combineReducers=(options)=>{
//     return (state,action)=>{
//         console.log(state,action)
//         return Object.keys(options).reduce((prev,key)=>{
//             console.log(key)
//             prev[key]=options[key](state?state[key]:state,action)
//             return prev;
//         },{})
//     }
// }

const reducers=combineReducers(
    getReducers()
)


const store=createStore(reducers,applyMiddleware(thunk));
window.store=store;
export default store