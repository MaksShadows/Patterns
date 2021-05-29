class CodeSnippet {

  get snippetLanguage() {
    return this._snippetLanguage;
  }

  get snippetBody() {
    return this._snippetBody;
  }
}


class JavaScriptCodeSnippet extends CodeSnippet {

  constructor(body) {
    super(body);
    this._snippetLanguage = 'JavaScript';
    this._snippetBody = body;
  }
}


class PythonCodeSnippet extends CodeSnippet {

  constructor(body) {
    super(body);
    this._snippetLanguage = 'Python';
    this._snippetBody = body;
  }
}


class CodeParser {

  parseCode(codeSnippet) {
    if (codeSnippet.snippetLanguage !== this._parserLanguage) {
      throw new Error('Incompartible language');
    }

    console.log(`Code of type ${codeSnippet.snippetLanguage} parsed successfuly: ${codeSnippet.snippetBody}`);
  }
}


class JavaScriptCodeParser extends CodeParser {

  constructor() {
    super();
    this._parserLanguage = 'JavaScript';
  }
}


class PythonCodeParser extends CodeParser {

  constructor() {
    super();
    this._parserLanguage = 'Python';
  }
}


class CodeProcessorFactory {
  makeCodeSnippet() {}
  makeCodeParser() {}
}


class JavaScriptCodeProcessorFactory extends CodeProcessorFactory {

  makeCodeSnippet(body) {
    return new JavaScriptCodeSnippet(body);
  }

  makeCodeParser() {
    return new JavaScriptCodeParser();
  }
}


class PythonProcessorFactory extends CodeProcessorFactory {

  makeCodeSnippet(body) {
    return new PythonCodeSnippet(body);
  }

  makeCodeParser() {
    return new PythonCodeParser();
  }
}


// USAGE


// Create JavaScript code processor factory (1)
const jsFactory = new JavaScriptCodeProcessorFactory();
// Create JavaScript code snippet instance from the JS factory
const jsCodeSnippet = jsFactory.makeCodeSnippet('let now = new Date // $now has current date');
// Create JavaScript code parser instance from the JS factory
const jsCodeParser = jsFactory.makeCodeParser();
// Lets check if parser gets valid code snippet (1)
jsCodeParser.parseCode(jsCodeSnippet);
// Create Python code processor factory (1)
const pyFactory = new PythonProcessorFactory();
// Create Python code snippet instance from the Python factory
const pyCodeSnippet = pyFactory.makeCodeSnippet('x = 4 # x is of type int');
// Create Python code parser instance from the Python factory
const pyCodeParser = pyFactory.makeCodeParser();
// Lets check if parser gets valid code snippet (2)
pyCodeParser.parseCode(pyCodeSnippet);







// // Abstract

// class AbstractFactory {
//   createDevs() {
//     return new Devs();
//   }

//   createTester() {
//     return new TestDevs();
//   }
// }
// class Devs {
//   constructor(name) {
//     this.type = "Web-devoper";
//     this.name = name;
//   }
// }
// class TestDevs {
//   constructor(name) {
//     this.type = "Test Engineer";
//     this.name = name;
//   }
// }

// // Concrete #1

// class DeveloperFactory extends AbstractCarFactory {
//   createDevs(name) {
//     return new Developers(name);
//   }
//   createTester(name) {
//     return new TestDeveloper(name);
//   }
// }

// class Developers extends Devs {
//   constructor(name) {
//     super(name);
//   }
// }

// class TestDeveloper extends TestDevs {
//   constructor(name) {
//     super(name);
//   }
// }

// const createFActory = (Factory, delovopersName, testerName) => {
//   const concreteFactory = new Factory();
//   const concreteDevoler = concreteFactory.createDevs(delovopersName);
//   const concreteTester = concreteFactory.createTester(testerName);

//   console.log(concreteFactory, concreteDevoler, concreteTester);
// };
// createFActory(DeveloperFactory, "FrontEnd", "QA Engineer");