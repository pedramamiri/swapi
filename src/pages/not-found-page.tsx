import { Link } from '@/components'

const NotFoundPage = () => {

  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist</p>
      <Link path="/" title="home" />
    </div>
  );
}

export default NotFoundPage