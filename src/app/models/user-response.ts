export default class UserResponse {
  
  constructor(
    public id: number,
    public email: string,
    public firstName: string,
    public lastName: string,
    public active:boolean,
    public admin:boolean
  ) { }
}
