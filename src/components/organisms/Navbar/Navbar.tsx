import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Link from 'src/components/atoms/Link'
import Brand from 'src/components/atoms/Brand'
import Container from 'src/components/atoms/Container/Container'

export interface INavbarProps {}

const pathWithFixedNav: string[] = []

const Navbar = () => {
  const router = useRouter()
  const url = router.pathname
  const navCls = useMemo(
    () => (pathWithFixedNav.includes(url) ? 'sticky top-0' : 'relative'),
    [url]
  )

  return (
    <nav
      style={{ zIndex: '1000' }}
      className={`${navCls} z-50 flex items-center justify-center w-full h-16 border-b-2 border-white/80 top`}
    >
      <div className='relative w-full'>
        <Container className='flex items-center w-full h-6'>
          <Link href='/' className='text-xl font-semibold text-primary-600 '>
            <Brand />
          </Link>
        </Container>
      </div>
    </nav>
  )
}

export default Navbar
