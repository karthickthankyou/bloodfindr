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
    () => (pathWithFixedNav.includes(url) ? 'fixed' : 'relative'),
    [url]
  )

  return (
    <nav
      className={`${navCls} z-30 flex items-center justify-center w-full h-16 bg-white/90 border-b-2 border-white/80 top`}
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
