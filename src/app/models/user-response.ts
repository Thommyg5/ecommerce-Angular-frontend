export default class UserResponse {
  private id: number;
  private email: string;
  private firstName: string;
  private lastName: string;
  private active:boolean;
  private admin:boolean;
  
  constructor(
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    active:boolean,
    admin:boolean
  ) { 
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.active = active;
    this.admin = admin;
  }

  public getID() {
    return this.id;
  }

  public getEmail() {
    return this.email;
  }

  public getFirstName() {
    return this.firstName;
  }

  public getLastName() {
    return this.lastName;
  }

  public getActive() {
    return this.active;
  }

  public getAdmin() {
    return this.admin;
  }

  public setID(id:number) {
    this.id = id;
  }

  public setEmail(email:string) {
    this.email = email;
  }

  public setFirstName(firstName:string) {
    this.firstName = firstName;
  }

  public setLastName(lastName:string) {
    this.lastName = lastName;
  }

  public setActive(active:boolean) {
    this.active = active;
  }

  public setAdmin(admin:boolean) {
    this.admin = admin;
  }
}
