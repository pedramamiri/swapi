import { request } from "@/utils/fetch"

export interface Film {
  characters: string[];
  created: Date;
  director: string;
  edited: Date;
  episode_id: string;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: Date;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
}

export interface People {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string[];
  mass: string;
  name: string;
  skin_color: string;
  created: Date;
  edited: Date;
  species: string[];
  starships: string[];
  url: string;
  vehicles:string[];
}

export interface ApiListResponse<T> {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: T[];
}

export enum ResourcesType {
    Films  = 'films',
    People = 'people'
}

export const BASE_URL = 'https://swapi.dev/api'

const swapiFactory  =  < T > (resource: ResourcesType) => {
  return {
    async getResources() : Promise<ApiListResponse<T>> {
      const res : ApiListResponse<T> = await request(`${BASE_URL}/${resource}/`)
      return res
    },
    async getResource(id:string) : Promise<T>{
      const res : T = await request(`${BASE_URL}/${resource}/${id}/`)
      return res
    },
    async populateList<S>(list:string[]) : Promise<ApiListResponse<S>>{
      const res : S[] = await Promise.all(list.map(url => request(url)))
      return {
        count: res.length,
        results: res
      }
    }
  }
}


export const films = swapiFactory < Film > (ResourcesType.Films)
export const people = swapiFactory < People > (ResourcesType.People)