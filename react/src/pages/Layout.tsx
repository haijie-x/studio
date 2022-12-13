import * as React from 'react'
import styled from 'styled-components'
import { Code } from '@/components/Code'
import { Article } from '@/components/Article'
export interface ILayoutProps {}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

export function Layout(props: ILayoutProps) {
  const [curIdx, setCurIdx] = React.useState(0)

  const updateCurIdx = (idx: number) => {
    setCurIdx(idx)
  }
  return (
    <Wrapper>
      <Code curIdx={curIdx}></Code>
      <Article onUpdateCurIdx={updateCurIdx}></Article>
    </Wrapper>
  )
}
