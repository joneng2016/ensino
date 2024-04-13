import axios from 'axios';

export class UserClient {
  private static instance: UserClient;
  private url: string;

  private constructor() {
    this.url = 'http://localhost:3004/users';
  }

  public static getInstance() {
    if (!UserClient.instance) {
      UserClient.instance = new UserClient();
    }

    return UserClient.instance;
  }

  public async get(path) {
    return axios.get(`${this.url}/${path}`);
  }

  public async post(path, data) {
    return axios.post(`${this.url}/${path}`, data);
  }
}
