import { GetStaticProps } from 'next'

import { ParsedUrlQuery } from 'querystring'
import ProfileTemplate from 'src/components/templates/ProfileTemplate'
import { client, ssrCache } from 'src/util/urql'
import { dateDifference, getQueryParam } from 'src/util'

import { useRouter } from 'next/router'
import { GetUserDocument, useGetUserQuery } from 'src/generated/graphql'
import { NextSeo } from 'next-seo'
import { BLOOD_GROUPS } from 'src/util/static'
import { useAppSelector } from 'src/store'
import { selectUid } from 'src/store/user/userSlice'
import Link from 'src/components/atoms/Link'

const ProductPage = () => {
  const uidInParam = getQueryParam(useRouter().query.uid)
  const [{ data, fetching, error }] = useGetUserQuery({
    variables: { uid: uidInParam },
  })

  const uid = useAppSelector(selectUid)

  const displayName = data?.users_by_pk?.name || ''
  const group = data?.users_by_pk?.group || ''
  const bloodGroupReadable = group ? BLOOD_GROUPS[group] : ''
  const lastSeen = dateDifference(data?.users_by_pk?.last_seen)
  const about = data?.users_by_pk?.about

  console.log('donor data ', data)

  return (
    <>
      <NextSeo
        title={`Blood donor | ${displayName} | ${bloodGroupReadable}`}
        description={`${about} Last seen ${lastSeen}`}
      />
      {data?.users_by_pk ? (
        <ProfileTemplate user={{ data, fetching, error }} />
      ) : (
        <div className='flex items-center justify-center min-h-screen80'>
          {uid === uidInParam ? (
            <div>
              <div>You have not set up your donor information.</div>
              <Link
                className='block font-semibold underline underline-offset-4'
                href='/profile'
              >
                Go to profile
              </Link>
            </div>
          ) : (
            <div>Donor not found.</div>
          )}
        </div>
      )}
    </>
  )
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

interface Params extends ParsedUrlQuery {
  uid: string
}

// This function gets called at build time
export const getStaticProps: GetStaticProps<{}, Params> = async (context) => {
  const uid = context.params?.uid || -90
  await client?.query(GetUserDocument, { uid }).toPromise()

  const props = {
    props: JSON.parse(
      JSON.stringify({
        urqlState: ssrCache.extractData() || null,
      })
    ),
  }

  return {
    props,
  }
}

export default ProductPage
