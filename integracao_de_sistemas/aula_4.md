# Aula 4

Padrões de Projetos

Exemplos tirados de: https://refactoring.guru/pt-br/design-patterns
Também serve como material de apoio para essa aula

## Retrospectiva

* Rota GET
* Rota PUT
* Pota DELETE

## Aula de Hoje

* Padrões de Projetos
* Criação
    * Singleton
    * Factory Method
* Comportamental
    * ChainOfResponsability
    * State
* Estrutural
    * Facade

## Criação de Um arquivo de Controller e de Service Novo

Em /src crie app.designpatternsservice.ts

```
import { Injectable } from '@nestjs/common';
i
@Injectable()
export class AppDesignPatternsService {
  public constructor() {}
}
```

Em /src crie app.app.designpatternscontroller.ts


```
import { Controller, Get } from '@nestjs/common';
import { AppDesignPatternsService } from './app.designpatternsservice'; 

@Controller('/designpatterns')
export class AppDesignPatternsController {
  public constructor(
    private readonly appDesignPatternsService: AppDesignPatternsService,
  ) {}
```




Crie o seguinte diretório

/src/designpatterns



## Singleton

Em designepatterns, crie o diretório singleton

Crie o arquivo Service.ts


```
export class Service {
  private static instance: Service;
  public stateOfThisClass: object;

  private constructor() {
    console.log('Service instance created');
  }

  public static getInstance(): Service {
    if (!Service.instance) {
      Service.instance = new Service();
      Service.instance.setState({
        state: 'state',
      });
    }

    return Service.instance;
  }

  public setState(state: object): void {
    this.stateOfThisClass = state;
  }

  public getState(): object {
    return this.stateOfThisClass;
  }

  public executeOperationg(): object {
    return {
      result: 'sucess',
      stateOfThisClass: this.stateOfThisClass
    };
  }
}
```


Em app.designpatternsservice.ts, crie:

```
  public singleton(): object {
    const service1 = Service.getInstance();

    service1.setState({ message: 'I was set in service1' });

    const service2 = Service.getInstance();

    return service2.getState();
  }
```

Na controller, crie:


```
  @Get('/singleton')
  public singleton(): object {
    return this.appDesignPatternsService.singleton();
  }
```


## Factory Method

Crie o diretório: /home/learning/ensino/integracao_de_sistemas/praticas/pratica4/project1/src/designpatterns/factorymethod


```
export interface Product {
  operation(): string;
}
```

```
import { Product } from './Product';

export abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();

    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}
```



Crie o ConcreteProduct1

```
import { Product } from './Product';

export class ConcreteProduct1 implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}
```



Crie o ConcreteProduct2

```
import { Product } from './Product';

export class ConcreteProduct2 implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct2}';
  }
}
```

Crie o ConcreteCreator1

```
import { Creator } from './Creator';
import { Product } from './Product';
import { ConcreteProduct1 } from './ConcreteProduct1';

export class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}
```

Crie o ConcreteCreator2

```
import { Creator } from './Creator';
import { Product } from './Product';
import { ConcreteProduct2 } from './ConcreteProduct2';

export class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}
```


Na service, crie:

```
  private clientCode(creator: Creator): string {
    return creator.someOperation();
  }
```

```
  public factoryMethod(): object {
    return {
      creator1: this.clientCode(new ConcreteCreator1()),
      creator2: this.clientCode(new ConcreteCreator2()),
    };
  }
```

Na controller, crie:

```
  @Get('/factory-method')
  public factoryMethod(): object {
    return this.appDesignPatternsService.factoryMethod();
  }
```



## Chain Of Responsability

Crie um diretório: src/designpatterns/chainofresponsability


Crie um arquivo Handler.ts
```
export interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string;
}
```


Crie o AbstractHandler:

```
import { Handler } from './Handler';

export abstract class AbstractHandler implements Handler {
  private nextHandler: Handler;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}
```


Crie o DogHandler:

```
import { AbstractHandler } from './AbstractHandler';

export class DogHandler extends AbstractHandler {
  public handle(request: string): string {
    if (request === 'MeatBall') {
      return `Dog: I'll eat the $${request}.`;
    }
    return super.handle(request);
  }
}
```

Crie o MonkeyHandler:

```
import { AbstractHandler } from './AbstractHandler';

