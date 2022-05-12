/* eslint-disable camelcase */
import { Blood_Groups_Enum } from 'src/generated/graphql'
import { BLOOD_GROUPS } from 'src/util/static'

export interface IBloodGroupProps {
  bloodGroup: Blood_Groups_Enum | undefined | null
  className?: string
}

const BloodGroup = ({ bloodGroup, className }: IBloodGroupProps) => {
  const bloodGroupReadable = bloodGroup ? BLOOD_GROUPS[bloodGroup] : ''
  return (
    <div
      className={`flex items-center  justify-center text-5xl  border-2 border-black rounded-lg bg-white/80  w-24 h-24 ${className}`}
    >
      {bloodGroupReadable}
    </div>
  )
}

export default BloodGroup
