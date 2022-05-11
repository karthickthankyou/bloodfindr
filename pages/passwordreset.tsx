import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import PasswordReset from 'src/components/templates/PasswordReset/PasswordReset'
import { useAuthPageResponses, useRedirectLoggedInUsers } from 'src/hooks'

const LoginPage: NextPage = () => {
  useRedirectLoggedInUsers()
  useAuthPageResponses()

  return (
    <div>
      <NextSeo
        title='Blood findr - Reset password'
        description='This is the amazing sample page. A short description goes here which says what goes here.'
      />
      <PasswordReset />
    </div>
  )
}

export default LoginPage
