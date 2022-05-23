import { Marker } from 'react-map-gl'
import HeartIcon from '@heroicons/react/solid/HeartIcon'
import { SearchPostsByLocationQuery } from 'src/generated/graphql'
import { startLongHoverDispatch, stopLongHoverDispatch } from 'src/hooks'

import { setHighlightedPostId } from 'src/store/post/postSlice'
import { useRouter } from 'next/router'

export interface IMapMarkerProps {
  post: SearchPostsByLocationQuery['posts'][0]
  highlighted?: boolean
}

const MapMarker = ({ post, highlighted }: IMapMarkerProps) => {
  const MarkerIcon = HeartIcon

  const highlightedClasses =
    highlighted &&
    'fill-primary scale-110  opacity-100  border border-primary  bg-white'

  const router = useRouter()

  return (
    <Marker latitude={post.lat} longitude={post.lng}>
      <MarkerIcon
        onMouseOver={() =>
          startLongHoverDispatch(setHighlightedPostId(post.id))
        }
        onTouchStart={() =>
          startLongHoverDispatch(setHighlightedPostId(post.id))
        }
        onMouseOut={() => stopLongHoverDispatch()}
        // onTouchEnd={() => console.log('Touch end')}
        // onTouchStart={() => console.log('Touched start')}
        onClick={() => {
          router.push(`/homes/${post.id}`)
        }}
        // onMouseLeave={() => debouncedDispatch(setHighlightedPostId(null))}
        className={`w-5 h-5 opacity-90  text-primary transition-all shadow-2xl cursor-pointer ease-in-out duration-200 rounded relative ${highlightedClasses}`}
      />
    </Marker>
  )
}

export default MapMarker
