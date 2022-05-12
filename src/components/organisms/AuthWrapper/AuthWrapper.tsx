import Link from 'src/components/atoms/Link'

export interface IAuthWrapperProps {
  children: React.ReactNode
}

const AuthWrapper = ({ children }: IAuthWrapperProps) => (
  <div className='flex items-center justify-center w-screen h-screen mx-auto bg-gray-200'>
    <div>
      <div className='max-w-lg p-6 bg-white shadow-lg rounded-xl'>
        {children}
      </div>
      <Link href='/' className='inline-block mt-6 ml-6 '>
        Go to home
      </Link>
    </div>
  </div>
)

export default AuthWrapper
