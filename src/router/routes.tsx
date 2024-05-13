import { ArchivePage, SinglePage, RootPage, HomePage, ErrorPage, NotFoundPage } from "@/pages" 
import { createBrowserRouter } from "react-router-dom"
import { getFilmList, getFilm, getPeople} from "@/router/loaders"
import { Film, People, ResourcesType } from "@/api/swapi"

export const router = createBrowserRouter([
  {
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { 
        path: "/", 
        element: <HomePage /> ,
        children:[
          { index:true, loader: getFilmList, element: <ArchivePage<Film,ResourcesType.Films> resourceType={ResourcesType.Films} titleKey="title" pathKey="url" /> }
        ]
      },
      {
        path: "/films",
        children: [
          { index:true, loader: getFilmList, element: <ArchivePage<Film, ResourcesType.Films> resourceType={ResourcesType.Films} titleKey="title" pathKey="url"  /> },
          { path: ":id", loader: getFilm, element: <SinglePage<Film> keys={['title','opening_crawl']} /> },
        ],
      },
      {
        path: "/people",
        children: [
          { index:true, element: <ArchivePage<People, ResourcesType.People> resourceType={ResourcesType.People} titleKey="name" pathKey="url"  /> },
          { path: ":id", loader: getPeople, element: <SinglePage<People> keys={['name','gender','height','skin_color','hair_color','eye_color']}/> },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
    

])
