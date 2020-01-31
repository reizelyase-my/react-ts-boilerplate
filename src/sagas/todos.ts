import actions from '../actions/todos'
import { takeEvery, put, all, fork } from 'redux-saga/effects';

export function* getAllTodos() {
    yield takeEvery(actions.GET_ALL_TODOS_REQUEST, function* () {
        try {
            let response = yield fetch('https://jsonplaceholder.typicode.com/todos');
            yield put({
                type: actions.GET_ALL_TODOS_REQUEST_SUCCESS,
                todos: response.data
            })
         } catch (error) {
            yield put({
                type: actions.GET_ALL_TODOS_REQUEST_ERROR,
            })
        }
    })
}

export function* getAllTodosError() {
    yield takeEvery(actions.GET_ALL_TODOS_REQUEST_ERROR,
                       function* () { console.log("error") })
}
export default function* rootSaga() {
    yield all([
        fork(getAllTodos)
    ])
}