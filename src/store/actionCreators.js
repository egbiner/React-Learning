import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_DATA} from '../store/actionTypes'

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