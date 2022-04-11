export class Customer {
  id: string;
  firstName: string;
  lastName: string;
  phone: string[];

  constructor(customerModel: any) {
    this.id = customerModel.id || '';
    this.firstName = customerModel.firstName || '';
    this.lastName = customerModel.lastName || '';
    this.phone = customerModel.phone || [];
  }
}
