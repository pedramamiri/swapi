import { Box } from "theme-ui"
import { Link } from '@/components'

const NavBar = () => {
    return (
      <Box sx={{ width: 3, marginBottom: 4 }}>
        <Link path="/" title="home" />
        <Link path="/films" title="films" />
        <Link path="/people" title="people" />
      </Box>
    );
}

export default NavBar