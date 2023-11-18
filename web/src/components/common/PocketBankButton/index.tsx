import { OmitClassName } from '@/utils/constants'
import React, { ButtonHTMLAttributes } from 'react'

interface PocketBankButtonProps extends OmitClassName<ButtonHTMLAttributes<HTMLButtonElement>> {
  width?: React.CSSProperties['width']
  labelText: string
  backgroundColor?: 'var(--primary-color)' | 'var(--secondary-color)'
  hoverBackgroundColor?: string | undefined
}

const PocketBankButton: React.FC<PocketBankButtonProps> = ({
  width,
  labelText,
  backgroundColor = 'var(--secondary-color)',
}) => {
  const labelTextColor =
    backgroundColor == 'var(--secondary-color)' ? 'var(--primary-color)' : 'var(--secondary-color)'

  return (
    <button
      className="p-2 rounded-[15px] text-base"
      style={{
        backgroundColor: backgroundColor,
        color: labelTextColor,
        width: width,
      }}
    >
      {labelText}
    </button>
  )
}

export default PocketBankButton
