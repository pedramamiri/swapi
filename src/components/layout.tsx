import { Flex } from 'theme-ui'

type Props = {
    children : React.ReactNode
}

const Layout = ({children}:Props) => {
    return (
      <Flex
        sx={{
            flexDirection:'column',
            minHeight: '100vh',
            alignItems:'center',
            padding: 4,
            maxWidth:'900px',
            margin:'auto'
        }}
      >
        {children}
      </Flex>
    );
}

export default Layout