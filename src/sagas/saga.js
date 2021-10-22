import { takeLatest, put, call } from "redux-saga/effects";
import {FETCH_ACTIVITY} from '../action'
import {FETCH_ACTIVITY_ASYNC} from '../action'

const getact = async () =>{
    let data = await fetch("https://www.boredapi.com/api/activity")
    return data = await data.json()
}

function* activityfetchAsync() {
  const data = yield call(getact);
  yield put({ type: FETCH_ACTIVITY_ASYNC, payload: data });
}

export function* activityFetch() {
  yield takeLatest(FETCH_ACTIVITY, activityfetchAsync);
}