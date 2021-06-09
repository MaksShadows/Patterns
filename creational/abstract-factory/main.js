// Abstract

class AbstractCarFactory {
  createPremiumCar(product) {
    return new AbstractPremiumCar(product);
  }

  createSportCar(product) {
    return new AbstractSportCar(product);
  }
}
class AbstractPremiumCar {
  constructor(model) {
    this.type = 'Premium car';
    this.model = model;
  }
}
class AbstractSportCar {
  constructor(model) {
    this.type = 'Sport car';
    this.model = model;
  }
}

// Concrete #1
class ToyotaFactory extends AbstractCarFactory {
  createPremiumCar(model) {
    return new ToyotaPremiumCar(model);
  }

  createSportCar(model) {
    return new ToyotaSportCar(model);
  }
}
class ToyotaPremiumCar extends AbstractPremiumCar {
  constructor(model) {
    super(model);
  }
}
class ToyotaSportCar extends AbstractSportCar {
  constructor(model) {
    super(model);
  }
}

// Concrete #2
class LexusFactory extends AbstractCarFactory {
  createPremiumCar(model) {
    return new LexusPremiumCar(model);
  }

  createSportCar(model) {
    return new LexusSportCar(model);
  }
}
class LexusPremiumCar extends AbstractPremiumCar {
  constructor(model) {
    super(model);
  }
}
class LexusSportCar extends AbstractSportCar {
  constructor(model) {
    super(model);
  }
}


const createFActory = (Factory, premiumCarName, sportCarName) => {
  const concreteFactory = new Factory();
  const concretePremiumCar = concreteFactory.createPremiumCar(premiumCarName);
  const concreteSportCar = concreteFactory.createSportCar(sportCarName);

  console.log(concreteFactory, concretePremiumCar, concreteSportCar);
};

createFActory(ToyotaFactory, 'Camry', 'Supra');
createFActory(LexusFactory, 'IS', 'LFA');




















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

class DeveloperFactory extends AbstractFactory {
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