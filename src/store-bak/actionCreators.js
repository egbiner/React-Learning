import {GET_BY_SAGA,CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_DATA} from '../store/actionTypes'
import axios from 'axios'

export const getChangeInputAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
});

export const getAddTodoItemAction= ()=>({
    type:ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) =>({
    type:DELETE_TODO_ITEM,
    index
});

export const initDataAction = (data) => ({
    type:INIT_DATA,
    data
});

export const getTodoItemBySaga = () => ({
    type: GET_BY_SAGA
})

export const getTodoListByThunk = () => {
    return (dispatch) => {
        const api = 'https://easy-mock.com/mock/5c5a25923583f80aa06939f4/react/api';
        axios.get(api).then((res)=>{
            const action = initDataAction(res.data);
            dispatch(action);
            //const action = initDataAction(res.data);
            //store.dispatch(action);
        }).catch(()=>{

        })
    }
}