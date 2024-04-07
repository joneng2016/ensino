export class UserDTO {
  public id: number;
  public name: string;
  public email: string;

  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
  }
}
