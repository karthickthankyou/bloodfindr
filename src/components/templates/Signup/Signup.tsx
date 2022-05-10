/* eslint-disable react/jsx-props-no-spreading */
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle'

import { googleSignin, signup } from 'src/store/user'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FormError from 'src/components/molecules/FormError'
import { useAppDispatch, useAppSelector } from 'src/store'
import Link from 'src/components/atoms/Link/Link'
import Button from 'src/components/atoms/Button/Button'
import AuthWrapper from 'src/components/organisms/AuthWrapper/AuthWrapper'
import AuthProviders from 'src/components/organisms/AuthProviders/AuthProviders'

const signupFormSchema = yup
  .object({
    email: yup
      .string()
      .required('Email address is required')
      .email('Email address is not valid.'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Minimum 6 characters needed.'),
    name: yup.string().required('Name is required'),
    rememberMe: yup.boolean(),
    isLandlord: yup.boolean(),
  })
  .required()

type SignupFormSchema = yup.InferType<typeof signupFormSchema>

export interface ISignUpProps {}

const SignUp = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormSchema>({
    resolver: yupResolver(signupFormSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      rememberMe: false,
      isLandlord: false,
    },
  })

  const { loading } = useAppSelector((state) => state.user)

  // eslint-disable-next-line no-console
  const onSubmit = handleSubmit((data) => {
    dispatch(signup(data))
  })
  return (
    <AuthWrapper>
      <h2 className='text-3xl font-light'>Create account</h2>
      <form onSubmit={onSubmit} className='w-full mt-6 space-y-4'>
        <div>
          <label className='block text-sm text-gray-700'>
            Email address
            <input
              // type='email'
              // autoComplete='email'
              className='block w-full px-3 py-2 mt-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none sm:text-sm'
              {...register('email')}
            />
            <FormError error={errors.email} />
          </label>
        </div>

        <div className='space-y-1'>
          <label className='block text-sm text-gray-700'>
            Password
            <input
              type='password'
              className='block w-full px-3 py-2 mt-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none sm:text-sm'
              {...register('password')}
            />
            <FormError error={errors.password} />
          </label>
        </div>
        <div className='space-y-1'>
          <label className='block text-sm text-gray-700'>
            Display name
            <input
              className='block w-full px-3 py-2 mt-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none sm:text-sm'
              {...register('name')}
            />
            <FormError error={errors.name} />
          </label>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <input
              id='remember-me'
              type='checkbox'
              {...register('rememberMe')}
              className='w-4 h-4 border-gray-200 rounded'
            />
            <label
              htmlFor='remember-me'
              className='block ml-2 text-sm text-gray-900'
            >
              Remember me
            </label>
          </div>
        </div>

        <Button
          type='submit'
          isLoading={loading}
          className='flex justify-center w-full px-4 py-2 text-sm text-white border border-transparent rounded-md shadow-sm'
        >
          Create account
        </Button>
      </form>
      <div className='relative mt-6'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-300' />
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 text-gray-600 bg-white'>Or continue with</span>
        </div>
      </div>
      <AuthProviders />
      <div className='mt-4 text-sm'>
        Already have an Blood find<span className='italic'>r</span> account?
        <br />
        <Link href='/login' className='font-bold'>
          Login now
        </Link>
        .
      </div>
    </AuthWrapper>
  )
}

export default SignUp
