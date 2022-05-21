import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Label from 'src/components/atoms/HtmlLabel'
import NewPostTemplate from 'src/components/templates/NewPostTemplate'
import Container from 'src/components/atoms/Container/Container'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const newRequirementSchema = yup
  .object({
    address: yup.string().required('enter the address.'),
    // zipcode: yup.string().required('enter the zipcode.'),
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

const AddNew: NextPage = () => {
  const methods = useForm<NewPostSchema>({
    resolver: yupResolver(newRequirementSchema),
    defaultValues: {
      address: undefined,
      message: '',
      lat: undefined,
      lng: undefined,
      group: undefined,
      emergency: true,
    },
  })
  return (
    <div>
      <NextSeo
        title='Add blood requirement | Blood findr'
        description='Add blood requirement here.'
      />
      <Container>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <FormProvider {...methods}>
          <NewPostTemplate />
        </FormProvider>
      </Container>
      <div className='py-6 bg-red-50'>
        <Container>
          <h2 className='mb-2 text-lg font-semibold text-red-900'>
            Important note
          </h2>
          <article className='max-w-lg space-y-2 text-lg'>
            <p>
              Do not solely rely on this one platform to get your blood
              requirement resolved. After submitting this form, Make sure to use
              all other possible ways to reach out to more donors.
            </p>
            <p> Stay strong. Help will come.</p>
            <a
              target='_blank'
              rel='noreferrer'
              className='block py-2 underline underline-offset-4 '
              href='https://www.google.com/search?q=find+blood+donors+near+me'
            >
              Find help in google
            </a>
          </article>
        </Container>
      </div>
    </div>
  )
}

export default AddNew
