import { useLoaderData } from "react-router-dom"
import { ApiListResponse, ResourcesType, Film  } from "@/api/swapi"
import { Link } from "@/components"
import { removeBaseUrl } from "@/utils/path"
import { useSelectedPeople } from "@/states/hooks"
import { Flex, Spinner } from 'theme-ui'

type DataKeys<T, K extends ResourcesType> = {
  titleKey : keyof T
  pathKey : keyof T
  resourceType: K
}

const ArchivePage = <T extends object, K extends ResourcesType>({titleKey,pathKey, resourceType}:DataKeys<T, K>) => {
  let data = useLoaderData() as ApiListResponse<T>
  const { state, action } = useSelectedPeople()
  const peopleArchive = resourceType === ResourcesType.People
  const filmArchive = resourceType === ResourcesType.Films

  if(peopleArchive){
    data = state.peopleData as ApiListResponse<T>
  }

  return (
    <Flex sx={{flexDirection:'column'}}>
      {
        peopleArchive && state.loading ?
          <Spinner />
        :
          data.results.map((res,i) => <Link
            key={i}
            onClick={filmArchive ? action.handleAddData(res as Film) : undefined}
            title={res[titleKey] as string} 
            path={removeBaseUrl(res[pathKey] as string)}
          />)
      }
    </Flex>
  );
}

export default ArchivePage