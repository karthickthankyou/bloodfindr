/* eslint-disable react/jsx-props-no-spreading */
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Label from 'src/components/atoms/HtmlLabel'
import TextArea from 'src/components/atoms/HtmlTextArea'
import { RadioGroup, Switch } from '@headlessui/react'
import dynamic from 'next/dynamic'
import Button from 'src/components/atoms/Button'
import FormSection, {
  FormSectionTitle,
} from 'src/components/organisms/FormSection/FormSection'
import { notify } from 'src/hooks'

const MapContainer = dynamic(
  () => import('src/components/organisms/MapContainer'),
  {
    ssr: false,
  }
)

export interface INewPostTemplateProps {}

export const newRequirementSchema = yup
  .object({
    address: yup.string().required('enter the address.'),
    zipcode: yup.string().required('enter the zipcode.'),
    group: yup.string().required('enter the blood group.'),
    message: yup.string().required('enter the message.'),
    emergency: yup.boolean(),
    verified: yup.boolean().required('verify the details you entered.'),
    acceptTerms: yup.boolean().required('accept the terms and conditions.'),
    lat: yup
      .number()
      .min(-90, 'lat must be -90 to 90')
      .max(90, `lat must be -90 to 90`)
      .required('location is not set.'),
    lng: yup
      .number()
      .min(-180, 'lng must be -180 to 180')
      .max(180, `lng must be -180 to 180`)
      .required('location is not set.'),
  })
  .required()

export type NewPostSchema = yup.InferType<typeof newRequirementSchema>

const NewPostTemplate = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<NewPostSchema>({
    resolver: yupResolver(newRequirementSchema),
    defaultValues: {
      address: undefined,
      message: '',
      zipcode: undefined,
      lat: undefined,
      lng: undefined,
      group: undefined,
      emergency: true,
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    console.log('Data ', data)
  })
  return (
    <form onSubmit={onSubmit} className='mb-8 '>
      <h1 className='mt-12 text-2xl'>Enter blood requirement details</h1>

      <div className='mt-12 space-y-12'>
        <FormSection
          title={
            <FormSectionTitle
              title='Basic information'
              description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam modi
              deleniti earum ratione qui odio molestiae.'
            />
          }
        >
          <Label
            className='col-span-2'
            title='Select blood group'
            error={errors.group}
          >
            <Controller
              name='group'
              control={control}
              render={({ field: { onChange, value } }) => (
                <RadioGroup
                  value={value}
                  onChange={(v) => {
                    onChange(v)
                  }}
                  className='col-span-2 space-y-2'
                >
                  <div className='flex flex-wrap w-full gap-3 my-2'>
                    {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map(
                      (item) => (
                        <RadioGroup.Option
                          key={item}
                          value={`${item}`}
                          className='cursor-pointer'
                        >
                          {({ checked }) => (
                            <div
                              className={` w-16 h-16 border-2 transition-all text-xl flex items-center justify-center rounded-full   ${
                                checked
                                  ? ' border-blood shadow-lg font-bold bg-white shadow-red/50'
                                  : ' shadow-black/20 bg-gray-25'
                              }`}
                            >
                              {item}
                            </div>
                          )}
                        </RadioGroup.Option>
                      )
                    )}
                  </div>
                </RadioGroup>
              )}
            />
          </Label>
          <Label
            className='col-span-2'
            title='Additional information'
            error={errors.message}
          >
            <TextArea
              placeholder='Write a few words about the situation. Enter any other information that the donor should know.'
              rows={5}
              {...register('message')}
            />
          </Label>
          <Label title='Emergency'>
            <Controller
              name='emergency'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Switch
                  checked={value || false}
                  onChange={onChange}
                  className={`${
                    value ? 'bg-blood' : 'bg-gray-200'
                  } relative inline-flex items-center h-8 shadow-inner rounded-full w-16`}
                >
                  <span
                    className={`${
                      value ? 'translate-x-9' : 'translate-x-1'
                    } inline-block w-6 h-6 transform bg-white rounded-full transition-transform`}
                  />
                </Switch>
              )}
            />
          </Label>
        </FormSection>

        <FormSection
          title={
            <FormSectionTitle
              title='Location'
              description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam modi
              deleniti earum ratione qui odio molestiae.'
            />
          }
        >
          <Label
            className='col-span-2'
            title='Full address'
            error={errors.address}
          >
            <TextArea
              rows={5}
              placeholder='Enter the full address.'
              {...register('address')}
            />
          </Label>
          <Label
            className='col-span-2'
            title='Location'
            error={errors.lat || errors.lng}
          >
            <div className='max-w-md mt-4 ml-1 space-y-4 text-gray-800'>
              <div>
                <div>
                  If you are currently in the location of the blood requirement.
                </div>
                <button
                  className='px-3 py-1 mt-2 text-black border-2 border-black rounded-full shadow-lg'
                  type='button'
                  onClick={() => {
                    navigator.geolocation.getCurrentPosition(
                      (position) => {
                        const lat = position.coords.latitude
                        const lng = position.coords.longitude
                        console.log(lat, lng)
                      },
                      (err) => {
                        notify({ message: err.message })
                      }
                    )
                  }}
                >
                  Get current location
                </button>
              </div>
              <div>Or</div>
              <div>
                Pick the exact location of the blood requirement by dragging the
                marker in the below map.
              </div>
            </div>
            <MapContainer className='h-128' />
          </Label>
        </FormSection>
        <FormSection
          title={
            <FormSectionTitle
              title='Verify & submit'
              description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam modi
              deleniti earum ratione qui odio molestiae.'
            />
          }
        >
          <div className='col-span-2'>
            <label className='flex items-center text-sm text-gray-900'>
              <input
                type='checkbox'
                {...register('verified')}
                className='w-4 h-4 border-gray-200 accent-black'
              />
              <span className='ml-2 select-none'>
                Verified all the details entered above carefully.
              </span>
            </label>
          </div>
          <div className='col-span-2'>
            <label className='flex items-center text-sm text-gray-900'>
              <input
                type='checkbox'
                {...register('acceptTerms')}
                className='w-4 h-4 border-gray-200 accent-black'
              />
              <span className='ml-2 select-none'>
                Accept the terms and conditions.
              </span>
            </label>
          </div>
          <div className='grid grid-cols-4 col-span-2 py-4'>
            <Button type='submit' className='col-span-2 bg-red-500 '>
              Submit
            </Button>
          </div>
        </FormSection>
      </div>
    </form>
  )
}

export default NewPostTemplate
