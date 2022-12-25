import React from 'react'
import { Form, FormItem } from '@/components/Form/Form'
import useForm from '@/components/Form/hook/useForm'

type Props = {}

export default function FormTest({}: Props) {
  const form = useForm()

  const handleClick = () => {
    console.log(form.getFormVal())
  }
  return (
    <div>
      <Form form={form}>
        <FormItem field="name" label="姓名">
          <input type="text" />
        </FormItem>
        <FormItem field="age" label="年龄">
          <input type="text" />
        </FormItem>
      </Form>
      <button onClick={handleClick}>Confirm</button>
    </div>
  )
}
