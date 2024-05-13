import { People, ApiListResponse } from "@/api/swapi"

export type StatetType = {
    loading: boolean
    peopleUrlList: Set<string>
    peopleData: ApiListResponse<People>
};

export enum ActionType {
    ADD_DATA,
    SET_LOADING,
}

export type Action =
    | { type: ActionType.ADD_DATA; payload: {peopleUrlList: Set<string>;peopleData: ApiListResponse<People>}}
    | { type: ActionType.SET_LOADING; payload: boolean }

export type ContextType = {
    state: StatetType;
    dispatch: React.Dispatch<Action>;
};