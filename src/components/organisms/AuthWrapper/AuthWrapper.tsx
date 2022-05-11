export interface IAuthWrapperProps {
  children: React.ReactNode
}

const AuthWrapper = ({ children }: IAuthWrapperProps) => (
  <div className='flex items-center justify-center w-screen h-screen mx-auto bg-gray-200'>
    <div className='max-w-lg p-6 mb-12 bg-white shadow-lg rounded-xl'>
      {children}
    </div>
  </div>
)

export default AuthWrapper
