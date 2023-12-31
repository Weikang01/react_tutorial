import { ADD, SUBTRACT } from "./constants"

export const createAddAction = data => ({type: ADD, data})
export const createSubAction = data => ({type: SUBTRACT, data})
