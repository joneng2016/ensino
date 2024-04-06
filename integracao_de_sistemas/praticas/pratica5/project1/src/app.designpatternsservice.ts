import { Injectable } from '@nestjs/common';
import { Service } from './designpatterns/singleton/Service';
import { Creator } from './designpatterns/factorymethod/Creator';
import { ConcreteCreator1 } from './designpatterns/factorymethod/ConcreteCreator1';
import { ConcreteCreator2 } from './designpatterns/factorymethod/ConcreteCreator2';
import { Handler } from './designpatterns/chainofresponsability/Handler';

import { DogHandler } from './designpatterns/chainofresponsability/DogHandler';
import { MonkeyHandler } from './designpatterns/chainofresponsability/MonkeyHandler';
import { SquirrelHandler } from './designpatterns/chainofresponsability/SquirrelHandler';

import { Context } from './designpatterns/state/Context';
import { ConcreteStateA } from './designpatterns/state/ConcreteStateA';

import { Subsystem1 } from './designpatterns/facade/Subsystem1';
import { Subsystem2 } from './designpatterns/facade/Subsystem2';
import { Facade } from './designpatterns/facade/Facade';

@Injectable()
export class AppDesignPatternsService {
  public constructor() {}

  public singleton(): object {
    const service1 = Service.getInstance();

    service1.setState({ message: 'I was set in service1' });

    const service2 = Service.getInstance();

    return service2.getState();
  }

  public factoryMethod(): object {
    return {
      creator1: this.clientCode(new ConcreteCreator1()),
      creator2: this.clientCode(new ConcreteCreator2()),
    };
  }

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

  public state(): object {
    const context = new Context(new ConcreteStateA());
    context.request1();
    context.request2();

    return {};
  }

  public facade(): object {
    const facade = new Facade(new Subsystem1(), new Subsystem2());

    return { result: facade.operation() };
  }

  private clientCode(creator: Creator): string {
    return creator.someOperation();
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
}
