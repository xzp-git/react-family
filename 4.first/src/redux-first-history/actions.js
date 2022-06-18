
//调用历史对象的方法 
export const CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD'

//路径发生变化
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'


// actionCreater

function locationChangeAction(location, action) {
    return {
        type: LOCATION_CHANGE,
        payload: {action, location}
    }
}

function push(...args) {
    
    return {
        type:CALL_HISTORY_METHOD,
        payload: {method:'push', args}
    }
}

export {
    push,
    locationChangeAction
}
