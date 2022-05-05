import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useMemo, useState } from 'react'
import Link from 'src/components/atoms/Link'
import Brand from 'src/components/atoms/Brand'

import MenuIcon from '@heroicons/react/outline/MenuIcon'
import Sidebar from 'src/components/molecules/Sidebar'
import Button from 'src/components/atoms/Button/Button'

export interface INavbarProps {}

const pathWithFixedNav: string[] = ['/']

const NavSidebar = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => (
  <Sidebar open={open} setOpen={setOpen}>
    <Sidebar.Header setOpen={setOpen} />
    <Sidebar.Body>
      <Link href='/new'>Add new blood requirement</Link>
    </Sidebar.Body>
    <Sidebar.Footer>Footer</Sidebar.Footer>
  </Sidebar>
)

const Navbar = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const url = router.pathname
  const navCls = useMemo(
    () => (pathWithFixedNav.includes(url) ? 'fixed ' : 'relative'),
    [url]
  )

  return (
    <nav
      className={`${navCls} z-1200 flex items-center justify-between w-full px-2 h-14`}
    >
      <NavSidebar open={open} setOpen={setOpen} />
      <Link href='/' className='text-xl font-semibold text-primary-600 '>
        <Brand />
      </Link>
      <button type='button' onClick={() => setOpen((state) => !state)}>
        <MenuIcon className='stroke-1 w-7 h-7' />
      </button>
    </nav>
  )
}

export default Navbar
