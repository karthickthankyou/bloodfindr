import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCheckUsername } from 'src/store/streams'
import { useEffect } from 'react'
import { UseQueryState } from 'urql'
import { GetUserQuery } from 'src/generated/graphql'
import Container from 'src/components/atoms/Container/Container'
import BloodGroup from 'src/components/molecules/BloodGroup'
import { dateDifference } from 'src/util'
import Button from 'src/components/atoms/Button/Button'
import { Menu } from '@headlessui/react'

export interface IProfileTemplateProps {
  user: Pick<UseQueryState<GetUserQuery, object>, 'data' | 'fetching' | 'error'>
}

const MyDropdown = () => (
  <Menu>
    <Menu.Button>More</Menu.Button>
    <Menu.Items className='flex flex-col gap-2 p-2 overflow-hidden bg-white shadow-lg rouned-lg'>
      <Menu.Item>
        {({ active }) => (
          <Button className='inline-block' variant='text'>
            Report user
          </Button>
        )}
      </Menu.Item>
    </Menu.Items>
  </Menu>
)

const profileFormSchema = yup.object({
  username: yup.string(),
  name: yup.string(),
  about: yup.string(),
  usernameAvailable: yup.string().required('Username is not available'),
  rememberMe: yup.boolean(),
})

type ProfileFormSchema = yup.InferType<typeof profileFormSchema>

const ProfileTemplate = ({ user }: IProfileTemplateProps) => {
  const {
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<ProfileFormSchema>({
    resolver: yupResolver(profileFormSchema),
    defaultValues: {
      username: '',
      name: '',
      about: '',
      usernameAvailable: '',
    },
  })

  const { username } = watch()
  const {
    data: usernameAvailable,
    loading: usernameChecking,
    error,
  } = useCheckUsername({ username })

  useEffect(() => {
    if (usernameAvailable.length !== 0) {
      setError('usernameAvailable', { message: 'Username is not available' })
      setValue('usernameAvailable', '')
    } else {
      clearErrors('usernameAvailable')
      setValue('usernameAvailable', 'OK')
    }
  }, [clearErrors, setError, setValue, usernameAvailable])

  const lastSeen = dateDifference(user.data?.users_by_pk?.last_seen)
  const about = user.data?.users_by_pk?.about

  return (
    <div>
      <div className='py-6 min-h-screen80'>
        <Container className='grid grid-cols-3 gap-3 '>
          <div className='col-span-1'>
            <div className='flex gap-3 '>
              <BloodGroup
                bloodGroup={user.data?.users_by_pk?.group}
                className='flex-shrink-0'
              />
              <div className='mt-2'>
                <div className='text-lg font-semibold'>
                  {user.data?.users_by_pk?.name}
                </div>
                <div className=''>{user.data?.users_by_pk?.username}</div>
                <div className='text-sm text-gray-700'>
                  Last seen {lastSeen}
                </div>
              </div>
            </div>
            <div className='max-w-md my-2 text-sm text-gray-700'>{about}</div>
            <div className='flex items-center justify-center py-2 my-2 bg-gray-50'>
              <Button variant='text'>Report user</Button>
            </div>
          </div>

          <div className='col-span-2'>
            <div>Recent activities</div>
            <div className='flex items-center justify-center w-full h-full bg-gray-50'>
              No activities.
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ProfileTemplate
