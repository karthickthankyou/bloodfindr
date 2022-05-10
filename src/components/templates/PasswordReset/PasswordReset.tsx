/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form'
import { useAppDispatch } from 'src/store'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import AuthWrapper from 'src/components/organisms/AuthWrapper/AuthWrapper'
import FormError from 'src/components/molecules/FormError'
import Button from 'src/components/atoms/Button/Button'
import Link from 'src/components/atoms/Link'
import { forgotPassword } from 'src/store/user/userActions'

export interface IPasswordResetProps {}
const forgotPasswordFormSchema = yup
  .object({
    email: yup
      .string()
      .required('Email address is required')
      .email('Email address is not valid.'),
  })
  .required()

type SigninFormSchema = yup.InferType<typeof forgotPasswordFormSchema>

const PasswordReset = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormSchema>({
    resolver: yupResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = handleSubmit((data) => {
    dispatch(forgotPassword(data.email))
  })
  return (
    <AuthWrapper>
      <h2 className='text-3xl font-light w-96'>Reset password</h2>
      <form onSubmit={onSubmit}>
        <label className='block mt-4 mb-4 text-sm text-gray-700'>
          Email
          <input
            {...register('email')}
            placeholder='Enter your email id.'
            className='block w-full px-3 py-2 mt-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
          />
          <FormError error={errors.email} />
        </label>
        <Button type='submit'>Send reset password link</Button>

        <Link href='/login' className='block mt-6 text-sm'>
          Back to login
        </Link>
      </form>
    </AuthWrapper>
  )
}

export default PasswordReset
