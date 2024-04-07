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
