class ListNode {
  val: any
  next: ListNode | null
  constructor(val: any, next: ListNode | null) {
    this.val = val
    this.next = next
  }
}

let stateFiber: any
let cachedSetState: any

const useState = (initailValue: unknown) => {
  if (!stateFiber) {
    stateFiber = new ListNode(initailValue, null)
  } else {
    return [stateFiber.val, cachedSetState]
  }
  const setState = (nextValue: unknown) => {
    stateFiber.next = new ListNode(nextValue, null)
    stateFiber = stateFiber.next
  }

  return [stateFiber.val, (cachedSetState = setState)]
}

export default useState
