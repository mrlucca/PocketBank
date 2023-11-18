import React from 'react'

interface CenteredBoxProps {
  children: React.ReactNode
  backgroundColorEnabled?: boolean
  overflowHiddenEnabled?: boolean
}

// box
const CenteredBox: React.FC<CenteredBoxProps> = ({
  children,
  backgroundColorEnabled = false,
  overflowHiddenEnabled = false,
}) => {
  const hasBackgroundcolor = backgroundColorEnabled ? 'bg-white' : 'bg-transparent'

  return (
    <div
      className={`relative w-full max-w-screen-xl h-[580px] rounded-[--default-border-radius] ${hasBackgroundcolor}`}
      style={overflowHiddenEnabled ? { overflow: 'hidden' } : undefined}
    >
      {children}
    </div>
  )
}

export default CenteredBox
