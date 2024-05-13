import { useRouteError } from "react-router-dom"
import { Link } from '@/components'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <Link path="/" title="home" />
    </div>
  )
}

export default ErrorPage