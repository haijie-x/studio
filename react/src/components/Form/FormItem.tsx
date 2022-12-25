import * as React from 'react'
import { FormContext } from './Form'

export interface IFormProps {
  label: string
  field: string
}

export const FormItem: React.FC<React.PropsWithChildren<IFormProps>> = ({
  children,
  label,
  field,
}: React.PropsWithChildren<IFormProps>) => {
  const [state, setstate] = React.useState('')
  const formContext: any = React.useContext(FormContext)
  const fieldContext = {
    value: state,
    onChange: (e: any) => {
      const val = e.target.value
      setstate(val)
      formContext.form.setFieldVal(field, val)
    },
  }

  React.useEffect(() => {
    console.log('Item组件渲染了!')
    formContext.form.setFieldVal(field, state)
  }, [])

  // const memoChildren = React.useMemo(() => {
  //   if (children) {
  //     return React.cloneElement(children as any, fieldContext)
  //   } else {
  //     return ''
  //   }
  // }, [state])

  return (
    <div>
      <div>
        {label}：{children}
      </div>
    </div>
  )
}
