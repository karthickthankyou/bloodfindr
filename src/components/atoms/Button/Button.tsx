export interface IButtonProps {}

const Button = ({}: IButtonProps) => {
  return (
    <button className='px-2 py-1 text-white rounded bg-red-500'>
      Hello, This is Button component!
    </button>
  )
}

export default Button
