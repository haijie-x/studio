function Foo() {
  this.name = 'xhj'
  this.age = 21
}
Foo.prototype.sayName = function () {
  console.log('my name is:', this.name)
}
Foo.prototype.sayAge = function () {
  console.log('my age is:', this.age)
}

const foo = new Foo()
foo.sayName()
foo.sayAge()
