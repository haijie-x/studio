function foo() {
  console.log('我是原有的逻辑。')
}
class Decorator {
  originalLogic
  constructor(cb) {
    this.originalLogic = cb
  }

  execute() {
    this.executeOriginalLogic()
    this.executeAdditionalLogic()
  }

  firstLogic() {
    console.log('现有的逻辑一。')
  }

  secondLogic() {
    console.log('现有的逻辑二。')
  }

  executeOriginalLogic() {
    this.originalLogic()
  }

  executeAdditionalLogic() {
    this.firstLogic()
    this.secondLogic()
  }
}

new Decorator(foo).execute()
