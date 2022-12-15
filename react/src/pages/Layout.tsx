import * as React from 'react'
import styled from 'styled-components'
import { CodePreview } from '@/components/CodePreview'
import { Article } from '@/components/Article'
export interface ILayoutProps {}

const Wrapper = styled.div`
  flex:1;
  display: flex;
  width: 100vw;
  height: 100vh;
`

export function Layout(props: ILayoutProps) {
  const [curIdx, setCurIdx] = React.useState(0)

  const updateCurIdx = React.useCallback((idx: number) => {
    setCurIdx(idx)
  }, [])

  return (
    <Wrapper>
      <CodePreview curIdx={curIdx} />
      <Article onUpdateCurIdx={updateCurIdx} />
    </Wrapper>
  )
}
