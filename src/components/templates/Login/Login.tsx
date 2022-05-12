/* eslint-disable react/jsx-props-no-spreading */

import { useAppDispatch, useAppSelector } from 'src/store'
import { signin } from 'src/store/user'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import FormError from 'src/components/molecules/FormError'
import Button from 'src/components/atoms/Button'
import Link from 'src/components/atoms/Link/Link'
import AuthWrapper from 'src/components/organisms/AuthWrapper/AuthWrapper'
import AuthProviders from 'src/components/organisms/AuthProviders/AuthProviders'

const signinFormSchema = yup
  .object({
    email: yup
      .string()
      .required('Email address is required')
      .email('Email address is not valid.'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Minimum 6 characters needed.'),
    rememberMe: yup.boolean(),
  })
  .required()

type SigninFormSchema = yup.InferType<typeof signinFormSchema>

// https://res.cloudinary.com/thankyou/image/upload/v1640791791/nike/wallpapers/alexander-andrews-A3DPhhAL6Zg-unsplash_lngmew.png

const Login = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormSchema>({
    resolver: yupResolver(signinFormSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const onSubmit = handleSubmit((data) => {
    dispatch(signin(data))
  })

  const { loading } = useAppSelector((state) => state.user)

  return (
    <AuthWrapper>
      <h2 className='text-3xl font-light'>Sign in</h2>
      <form onSubmit={onSubmit} className='w-full mt-6 space-y-4'>
        <div>
          <label className='block text-sm text-gray-700'>
            Email
            <input
              {...register('email')}
              className='block w-full px-3 py-2 mt-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
            />
            <FormError error={errors.email} />
          </label>
        </div>
        <div className='space-y-1'>
          <label className='block text-sm text-gray-700'>
            Password
            <input
              type='password'
              {...register('password')}
              className='block w-full px-3 py-2 mt-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
            />
            <FormError error={errors.password} />
          </label>
        </div>
        <div className='flex items-center justify-between'>
          <label className='flex items-center text-sm text-gray-900'>
            <input
              type='checkbox'
              {...register('rememberMe')}
              className='w-4 h-4 border-gray-200 accent-black'
            />
            <span className='ml-2 select-none'>Remember me</span>
          </label>
          <div className='text-sm'>
            <Link href='/passwordreset'>Forgot your password?</Link>
          </div>
        </div>
        <div>
          <Button
            isLoading={loading}
            type='submit'
            className='flex justify-center w-full px-4 py-2 text-sm text-white bg-black border border-transparent rounded-md shadow-sm'
          >
            Sign in
          </Button>
        </div>
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
        Do not have an Blood find<span className='italic'>r</span> account?
        <br />
        <Link href='/signup' className='font-bold text-black'>
          Create one now
        </Link>
        .
      </div>
    </AuthWrapper>
  )
}

export default Login

// K A R T H I C K
