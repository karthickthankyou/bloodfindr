import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Label from 'src/components/atoms/HtmlLabel'
import NewPostTemplate from 'src/components/templates/NewPostTemplate'
import Container from 'src/components/atoms/Container/Container'

const AddNew: NextPage = () => (
  <div>
    <NextSeo
      title='Add blood requirement | Blood findr'
      description='Add blood requirement here.'
    />
    <Container>
      <NewPostTemplate />
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

export default AddNew
