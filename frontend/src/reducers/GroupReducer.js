
const initialState = {
    groups: [],
    group: [],
}

function GroupReducer(state = initialState, action){
    switch(action.type){
        case "GET_GROUPS":
            return {
                ...state,
                groups: action.groups
            }
        case "SHOW_GROUP":
            return {
                ...state,
                group: action.group
            }
            default: return state
        }
}

export default GroupReducer