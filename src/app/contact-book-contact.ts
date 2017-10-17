export class ContactBookContact {
  constructor(
    public firstName = '',
    public lastName: string,
    public email: string
  ) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName.toUpperCase();
  }
}
