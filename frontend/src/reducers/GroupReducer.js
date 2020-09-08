
const initialState = {
    groups: [],
    group: [],
    members: [],
    num_of_members: 0,
    groupmember: [],
    events: [],
    photos: [],
    reviews: [],
    usergroups: [],
    usertickets: []
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
            members: action.members,
            num_of_members: action.num_of_members
        }
        case "INCREMENT_MEMBERS":
            return {
                ...state,
                num_of_members: state.num_of_members + 1
            }
        case "ADD_MEMBER":
            return {
                ...state,
                members: [...state.members, action.members]
            }
        case "GET_GROUPMEMBER":
        return {
            ...state,
            groupmember: action.groupmember
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
        case "GET_USERGROUPS":
        return {
            ...state,
            usergroups: action.usergroups
        }
        case "DELETE_USERGROUPS":
        return {
            ...state,
            usergroups: action.usergroups
        }
        case "GET_USERTICKETS":
        return {
            ...state,
            usertickets: action.usertickets
        }
            default: return state
        }
}

export default GroupReducer