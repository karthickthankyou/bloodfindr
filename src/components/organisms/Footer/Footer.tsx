import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare'
import { IconType } from '@react-icons/all-files'
import Link from 'src/components/atoms/Link'

const Icon = ({ IconInput }: { IconInput: IconType }) => (
  <Link
    href='/'
    className='w-10 h-10 p-1.5 rounded-full text-black bg-gray-100  hover:bg-white'
  >
    <IconInput className='w-full h-full ' />
  </Link>
)

const FooterLink = ({ text }: { text: string }) => (
  <Link href='/' className='block text-gray-600 hover:text-gray-900'>
    {text}
  </Link>
)

// const footerItems = [
//   'About',
//   'Zestimates',
//   'Research',
//   'Careers',
//   'Help',
//   'Advertise',
//   'Fair Housing Guide',
//   'Terms of use',
//   'Privacy Portal',
//   'Cookie Preference',
//   'Blog',
//   'AI',
//   'Mobile Apps',
//   'Trulia',
//   'StreetEasy',
//   'HotPads',
//   'Out East',
//   'ShowingTime',
// ]

const Footer = ({ className }: { className?: string }) => (
  <footer className={` bg-gray-100 ${className}`}>
    <div className='container py-6 mx-auto'>
      <div className='justify-between text-xs md:flex'>
        <ul className='flex gap-2'>
          <li>
            Blood findr,{' '}
            <a
              className='text-[#e63746]'
              rel='noreferrer'
              href='https://www.iamkarthick.com'
              target='_blank'
            >
              Karthick Ragavendran
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
