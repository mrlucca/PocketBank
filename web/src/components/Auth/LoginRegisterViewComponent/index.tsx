import CenteredBox from '@/components/common/CenteredBox'
import LeftCenteredBoxItem from '@/components/Auth/LeftCenteredBoxItem'
import MainBackground from '@/components/common/MainBackground'
import RightCenteredBoxItem from '@/components/Auth/RightCenteredBoxItem'
import React from 'react'

interface LoginRegisterViewComponentProps {
  leftElements: React.ReactElement
  rightElements: React.ReactElement
  backgroundColorCenteredBoxEnabled?: boolean
}

const LoginRegisterViewComponent: React.FC<LoginRegisterViewComponentProps> = (props) => {
  return (
    <MainBackground>
      <CenteredBox backgroundColorEnabled={props.backgroundColorCenteredBoxEnabled}>
        <LeftCenteredBoxItem>{props.leftElements}</LeftCenteredBoxItem>
        <RightCenteredBoxItem>{props.rightElements}</RightCenteredBoxItem>
      </CenteredBox>
    </MainBackground>
  )
}

export default LoginRegisterViewComponent
