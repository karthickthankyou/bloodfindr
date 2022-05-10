/* eslint-disable react/jsx-props-no-spreading */
import { Controller, FieldError, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input from 'src/components/atoms/HtmlInput'
import Label from 'src/components/atoms/HtmlLabel'
import TextArea from 'src/components/atoms/HtmlTextArea'
import HtmlSelect from 'src/components/atoms/HtmlSelect/HtmlSelect'
import { RadioGroup, Switch } from '@headlessui/react'
import dynamic from 'next/dynamic'
import Button from 'src/components/atoms/Button'

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
    lat: yup
      .number()
      .min(-90, 'lat must be -90 to 90')
      .max(90, `lat must be -90 to 90`)
      .required('lat is not set.'),
    lng: yup
      .number()
      .min(-180, 'lng must be -180 to 180')
      .max(180, `lng must be -180 to 180`)
      .required('images in required.'),
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

  console.log('Watch: ', watch())
  const onSubmit = handleSubmit(async (data) => {
    console.log('Data ', data)
  })
  return (
    <form onSubmit={onSubmit} className='mb-8 '>
      <h1 className='text-2xl'>Enter blood requirement details</h1>

      <div className='grid gap-8 md:grid-cols-2'>
        <div className='space-y-8'>
          <Label title='Message' error={errors.message}>
            <TextArea
              placeholder='Write a few words about the situation. Enter any other information that the donor should know.'
              rows={5}
              {...register('message')}
            />
          </Label>
          <Label title='Select blood group' error={errors.group}>
            <Controller
              name='group'
              control={control}
              render={({ field: { onChange, value } }) => (
                <RadioGroup
                  value={value}
                  onChange={(v) => {
                    console.log('Value ', v)
                    onChange(v)
                  }}
                  className='col-span-2 space-y-2'
                >
                  <div className='flex flex-wrap justify-center w-full gap-3 my-2'>
                    {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map(
                      (item) => (
                        <RadioGroup.Option
                          key={item}
                          value={`${item}`}
                          className='cursor-pointer'
                        >
                          {({ checked }) => (
                            <div
                              className={`w-16 h-16 border-2 transition-all flex items-center justify-center rounded-full   ${
                                checked
                                  ? ' border-black shadow-lg font-bold text-xl bg-white shadow-red/50'
                                  : ' shadow-black/20  bg-gray-50'
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

          <Label title='Full address' error={errors.address}>
            <TextArea
              rows={5}
              placeholder='Enter the full address.'
              {...register('address')}
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
                    value ? 'bg-black' : 'bg-gray-200'
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
        </div>
        <div className='space-y-8'>
          <Label title='Location' error={errors.lat || errors.lng}>
            <div className='max-w-md mt-4 space-y-4 text-gray-800'>
              <div>
                <button type='button'>Click here.</button> If you are currently
                in the location of the blood requirement.
              </div>
              <div>Or</div>
              <div>
                Pick the exact location of the blood requirement by dragging the
                marker in the below map.
              </div>
            </div>
            <MapContainer className='h-96' />
          </Label>
        </div>
      </div>
      <div className='my-6'>
        Note: Verify all the details entered above carefully.
      </div>

      <div className='grid grid-cols-4 py-4'>
        <Button type='submit' className='col-start-4 bg-red-500 '>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default NewPostTemplate
