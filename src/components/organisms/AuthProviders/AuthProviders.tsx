import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle'
import { useAppDispatch } from 'src/store'
import {
  googleSignin,
  twitterSignin,
  facebookSignin,
} from 'src/store/user/userActions'

export interface IAuthProvidersProps {}

const AuthProviders = () => {
  const dispatch = useAppDispatch()
  return (
    <div className='flex gap-4 mt-6'>
      <button
        type='button'
        onClick={() => dispatch(googleSignin())}
        className='flex items-center justify-center flex-1 px-4 py-2 bg-white border rounded-md group'
      >
        <FaGoogle className=' w-4 h-4 mr-2 group-hover:text-[#DB4437] text-black' />{' '}
        Google
      </button>
      <button
        type='button'
        onClick={() => dispatch(facebookSignin())}
        className='flex items-center justify-center flex-1 px-4 py-2 bg-white border rounded-md group '
      >
        <FaFacebook className=' w-4 h-4 mr-2 group-hover:text-[#4267B2] text-black' />{' '}
        Facebook
      </button>
      <button
        type='button'
        onClick={() => dispatch(twitterSignin())}
        className='flex items-center justify-center flex-1 px-4 py-2 bg-white border rounded-md group '
      >
        <FaTwitter className=' w-4 h-4 mr-2 group-hover:text-[#1DA1F2] text-black' />{' '}
        Twitter
      </button>
    </div>
  )
}

export default AuthProviders
