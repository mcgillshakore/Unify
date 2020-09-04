
const initialState = {
    groups: [],
    group: [],
    members: [],
    events: [],
    photos: [],
    reviews: [],
    user: []
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

        case "GET_MEMBERS":
        return {
            ...state,
            members: action.members
        }
        case "GET_EVENTS":
        return {
            ...state,
            events: action.events
        }
        case "GET_PHOTOS":
        return {
            ...state,
            photos: action.photos
        }
        case "GET_REVIEWS":
        return {
            ...state,
            reviews: action.reviews
        }
        case "GET_USER":
        return {
            ...state,
            user: action.user
        }

            default: return state
        }
}

export default GroupReducer