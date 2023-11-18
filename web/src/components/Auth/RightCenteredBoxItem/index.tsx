import React from 'react'

const RightCenteredBoxItem = ({ children }: any) => {
  return (
    <div className="absolute h-full w-2/5 left-[60%] top-0 bg-[--primary-color] rounded-[--default-border-radius] overflow-hidden shadow-md">
      {children}
    </div>
  )
}

export default RightCenteredBoxItem
