import { Controller, Get } from '@nestjs/common';
import { UserDTO } from './dtos/UserDTO';

@Controller('/user')
export class AppUserController {
  public constructor() {}

  @Get('/create-elements-api')
  public async createElementsWithFetch() {
    const allResponses = [];

    const responseOne = await fetch('http://localhost:3004/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Usuario1',
        email: 'usuario1@email.com.',
        password: 'senha1',
        document: '000.000.000-00',
        phone: '41911111111',
        address: 'R. Rua 1, numero1',
      }),
    });

    allResponses.push(await responseOne.json());

    const responseTwo = await fetch('http://localhost:3004/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Usuario2',
        email: 'usuario2@email.com.',
        password: 'senha2',
        document: '000.000.000-02',
        phone: '41911111112',
        address: 'R. Rua 2, numero2',
      }),
    });

    allResponses.push(await responseTwo.json());

    const responseThree = await fetch('http://localhost:3004/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Usuario3',
        email: 'usuario3@email.com.',
        password: 'senha3',
        document: '000.000.000-03',
        phone: '41911111113',
        address: 'R. Rua 3, numero3',
      }),
    });

    allResponses.push(await responseThree.json());

    return allResponses;
  }

  @Get('/')
  public async getUsersWithFetch(): Promise<UserDTO[]> {
    const returnOfApi = await fetch('http://localhost:3004/users');
    const users = await returnOfApi.json();

    return users.map((user) => {
      return new UserDTO(user);
    });
  }
}
