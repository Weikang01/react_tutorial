export default function countReducer(preState=0, action) {
    if (preState === undefined) preState = 0;
    console.log(preState, action);
    const {type, data} = action;
    switch (type) {
        case 'add':
            return preState + data;
        case 'subtract':
            return preState - data;
        default:
            return preState;
    }
}