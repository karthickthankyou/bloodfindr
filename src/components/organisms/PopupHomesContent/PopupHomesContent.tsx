/* eslint-disable camelcase */

import Image from 'src/components/atoms/Image'
import { useGetHighlightedHomeData } from 'src/store/post/postNetwork'
import Link from 'src/components/atoms/Link'
import Skeleton from 'src/components/molecules/Skeleton'

export interface IPopupHomesContentProps {
  id: number
}

const HomeContentSkeleton = () => (
  <div className='flex flex-col w-48 text-gray-200 '>
    <Image src='https://via.placeholder.com/150' className='w-48 h-36' alt='' />
    <div className='flex flex-col p-2 bg-white/90 backdrop-filter backdrop-blur-sm filter'>
      <Skeleton className='w-full h-6' />
      <Skeleton className='w-3/4 h-4 mt-4' />
      <Skeleton className='w-1/2 h-4 mt-1' />
      <Skeleton className='w-3/4 h-4 mt-2' />
    </div>
  </div>
)

const PopupHomesContent = ({ id }: IPopupHomesContentProps) => {
  const highlightedHomeDetails = useGetHighlightedHomeData(id)
  const { data, fetching, error } = highlightedHomeDetails!

  if (fetching) return <HomeContentSkeleton />
  if (error) return <div>Something went wrong...</div>

  return (
    <div className='flex flex-col w-48 '>
      <Link href={`/homes/${id}`}>
        <div className='relative h-36'>
          <Image
            src='https://via.placeholder.com/150'
            className='h-full'
            alt=''
          />
        </div>
      </Link>
      <div className='relative flex flex-col cursor-auto bg-white/50 backdrop-filter backdrop-blur-sm filter'>
        <div className='p-2'>
          <div className='flex items-baseline justify-between'>
            <div className='mb-1 text-2xl font-light leading-none'>
              ${data?.posts_by_pk?.group}
            </div>
          </div>
          <div className='flex flex-wrap mt-2 text-sm'>
            <div className='text-sm '>{data?.posts_by_pk?.group}</div>
            <span className='mx-1 text-gray-300'>•</span>
            <div>{data?.posts_by_pk?.message} bd</div>
            <span className='mx-1 text-gray-300'>•</span>
            <div>{data?.posts_by_pk?.status} ba</div>
          </div>
        </div>
        <Link
          href={`/homes/${id}`}
          className='p-2 text-xs bg-gray-50 line-clamp-2'
        >
          {data?.posts_by_pk?.address || ''}
        </Link>
      </div>
    </div>
  )
}

export default PopupHomesContent
