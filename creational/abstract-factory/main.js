// Abstract

class AbstractFactory {
  createDevs() {
    return new Devs();
  }

  createTester() {
    return new TestDevs();
  }
}
class Devs {
  constructor(name) {
    this.type = "Web-devoper";
    this.name = name;
  }
}
class TestDevs {
  constructor(name) {
    this.type = "Test Engineer";
    this.name = name;
  }
}

// Concrete #1

class DeveloperFactory extends AbstractCarFactory {
  createDevs(name) {
    return new Developers(name);
  }
  createTester(name) {
    return new TestDeveloper(name);
  }
}

class Developers extends Devs {
  constructor(name) {
    super(name);
  }
}

class TestDeveloper extends TestDevs {
  constructor(name) {
    super(name);
  }
}

const createFActory = (Factory, delovopersName, testerName) => {
  const concreteFactory = new Factory();
  const concreteDevoler = concreteFactory.createDevs(delovopersName);
  const concreteTester = concreteFactory.createTester(testerName);

  console.log(concreteFactory, concreteDevoler, concreteTester);
};
createFActory(DeveloperFactory, "FrontEnd", "QA Engineer");