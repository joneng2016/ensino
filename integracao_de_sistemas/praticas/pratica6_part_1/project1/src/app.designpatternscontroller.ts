import { Controller, Get } from '@nestjs/common';
import { AppDesignPatternsService } from './app.designpatternsservice'; 

@Controller('/designpatterns')
export class AppDesignPatternsController {
  public constructor(
    private readonly appDesignPatternsService: AppDesignPatternsService,
  ) {}

  @Get('/singleton')
  public singleton(): object {
    return this.appDesignPatternsService.singleton();
  }

  @Get('/factory-method')
  public factoryMethod(): object {
    return this.appDesignPatternsService.factoryMethod();
  }

  @Get('/chain-of-responsability')
  public chainOfResponsability(): object {
    return this.appDesignPatternsService.chainOfResponsability();
  }

  @Get('/state')
  public state(): object {
    return this.appDesignPatternsService.state();
  }

  @Get('/facade')
  public facade(): object {
    return this.appDesignPatternsService.facade();
  }
}
