import * as React from 'react'
import styled from 'styled-components'

export interface IFadeProps {
  show: boolean
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 30px;
`

export function Fade(props: React.PropsWithChildren<IFadeProps>) {
  const [shouldRender, setRender] = React.useState(props.show)

  React.useEffect(() => {
    if (props.show) setRender(true)
  }, [props.show])

  const onAnimationEnd = () => {
    if (!props.show) setRender(false)
  }

  return shouldRender ? (
    <Wrapper
      className={`animate__animated ${props.show ? 'animate__backInDown' : 'animate__backOutUp '} `}
      onAnimationEnd={onAnimationEnd}
    >
      {props.children}
    </Wrapper>
  ) : (
    <span></span>
  )
}
