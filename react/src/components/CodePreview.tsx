import * as React from 'react'
import styled from 'styled-components'
import article from '@/consts/article'
import { Fade } from './Fade'

export interface ICodePreviewProps {
  curIdx: number
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  background-color: rgb(32, 34, 38);
  color: rgb(198, 221, 217);
  word-break: break-all;
  font-size: 30px;
`

export function CodePreview(props: ICodePreviewProps) {
  return (
    <Wrapper>
      {article.map((item, index) => {
        return (
          <Fade show={index == props.curIdx} key={index}>
            <div>{item.code}</div>
          </Fade>
        )
      })}
    </Wrapper>
  )
}
