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
  padding: 30px 30px 30px 50px;
  color: rgb(51, 51, 51);
  h1 {
    font-size: 35px;
  }
  h1:nth-of-type(2n) {
    color: rgb(116, 157, 156);
  }
`

const Nav = styled.div`
  background-color: rgba(175, 173, 169, 0.5);
  border-radius: 3px;
  position: absolute;
  left: 35px;
  width: 3px;
  top: 0px;
`

export function Article(props: IArticleProps) {
  const headingList = React.useRef<NodeListOf<HTMLHeadingElement> | null>(null)
  const [navStyle, setNavStyle] = React.useState<Record<string, any>>({})

  const handleScroll = () => {
    let idx: number = 0
    if (headingList.current) {
      let rect: HTMLHeadElement = [...headingList.current].reduce((pre: any, cur: any) => {
        if (
          Math.abs(cur.getBoundingClientRect().top) < Math.abs(pre.getBoundingClientRect().top) &&
          cur.getBoundingClientRect().top > 0
        ) {
          return cur
        }
        return pre
      }, headingList.current[0])

      setOffset(rect.offsetHeight, rect.offsetTop)
      idx = rect.dataset?.idx ? +rect.dataset.idx : 0
    }
    props.onUpdateCurIdx(idx)
  }

  const setOffset = (height: number, top: number, first: boolean = false) => {
    setNavStyle({
      height: `${height}px`,
      transform: `translateY(${top}px)`,
      transition: `transform linear ${first ? 0 : 0.5}s`,
    })
  }
  React.useEffect(() => {
    const headings = document.querySelectorAll('h1')
    headingList.current = headings

    const rect = headings[0]
    setOffset(rect.offsetHeight, rect.offsetTop, true)
  }, [])

  return (
    <Wrapper onScroll={throttle<typeof handleScroll>(handleScroll, 200)}>
      <Nav style={navStyle}></Nav>
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
