import { Controller, Get, Query } from '@nestjs/common';
import { ResponseOfVerifyAndCreateUser } from './dtos/ResponseOfVerifyAndCreateUser';
import { UserDTO } from './dtos/UserDTO';
import axios from 'axios';

@Controller('/user')
export class AppUserController {
  public constructor() {}

  // Criando uma rota para avaliar como se faz para realizar
  // inserts invocando uma outra api utilizando uma função
  // nativa do node js chamada de fetch
  @Get('/create-elements-api')
  public async createElementsWithFetch() {
    // criando um array para armazenar todas as respostas
    const allResponses = [];

    // Utilizando fetch, realizamos uma requisição HTTP de uma api para a outra
    // Observe que no segundo argumento se faz necessário passar um objeto com 
    // as configurações da requisição
    // O header da request precisa ser informade e observe que precisamos
    // especificar no header que o tipo da request é JSON
    // Isso porque o body da request é um json
    // Para além disso, observe também que o body precisa ser convertido 
    // para query string - tornando todo o processo bastante
    // trabalhoso e passível de erros
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

    // Neste momento estamos adicionando a resposta da requesto no array que contem 
    // a resposta de todas as chamadas
    allResponses.push(await responseOne.json());

    // Estamos repetindo o processo anterior, porem para um novo usuário
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

    // Estamos repetindo o processo anterior, porem para um novo usuário
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

    // Temos o retorno das respostas
    return allResponses;
  }

  @Get('/')
  public async getUsersWithFetch(): Promise<UserDTO[]> {
    // Realizamos uma chamada get usando api fetch
    // Observe que no caso do get não precisamos especificar o tipo de request
    const returnOfApi = await fetch('http://localhost:3004/users');
    const users = await returnOfApi.json();

    // Aplicando map, operamos sobre cada elemento do array
    // onde removemos algumas informações sensíveis do usuário
    // Onde não queremos que o usuário tenha acesso 
    return users.map((user) => {
      return new UserDTO(user);
    });
  }

  // A mesma rota get, porém com axios
  // no contexto da rota get não é possível observar
  // a simplificação que o axios gera, contudo
  // libs como axios tornam o processo de requisição HTTP
  // muito mais simples e menos propenso a erros
  @Get('/with-axios')
  public async withAxios(): Promise<object> {
    const response = await axios.get('http://localhost:3004/users');

    return response.data;
  }

  // A mesma rota post, porém com axios
  @Get('/post-with-axios')
  public async postWithAxios(): Promise<object[]> {
    const allResponses = [];

    // Observe como a construção de uma chamada post
    // simplifica o processo de request HTTP
    // Desta vez o tipo de request é especificada pelo método
    // e o body é passado como segundo argumento
    // O axios já infere que a request e o seu respectivo retorno são JSON(s)
    const responseOne = await axios.post('http://localhost:3004/users', {
      name: 'Usuario4',
      email: 'usuario4@email.com.',
      password: 'senha4',
      document: '000.000.000-04',
      phone: '41911111114',
      address: 'R. Rua 4, numero4',
    });

    allResponses.push(responseOne.data);

    // Repetindo a request anterior, porém para um novo usuário  
    const responseTwo = await axios.post('http://localhost:3004/users', {
      name: 'Usuario5',
      email: 'usuario5@email.com.',
      password: 'senha5',
      document: '000.000.000-05',
      phone: '41911111115',
      address: 'R. Rua 5, numero5',
    });

    allResponses.push(responseTwo.data);

    return allResponses;
  }

  // Vamos conceber uma rota que deva receber dados de nome e email
  // e verificar se o usuário existe, caso exista, devemos retornar
  // Caso contrário, devemos criar o usuário
  // Se o email não confere, então devemos retornar o usuário existente
  // Sem exibir a informação de e-mail.
  // Observe como lidamos com a chamada das rotas e como de uma outra api na
  // formulação geral da resposta
  @Get('/verify-and-create-user')
  public async created(
    @Query('email') email: string,
    @Query('name') name: string,
  ) {
    // realizamos uma chamada para a rota get da api de usuários
    const user = await axios.get(`http://localhost:3004/users?name=${name}`);

    // Caso o usuário não exista, criamos um novo usuário
    if (user.data.length == 0) {
      //encapsulamos a resposta em um objeto que contem a mensagem e o usuário
      return this.createWithNotExist(name, email);
    } 
    // caso o usuário existe, verificamos o email - se existe ou não
    else if (user.data[0].email !== email) {
      // removemos a informação de password do usuário
      delete user.data[0].password;

      // formatamos a resposta usando dto
      return new ResponseOfVerifyAndCreateUser(
        'esse usuário existe, mas o email não confere.',
        user.data[0],
      );
    }

    // para o cenário onde o usuário existe e o email confere
    delete user.data[0].password;

    return new ResponseOfVerifyAndCreateUser(
      'esse usuário existe e o email confere.',
      user.data[0],
    );
  }

  // função que cria um novo usuário
  private async createWithNotExist(name: string, email: string) {
    const newUserObject = {
      name,
      email,
      password: 'senha123',
      document: 'nc',
      phone: 'nc',
      address: 'nc',
    };

    // realizamos uma chamada post para a api de usuários
    await axios.post('http://localhost:3004/users', newUserObject);

    // retornamos a resposta encapsulada em um objeto
    return new ResponseOfVerifyAndCreateUser(
      'esse usuário não existe, então foi criado em nossa base de dados - por gentileza: atualize informações como password, documento, telefone e endereço assim que possível.',
      newUserObject,
    );
  }
}
