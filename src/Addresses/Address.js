export class Address {
  constructor() {
    this.firstName = null;
    this.lastName = null;
    this.address1 = null;
    this.address2 = null;
    this.city = null;
    this.state = null;
    this.zipCode = null;
  }

  populateAddress(
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zipCode
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address1 = address1;
    this.address2 = address2;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
  }
}
