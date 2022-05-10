import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle'
import { useAppDispatch } from 'src/store'
import { googleSignin } from 'src/store/user/userActions'

export interface IAuthProvidersProps {}

const AuthProviders = () => {
  const dispatch = useAppDispatch()
  return (
    <div className='flex gap-4 mt-6'>
      <button
        type='button'
        onClick={() => dispatch(googleSignin())}
        className='flex items-center justify-center flex-1 px-4 py-2 bg-white border rounded-md'
      >
        <FaGoogle className=' w-4 h-4 mr-2 text-[#DB4437]' /> Google
      </button>
      <button
        type='button'
        disabled
        onClick={() => console.error('Not implemented.')}
        className='flex items-center justify-center flex-1 px-4 py-2 bg-white border rounded-md cursor-not-allowed'
      >
        <FaFacebook className=' w-4 h-4 mr-2 text-[#4267B2]' /> Facebook
      </button>
      <button
        type='button'
        disabled
        onClick={() => console.error('Not implemented.')}
        className='flex items-center justify-center flex-1 px-4 py-2 bg-white border rounded-md cursor-not-allowed'
      >
        <FaTwitter className=' w-4 h-4 mr-2 text-[#1DA1F2]' /> Twitter
      </button>
    </div>
  )
}

export default AuthProviders
