import { films, people } from "@/api/swapi"
import { LoaderFunction } from "react-router-dom"

export const getFilmList: LoaderFunction = async () => {
    try {
        return await films.getResources()
    } catch (error) {
        throw new Error('Unable to connect to the server. Data retrieval failed')
    }
}

export const getFilm: LoaderFunction = async ({params}) => {
    try {
        return await films.getResource(params.id as string)
    } catch (error) {
        throw new Error('Unable to connect to the server. Data retrieval failed')
    }
}

export const getPeople: LoaderFunction = async ({params}) => {
    try {
        return await people.getResource(params.id as string)
    } catch (error) {
        throw new Error('Unable to connect to the server. Data retrieval failed')
    }
}