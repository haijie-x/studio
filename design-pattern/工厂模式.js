function User(name, age, career, work) {
  this.name = name
  this.age = age
  this.career = career
  this.work = work
}

// 简单工厂
function Factory(name, age, career) {
  let work
  switch (career) {
    case 'coder':
      work = ['写代码', '写系分', '修Bug']
      break
    case 'product manager':
      work = ['订会议室', '写PRD', '催更']
      break
    case 'boss':
      work = ['喝茶', '看报', '见客户']
      break
    default:
      break
    // 其它工种的职责分配
  }
  return new User(name, age, career, work)
}

// 抽象工厂模式(Abstract Factory)是以一个超级工厂创建其他工厂。它属于创建型模式。
// 抽象工厂模式是工厂方法模式的升级版本，他用来创建一组相关或者相互依赖的对象。
// 他与工厂方法模式的区别就在于，工厂方法模式针对的是一个产品等级结构；而抽象工厂模式则是针对的多个产品等级结构。

// 特点
// ①一个系统不要求依赖产品实例如何被创建、组合和表达
// ②这个系统有多个系列产品，而系统中只消费其中某一系列产品
// ③系统要求提供一个产品类的库，所有产品以同样的接口出现，客户端不需要依赖具体实现

// 抽象工厂类
class AbstractFactory {
  producePhone() {
    console.error('我不能直接调用，需要被重写！')
  }

  producePC() {
    console.error('我不能直接调用，需要被重写！')
  }
}
// 抽象产品类
class PCFatory {
  productionLine() {
    console.error('我不能直接调用，需要被重写！')
  }
}
class PhoneFatory {
  productionLine() {
    console.error('我不能直接调用，需要被重写！')
  }
}
// 具体产品类
class PC extends PCFatory {
  productionLine() {
    console.log('生产电脑')
  }
}
class Phone extends PhoneFatory {
  productionLine() {
    console.log('生产手机')
  }
}

// 具体工厂类
class NorthFatory extends AbstractFactory {
  producePhone() {
    console.log('我是北方工厂')
    return new Phone()
  }

  producePC() {
    console.log('我是南方工厂')
    return new PC()
  }
}

const north = new NorthFatory()
north.producePC().productionLine()
