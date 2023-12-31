import { ADD, SUBTRACT } from "./constants"

export default function countReducer(preState=0, action) {
    if (preState === undefined) preState = 0;
    const {type, data} = action;
    switch (type) {
        case ADD:
            return preState + data;
        case SUBTRACT:
            return preState - data;
        default:
            return preState;
    }
}