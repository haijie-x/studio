import * as React from 'react'
import styled from 'styled-components'
import article from '@/consts/article'

export interface ICodeProps {
  curIdx: number
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(32, 34, 38);
  color: rgb(198, 221, 217);
  white-space: pre;
`

export function Code(props: ICodeProps) {
  return (
    <Wrapper>
      <div className="animate__animated animate__backInLeft" key={props.curIdx}>
        {article[props.curIdx].code}
      </div>
    </Wrapper>
  )
}
