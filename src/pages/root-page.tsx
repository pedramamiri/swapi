import { Outlet } from "react-router-dom"
import { Layout, NavBar } from "@/components"

const RootPage = () => {
  return (
    <Layout>
      <NavBar />
      <Outlet />
    </Layout>
  )
}

export default RootPage