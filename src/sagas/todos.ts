import actions from '@actions/todos'
import { takeEvery, takeLatest, put, all, call, fork } from 'redux-saga/effects';

export function* getAllTodos() {
    try {
        const api = yield call (fetch, 'https://jsonplaceholder.typicode.com/todos')
        const todos = yield call (api.json())
        yield put({
            type: actions.GET_ALL_TODOS_REQUEST_SUCCESS,
            todos
        })
     } catch (error) {
        yield put({
            type: actions.GET_ALL_TODOS_REQUEST_ERROR,
            error: "404: API not found!"
        })
    }
}

export default function* todosSaga() {
    yield takeLatest(actions.GET_ALL_TODOS_REQUEST, getAllTodos)
}