import { StatetType, Action, ActionType } from "@/states/types"

export const reducer = (state: StatetType, action: Action): StatetType => {
    switch (action.type) {
        case ActionType.ADD_DATA:
            return { ...state, loading: false, peopleUrlList: action.payload.peopleUrlList, peopleData:action.payload.peopleData }
        case ActionType.SET_LOADING:
            return { ...state, loading: action.payload }
        default:
            return state;
    }
}