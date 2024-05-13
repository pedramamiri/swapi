import { Outlet } from "react-router-dom"
import { Image } from 'theme-ui'
import starWarsLogo from "@/assets/images/star-wars-logo.png"


const HomePage = () => {
  
  return (
    <>
        <Image src={starWarsLogo} sx={{ width:2,margin:4}} />
        <Outlet />
    </>
  )
}

export default HomePage