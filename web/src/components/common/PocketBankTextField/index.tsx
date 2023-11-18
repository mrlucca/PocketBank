import { OmitClassName } from '@/utils/constants'
import React from 'react'

interface PocketBankTextFieldProps
  extends OmitClassName<React.InputHTMLAttributes<HTMLInputElement>> {
  labelText: string
  value: string
  backgroundColor?: '#FEE98B' | '#F0F0F0'
  onChanged: (value: string) => void
  type?: 'text' | 'password'
  width?: string | undefined
}

const PocketBankTextField: React.FC<PocketBankTextFieldProps> = ({
  labelText,
  value,
  backgroundColor = '#FEE98B',
  onChanged,
  type = 'text',
  width,
  ...rest
}) => {
  const hasBackColor = backgroundColor ? `bg-${backgroundColor}` : ''

  return (
    <div className="flex flex-col items-start w-full">
      <label htmlFor="txtInput" className="mb-2">
        {labelText}
      </label>
      <input
        type={type}
        id="txtInput"
        className={`w-full ${hasBackColor} rounded-[--default-border-radius] h-9 px-2`}
        value={value}
        onChange={(e) => onChanged(e.target.value)}
        style={{ backgroundColor, width: width }}
        {...rest}
      />
    </div>
  )
}

export default PocketBankTextField
