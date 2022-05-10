import React, { HTMLProps } from 'react'
import { FieldError } from 'react-hook-form'
import FormError from 'src/components/molecules/FormError'

export interface IHtmlLabelProps {}

const HtmlLabel = React.forwardRef<
  HTMLLabelElement,
  {
    error?: FieldError | undefined
  } & HTMLProps<HTMLLabelElement>
>(({ children, title, error, className }, ref) => (
  <label ref={ref} className={`block  ${className}`}>
    <div className='mb-1'>{title}</div>
    {children}

    <FormError error={error} />
  </label>
))

HtmlLabel.displayName = 'HtmlLabel'

export default HtmlLabel
