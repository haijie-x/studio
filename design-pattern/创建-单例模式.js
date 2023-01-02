class Singleton {
  instance
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}

const case1 = Singleton.getInstance()
const case2 = Singleton.getInstance()
console.log(case1 === case2)
