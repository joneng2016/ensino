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
