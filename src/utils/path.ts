import { BASE_URL } from "@/api/swapi"

export const removeBaseUrl = (url: string): string  => {
    return url.replace(BASE_URL, '')
}