import { AnyAction } from 'redux'

const initialState = {
    politics: ""
}

const politics = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'POLITICS_SET':
            return {
                politics: action.payload
            }
        case 'POLITICS_EXIT':
            return {
                politics: ""
            }
        default:
            return state
    }
}

export default politics;
