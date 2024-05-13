import { useLoaderData } from "react-router-dom"
import { Text, Grid } from 'theme-ui'

type DataKeys<T> = {
  keys : Array<keyof T>
}

const SinglePage = <T extends object>({keys}:DataKeys<T>) => {

  const data = useLoaderData() as T

  return (
    <>
      {
        keys.map((key,i) => (
          <Grid key={i} gap={2} columns={[2, '1fr 3fr']} sx={{width:3,margin:2}}>
            <Text color="secondary">{key.toString()}:</Text>
            <Text>{data[key] as string}</Text>
          </Grid>
        ))
      }
    </>
  );
}

export default SinglePage