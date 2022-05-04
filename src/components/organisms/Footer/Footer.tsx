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
