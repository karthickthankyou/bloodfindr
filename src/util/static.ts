/* eslint-disable camelcase */
import { Blood_Groups_Enum } from 'src/generated/graphql'

export const BLOOD_GROUPS = {
  A_POSITIVE: 'A+',
  A_NEGATIVE: 'A-',
  O_POSITIVE: 'O+',
  O_NEGATIVE: 'O-',
  B_POSITIVE: 'B+',
  B_NEGATIVE: 'B-',
  AB_POSITIVE: 'AB+',
  AB_NEGATIVE: 'AB-',
  'A+': 'A_POSITIVE',
  'A-': 'A_NEGATIVE',
  'O+': 'O_POSITIVE',
  'O-': 'O_NEGATIVE',
  'B+': 'B_POSITIVE',
  'B-': 'B_NEGATIVE',
  'AB+': 'AB_POSITIVE',
  'AB-': 'AB_NEGATIVE',
}
export const BLOOD_GROUPS_EXPAND = {
  'A+': Blood_Groups_Enum.APositive,
  'A-': Blood_Groups_Enum.ANegative,
  'O+': Blood_Groups_Enum.OPositive,
  'O-': Blood_Groups_Enum.ONegative,
  'B+': Blood_Groups_Enum.BPositive,
  'B-': Blood_Groups_Enum.BNegative,
  'AB+': Blood_Groups_Enum.AbPositive,
  'AB-': Blood_Groups_Enum.AbNegative,
} as const
