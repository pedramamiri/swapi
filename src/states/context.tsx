import React, { createContext, useReducer, useCallback } from 'react'
import { StatetType, ActionType } from "@/states/types"
import { Film } from "@/api/swapi"
import { people, People } from "@/api/swapi"
import { reducer } from "@/states/reducer"

const initialState: StatetType = {
    loading: false,
    peopleUrlList: new Set<string>(),
    peopleData:{
        count:0,
        results:[]
    }
}

const useContextDef = (initialState: StatetType) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddData = useCallback((film : Film) => () => {
        const newPeopleUrlList : Set<string>  = new Set([...state.peopleUrlList,...film.characters])
        dispatch({ type: ActionType.SET_LOADING, payload: true })
        people.populateList<People>([...newPeopleUrlList]).then(res => {
            dispatch({ type: ActionType.ADD_DATA, payload: {peopleUrlList:newPeopleUrlList,peopleData:res} })
        }).catch((err) => {throw err})
    },[state])

    return {
        state,
        action : {
            handleAddData
        }
    }
}

type UseContextType = ReturnType<typeof useContextDef>
const initContextState : UseContextType = {

    state: initialState,
    action: {
        handleAddData: () => () => {}
    }
}
type ProviderProps = {
    children?: React.ReactNode,
}
export const Context = createContext<UseContextType>(initContextState)
export const Provider = ({children} : ProviderProps ) => {
    return (
        <Context.Provider value={useContextDef(initialState)}>
            {children}
        </Context.Provider>
    )
}

