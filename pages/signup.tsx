import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import SignUp from 'src/components/templates/Signup'
import { useAuthPageResponses, useRedirectLoggedInUsers } from 'src/hooks'

const Signup: NextPage = () => {
  useRedirectLoggedInUsers()
  useAuthPageResponses()
  return (
    <div>
      <NextSeo
        title='Sign up | Zillow clone | Karthick Ragavendran'
        description='This is the amazing sample page. A short description goes here which says what goes here.'
      />
      <SignUp />
    </div>
  )
}

export default Signup
