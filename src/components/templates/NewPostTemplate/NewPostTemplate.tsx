/* eslint-disable react/jsx-props-no-spreading */
import { Controller, useFormContext } from 'react-hook-form'

import Label from 'src/components/atoms/HtmlLabel'
import TextArea from 'src/components/atoms/HtmlTextArea'
import { RadioGroup, Switch } from '@headlessui/react'
import Button from 'src/components/atoms/Button'
import { selectUid } from 'src/store/user/userSlice'
import { Marker } from 'react-map-gl'
import PinSolid from '@heroicons/react/solid/LocationMarkerIcon'
import PinOutline from '@heroicons/react/outline/LocationMarkerIcon'
import FormSection, {
  FormSectionTitle,
} from 'src/components/organisms/FormSection/FormSection'
import Mapbox from 'src/components/organisms/HomeMapBox'
import {
  Fetching,
  Panel,
  PanelContainer,
  Error,
} from 'src/components/organisms/MapboxContent/MapboxContent'
import ZoomControls from 'src/components/organisms/ZoomControls'
import { useInsertPostMutation } from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from 'src/store'
import { BLOOD_GROUPS_EXPAND } from 'src/util/static'
import { MapProvider } from 'src/store/map/mapContext'
import { useEffect, useState } from 'react'
import { MapControlAction } from 'src/components/organisms/ZoomControls/ZoomControls'
import { selectViewport, setViewport } from 'src/store/map/mapSlice'
import { useRouter } from 'next/router'
import { setOffset } from 'src/store/post/postSlice'

export interface INewPostTemplateProps {}

const NewPostTemplate = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useFormContext()

  const [postCreated, addNewRequirement] = useInsertPostMutation()
  const uid = useAppSelector(selectUid)

  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    if (postCreated.data) {
      const lat = postCreated.data?.insert_posts_one?.lat || 0
      const lng = postCreated.data?.insert_posts_one?.lng || 0
      dispatch(setOffset(0))
      dispatch(setViewport({ latitude: lat, longitude: lng, zoom: 14 }))
      router.push('/')
    }
  }, [dispatch, postCreated.data, router])

  const onSubmit = handleSubmit(async (data) => {
    const { acceptTerms, verified, group, ...rem } = data
    const updatedGroup =
      BLOOD_GROUPS_EXPAND[group as keyof typeof BLOOD_GROUPS_EXPAND]
    addNewRequirement({ object: { ...rem, group: updatedGroup, uid } })
  })

  const viewport = useAppSelector(selectViewport)
  const [marker, setMarker] = useState(() => ({
    lat: viewport.latitude,
    lng: viewport.longitude,
  }))

  return (
    <form onSubmit={onSubmit} className='mb-8 '>
      <h1 className='mt-12 text-xl'>Blood requirement form</h1>

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
            title='Location'
            error={errors.lat || errors.lng}
          >
            <MapProvider className='h-128'>
              <Mapbox>
                <Marker
                  offsetTop={-10}
                  offsetLeft={-10}
                  longitude={marker.lng}
                  latitude={marker.lat}
                  draggable
                  // onDragStart={onMarkerDragStart}
                  onDrag={(event: { lngLat: [number, number] }) => {
                    setMarker({
                      lng: event.lngLat[0],
                      lat: event.lngLat[1],
                    })
                  }}
                  onDragEnd={(event) => {
                    const [lng, lat] = event.lngLat
                    setMarker({ lat, lng })
                    setValue('lat', lat)
                    setValue('lng', lng)
                  }}
                >
                  <PinSolid className='w-6 h-6' />
                </Marker>
                <PanelContainer>
                  <Panel position='center-bottom'>
                    <Fetching />
                    <Error />
                  </Panel>

                  <Panel position='right-center'>
                    <ZoomControls>
                      <ZoomControls.ZoomIn />
                      <ZoomControls.ZoomOut />
                      <ZoomControls.CurrentLocation />
                      <MapControlAction
                        placement='left'
                        title='Bring marker to map center'
                        Icon={PinOutline}
                        action={() =>
                          setMarker({
                            lat: viewport.latitude,
                            lng: viewport.longitude,
                          })
                        }
                      />
                    </ZoomControls>
                  </Panel>
                </PanelContainer>
              </Mapbox>
            </MapProvider>
          </Label>
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
