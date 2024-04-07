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
