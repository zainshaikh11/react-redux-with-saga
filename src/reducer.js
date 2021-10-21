import { FETCH_ACTIVITY_ASYNC } from "./action"


const initialState = {
    data: ""
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_ACTIVITY_ASYNC:
            return {data: action.payload.activity}
        default:
            return state
    }
}