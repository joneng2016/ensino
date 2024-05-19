import axios from 'axios';

export default class ProductClient {
  private static instance: ProductClient;
  private client: any;

  private constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3005',
      timeout: 5000,
    });
  }

  public static getInstance() {
    if (ProductClient.instance === undefined) {
      ProductClient.instance = new ProductClient();
    }

    return ProductClient.instance;
  }

  public async find(name: string) {
    const queryString = name ? `?name=${name}` : '';
    const response = await this.client.get(`/products${queryString}`);

    return response.data.length === 0 
      ? { msg: 'No products found' }
      : {
          msg: 'Products found',
          products: response.data.map((product: any) => {
            delete product.createdAt;
            delete product.updatedAt;

            return product;
        }
      )
    };
  }
}
