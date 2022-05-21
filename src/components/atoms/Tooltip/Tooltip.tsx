/* eslint-disable react/jsx-props-no-spreading */
import MuiTooltip, { TooltipProps } from '@mui/material/Tooltip'
import { AllColors } from 'src/types'
import { bgClasses, colorClasses } from 'src/util'

export type ITooltipProps = {
  bg?: AllColors
  text?: AllColors
} & TooltipProps

const Tooltip = ({
  bg = 'white',
  text = 'black',
  placement = 'left',
  children,
  title,
  arrow = true,
  ...props
}: ITooltipProps) => (
  <MuiTooltip
    classes={{
      tooltip: ` ${bgClasses[bg]}  ${colorClasses[text]} shadow-lg shadow/black/30 `,
      arrow: `${colorClasses[bg]}`,
    }}
    // TransitionComponent={Fade}
    TransitionProps={{ timeout: 0 }}
    placement={placement}
    title={title}
    arrow={arrow}
    {...props}
  >
    {children}
  </MuiTooltip>
)

export default Tooltip
