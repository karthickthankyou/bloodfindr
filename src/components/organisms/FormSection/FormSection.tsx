import { ReactElement, ReactNode } from 'react'

export interface IFormSectionProps {
  title: string | ReactElement
  children: ReactNode
}

const FormSection = ({ title, children }: IFormSectionProps) => (
  <div className='grid gap-8 pb-6 sm:grid-cols-2 md:grid-cols-3'>
    <div className='col-span-1 '>
      <div className='sticky top-0 '>{title}</div>
    </div>
    <div className='grid col-span-2 gap-4 sm:grid-cols-2'>{children}</div>
  </div>
)

export const FormSectionTitle = ({
  title,
  description,
}: {
  title: string
  description: string
}) => (
  <div className='space-y-4'>
    <div className='text-xl font-semibold'>{title}</div>
    <div className='text-sm text-gray-600'>{description}</div>
  </div>
)

export default FormSection
