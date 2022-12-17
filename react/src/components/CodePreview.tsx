import * as React from 'react'
import styled from 'styled-components'
import article from '@/consts/article'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import '@/styles/animate.css'

export interface ICodePreviewProps {
  curIdx: number
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  background-color: rgb(32, 34, 38);
  .code__wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 30px;
    font-size: 15px;
    word-break: break-all;
    white-space: pre;
    color: rgb(198, 221, 217);
  }
`

export function CodePreview(props: ICodePreviewProps) {
  const nodeRef = React.useRef<HTMLDivElement | null>(null)

  return (
    <Wrapper>
      <SwitchTransition>
        <CSSTransition
          key={props.curIdx}
          nodeRef={nodeRef}
          addEndListener={done => {
            nodeRef.current!.addEventListener('transitionend', done, false)
          }}
          classNames="code"
          appear
        >
          <div ref={nodeRef} className="code__wrapper">
            <span>{article[props.curIdx].code}</span>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </Wrapper>
  )
}
