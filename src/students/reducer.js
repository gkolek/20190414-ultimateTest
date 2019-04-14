import { SHOW_STUDENTS } from './constants'

const INITIAL_STATE = {
    list: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_STUDENTS:
            return {
                ...state,
                list: action.data
            }
        default:
            return state;
    }
}