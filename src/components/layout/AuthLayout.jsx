import { Outlet } from 'react-router-dom'


import { PageWrapper } from '../../styles/themes/styles'
import { AuthHeader, Footer } from '../../components'

const AuthLayout = () => {
  return (
    <PageWrapper >
      <AuthHeader />
        <main>
          <Outlet />
        </main>
        <Footer />
    </PageWrapper>
  )
}

export default AuthLayout
