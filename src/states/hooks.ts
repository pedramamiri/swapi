import { useContext } from "react"
import { Context } from '@/states/context'


export const useSelectedPeople = () => {
    const constext = useContext(Context)
    return constext
}