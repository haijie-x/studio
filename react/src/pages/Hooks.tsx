import * as React from 'react'
import useEffect from '../hooks/useEffect'
import useState from '../hooks/useState'

export interface IHooksProps {}

// export function Hooks(props: IHooksProps) {
//   const [count, setCount] = useState(0)

//   React.useEffect(() => {
//     setCount(count + 1)
//     // console.log(count)
//   })

//   return <div></div>
// }

function Hooks() {
  for (let i = 0; i < 5; i++) {
    const [count, setCount] = useState(0)
    setCount(count + 1)
    console.log(count)
  }
}
export default Hooks
