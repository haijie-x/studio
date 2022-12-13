import throttle from '@/utils/throttle'
import * as React from 'react'

import article from '@/consts/article'
import styled from 'styled-components'
export interface IArticleProps {
  onUpdateCurIdx: (idx: number) => void
}

const Wrapper = styled.div`
  flex: 1;
  position: relative;
  background-color: rgb(250, 249, 245);
  overflow-y: scroll;
  padding: 40px;
  h1 {
    font-size: 35px;
  }
  h1:nth-of-type(2n) {
    color: rgb(116, 157, 156);
  }
`

export function Article(props: IArticleProps) {
  const headingList = React.useRef<NodeListOf<HTMLHeadingElement> | null>(null)
  const handleScroll = () => {
    let idx: number = 0
    if (headingList.current) {
      let final: HTMLHeadElement = [...headingList.current].reduce((pre: any, cur: any) => {
        if (
          Math.abs(cur.getBoundingClientRect().top) < Math.abs(pre.getBoundingClientRect().top) &&
          cur.getBoundingClientRect().top > 0
        ) {
          return cur
        }
        return pre
      }, headingList.current[0])
      idx = final.dataset?.idx ? +final.dataset.idx : 0
    }
    props.onUpdateCurIdx(idx)
  }
  React.useEffect(() => {
    const headings = document.querySelectorAll('h1')
    headingList.current = headings
  }, [])

  return (
    <Wrapper onScroll={throttle<typeof handleScroll>(handleScroll, 200)}>
      <div></div>
      {article.map((p, idx) => {
        return (
          <h1 key={idx} data-idx={idx}>
            {p.article}
          </h1>
        )
      })}
    </Wrapper>
  )
}
