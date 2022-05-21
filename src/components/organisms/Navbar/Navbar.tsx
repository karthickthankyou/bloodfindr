import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useMemo, useState } from 'react'
import Link from 'src/components/atoms/Link'
import Brand from 'src/components/atoms/Brand'

import MenuIcon from '@heroicons/react/outline/MenuIcon'
import Sidebar from 'src/components/molecules/Sidebar'
import { useAppDispatch, useAppSelector } from 'src/store'
import { selectUid } from 'src/store/user/userSlice'
import { signout } from 'src/store/user'
import Initials from 'src/components/molecules/Initials'

export interface INavbarProps {}

const pathWithFixedNav: string[] = ['/']
const pathWithContainerNav: string[] = ['/donor/[uid]', '/new']

const NavSidebar = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const uid = useAppSelector(selectUid)
  const dispatch = useAppDispatch()
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <Sidebar.Header setOpen={setOpen} />
      <Sidebar.Body>
        {uid ? <Link href='/new'>Add new blood requirement</Link> : null}
        <Link href='/donor/sdf'>Sample donor page</Link>
        <Link href='/profile'>Sample profile</Link>
      </Sidebar.Body>
      <Sidebar.Footer>
        {uid ? (
          <button type='button' onClick={() => dispatch(signout())}>
            Logout
          </button>
        ) : (
          <Link href='/login'>Login</Link>
        )}
      </Sidebar.Footer>
    </Sidebar>
  )
}

const Navbar = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const url = router.pathname
  const navCls = useMemo(
    () => (pathWithFixedNav.includes(url) ? 'fixed ' : 'relative'),
    [url]
  )
  const containerCls = useMemo(
    () =>
      pathWithContainerNav.includes(url) ? 'container mx-auto' : 'px-2 py-1',
    [url]
  )

  const uid = useAppSelector(selectUid)

  return (
    <nav
      className={`${navCls} ${containerCls} z-1200  flex items-center justify-between w-full  h-14`}
    >
      <NavSidebar open={open} setOpen={setOpen} />
      <Link href='/' className='text-xl font-semibold text-primary-600 '>
        <Brand />
      </Link>
      <div className='flex items-center gap-2'>
        {uid ? (
          <Link href={`/donor/${uid}`}>
            <Initials
              className='stroke-1 w-7 h-7'
              name='Karthick Ragavendran'
            />
          </Link>
        ) : (
          <Link href='/login'>Login</Link>
        )}
        <button type='button' onClick={() => setOpen((state) => !state)}>
          <MenuIcon className='stroke-1 w-7 h-7' />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
