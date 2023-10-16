export default class UnAuthorizedException extends Error {
  public status: number;

  constructor(message: string) {
    super(message || "You are not authorized");

    this.status = 401;
  }
}
