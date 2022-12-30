const MAX_EFFECT = 32
let LIMIT = 1

const useEffect: (cb: Function) => any = cb => {
  if (LIMIT === MAX_EFFECT) {
    return
  }
  cb()
  LIMIT = LIMIT << 1
}

export default useEffect
