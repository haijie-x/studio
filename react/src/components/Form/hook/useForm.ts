const useForm = () => {
  const state: Record<string, any> = {}

  const getFormVal = () => {
    return state
  }

  const getFieldVal = (name: string) => {
    return state[name]
  }

  const setFieldVal = (name: string, value: any) => {
    state[name] = value
  }

  return {
    getFormVal,
    getFieldVal,
    setFieldVal,
  }
}

export default useForm
