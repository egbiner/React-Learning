import {  takeEvery , put } from 'redux-saga/effects'
import { GET_BY_SAGA } from './actionTypes'
import { initDataAction } from './actionCreators'
import axios from 'axios'


function* getBySaga(){
    try{
        const api = 'https://easy-mock.com/mock/5c5a25923583f80aa06939f4/react/api';
        const res = yield axios.get(api);
        const action = initDataAction(res.data);
        yield put(action);
    }catch(e){
        console.log("请求失败");
    }
}

function* mySaga() {
    yield takeEvery(GET_BY_SAGA, getBySaga);
}

export default mySaga;