export class ResponseOfVerifyAndCreateUser {
  public msg: string;
  public user: any;

  public constructor(msg: string, user: any) {
    this.msg = msg;
    this.user = user;
  }
}
