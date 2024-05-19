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
