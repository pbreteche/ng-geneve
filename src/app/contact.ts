export class Contact {
  id: number;

  constructor(
    public firstName = '',
    public lastName = '',
    public email = ''
  ) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName.toUpperCase();
  }
}
