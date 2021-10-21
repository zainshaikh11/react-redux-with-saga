export const FETCH_ACTIVITY = "FETCH_ACTIVITY"
export const FETCH_ACTIVITY_ASYNC = "FETCH_ACTIVITY_ASYNC"

export const fetchActivity = data => {
    return {type: FETCH_ACTIVITY, payload: data}
}