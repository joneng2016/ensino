import { Creator } from './Creator';
import { Product } from './Product';
import { ConcreteProduct1 } from './ConcreteProduct1';

export class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}
