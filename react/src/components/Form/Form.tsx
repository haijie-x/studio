import * as React from 'react'
export * from './FormItem'

export interface IFormProps {
  form: any
}

export const FormContext: any = React.createContext({})

export const Form: React.FC<React.PropsWithChildren<IFormProps>> = ({
  children,
  form,
}: React.PropsWithChildren<IFormProps>) => {
  return (
    <FormContext.Provider value={{ form }}>
      <div>{children}</div>
    </FormContext.Provider>
  )
}
