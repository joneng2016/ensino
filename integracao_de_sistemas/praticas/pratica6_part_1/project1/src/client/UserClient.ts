import axios from 'axios';

export default class UserClient {
  private static instance: UserClient;
  private client: any;

  private constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3005',
      timeout: 5000,
    });
  }

  public static getInstance() {
    if (UserClient.instance === undefined) {
      UserClient.instance = new UserClient();
    }

    return UserClient.instance;
  }

  public async find(name: string) {
    const queryString = name ? `?name=${name}` : '';
    const response = await this.client.get(`/users${queryString}`);

    return response.data.length === 0 
      ? { msg: 'No products found' }
      : {
          msg: 'User found',
          users: response.data.map((user: any) => {
            delete user.createdAt;
            delete user.updatedAt;

            return user;
        }
      )
    };
  }
}
