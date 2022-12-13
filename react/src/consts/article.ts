export default [
  {
    article:
      'On the first line we have the element, defined with JSX. It isn’t even valid JavaScript, so in order to replace it with vanilla JS, first we need to replace it with valid JS.',
    code: `const element = <h1 title="foo">Hello</h1>`,
  },
  {
    article:
      'React.createElement creates an object from its arguments. Besides some validations, that’s all it does. So we can safely replace the function call with its output.',
    code: `const element = React.createElement(
      "h1",
      { title: "foo" },
      "Hello"
    )`,
  },
  {
    article:
      'And this is what an element is, an object with two properties: type and props (well, it has more, but we only care about these two).',
    code: `const element = {
      type: "h1",
      props: {
        title: "foo",
        children: "Hello",
      },
    }`,
  },
  {
    article:
      'Using textNode instead of setting innerText will allow us to treat all elements in the same way later. Note also how we set the nodeValue like we did it with the h1 title, it’s almost as if the string had props: {nodeValue: "hello"}.',
    code: `const text = document.createTextNode("")
    text["nodeValue"] = element.props.children`,
  },
  {
    article:
      'As we saw in the previous step, an element is an object with type and props. The only thing that our function needs to do is create that object.',
    code: `function createElement(type, props, ...children) {
      return {
        type,
        props: {
          ...props,
          children,
        },
      }
    }`,
  },
]
