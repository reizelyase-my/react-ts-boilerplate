import { all } from 'redux-saga/effects'
import todosSagas from '../sagas/todos'

export default function* rootSaga() {
    yield all([
        todosSagas()
    ]);
}