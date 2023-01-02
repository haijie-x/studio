/* _____________ Your Code Here _____________ */

type Trim<S extends string> = S extends
  | `${' ' | '\n' | '\t'}${infer X}${' ' | '\n' | '\t'}`
  | `${' ' | '\n' | '\t'}${infer X}`
  | `${infer X}${' ' | '\n' | '\t'}`
  ? Trim<X>
  : S

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]
