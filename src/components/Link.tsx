import { NavLink } from "theme-ui"
import { Link as ReactRouterLink } from "react-router-dom"

type Props = {
    path: string,
    title: string
    onClick?: () => void
}

const Link = ({path, title, onClick}:Props) => {
    return (
        <NavLink onClick={() => {if(onClick){setTimeout(()=>{onClick()},0)}}}  sx={{padding: 2,borderBottom:'thin'}} as={(props) => <ReactRouterLink to={path} {...props} />}>
            {title}
        </NavLink>
    );
}

export default Link