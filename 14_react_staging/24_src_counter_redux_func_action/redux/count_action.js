import { ADD, SUBTRACT } from "./constants"

// sync action: action's return value is a plain object
export const createAddAction = data => ({type: ADD, data})
export const createSubAction = data => ({type: SUBTRACT, data})

// async action: action's return value is a function
// in most cases, async action will dispatch a sync action
export const createAddAsyncAction = (data, delay) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createAddAction(data));
        }, delay);
    }
}