export class MonkeyHandler extends AbstractHandler {
  public handle(request: string): string {
    if (request === 'Banana') {
      return `Monkey: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}
```

Crie o SquirrelHandler:


```
import { AbstractHandler } from './AbstractHandler';

export class SquirrelHandler extends AbstractHandler {
  public handle(request: string): string {
    if (request === 'Nut') {
      return `Squirrel: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}
```


Crie o serviço:

```
public chainOfResponsability(): object {
  const monkey = new MonkeyHandler();
  const squirrel = new SquirrelHandler();
  const dog = new DogHandler();
  monkey.setNext(squirrel).setNext(dog);
  console.log('Chain: Monkey > Squirrel > Dog\n');
  this.clientCodeChainOfResponsability(monkey);
  console.log('');
  console.log('Subchain: Squirrel > Dog\n');
  this.clientCodeChainOfResponsability(squirrel);
  return {};
}

private clientCodeChainOfResponsability(handler: Handler) {
    const foods = ['Nut', 'Banana', 'Cup of coffee'];

    for (const food of foods) {
      console.log(`Client: Who wants a ${food}?`);

      const result = handler.handle(food);
      if (result) {
        console.log(`  ${result}`);
      } else {
        console.log(`  ${food} was left untouched.`);
      }
    }
  }
```



## State

Crie /src/designpatterns/state


Crie: 

```
import { Context } from './Context';

export abstract class StateDP {
  protected context: Context;

  public setContext(context: Context) {
    this.context = context;
  }

  public abstract handle1(): void;

  public abstract handle2(): void;
}

```


```
import { StateDP } from './StateDP';

export class Context {
  /**
   * @type {State} A reference to the current state of the Context.
   */
  private state: StateDP;

  constructor(state: StateDP) {
    this.transitionTo(state);
  }

  /**
   * The Context allows changing the State object at runtime.
   */
  public transitionTo(state: StateDP): void {
    console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  /**
   * The Context delegates part of its behavior to the current State object.
   */
  public request1(): void {
    this.state.handle1();
  }

  public request2(): void {
    this.state.handle2();
  }
}

```


Crie: 

```
import { StateDP } from './StateDP';
import { ConcreteStateA } from './ConcreteStateA';

export class ConcreteStateB extends StateDP {
  public handle1(): void {
    console.log('ConcreteStateB handles request1.');
    console.log('ConcreteStateB wants to change the state of the context.');
  }

  public handle2(): void {
    console.log('ConcreteStateB handles request2.');
    this.context.transitionTo(new ConcreteStateA());
  }
}
```


```
import { StateDP } from './StateDP';
import { ConcreteStateB } from './ConcreteStateB';

export class ConcreteStateA extends StateDP {
  public handle1(): void {
    console.log('ConcreteStateA handles request1.');
    console.log('ConcreteStateA wants to change the state of the context.');
    this.context.transitionTo(new ConcreteStateB());
  }

  public handle2(): void {
    console.log('ConcreteStateA handles request2.');
  }
}

```

No Service

```
  public state(): object {
    const context = new Context(new ConcreteStateA());
    context.request1();
    context.request2();

    return {};
  }
```

Na Controller:

```

  @Get('/state')
  public state(): object {
    return this.appDesignPatternsService.state();
  }
```


## Facade

Crie: /src/designpatterns/facade/

```
export class Subsystem1 {
  public operation1(): string {
    return 'Subsystem1: Ready!';
  }

  public operationN(): string {
    return 'Subsystem1: Go!';
  }
}
```

```
export class Subsystem2 {
  public operation1(): string {
    return 'Subsystem2: Ready!';
  }

  public operationZ(): string {
    return 'Subsystem2: Go!';
  }
}
```


```
import { Subsystem1 } from './Subsystem1';
import { Subsystem2 } from './Subsystem2';

export class Facade {
  protected subsystem1: Subsystem1;

  protected subsystem2: Subsystem2;

  constructor(subsystem1?: Subsystem1, subsystem2?: Subsystem2) {
    this.subsystem1 = subsystem1 || new Subsystem1();
    this.subsystem2 = subsystem2 || new Subsystem2();
  }

  public operation(): any {
    const result = [];

    result.push('Facade initializes subsystems:');
    result.push(this.subsystem1.operation1());
    result.push(this.subsystem2.operation1());

    result.push('Facade orders subsystems to perform the action:');
    result.push(this.subsystem1.operationN());
    result.push(this.subsystem2.operationZ());

    return result;
  }
}
```


No service

```
  public facade(): object {
    const facade = new Facade(new Subsystem1(), new Subsystem2());

    return { result: facade.operation() };
  }
```

Na Controller

```
  @Get('/facade')
  public facade(): object {
    return this.appDesignPatternsService.facade();
  }
```