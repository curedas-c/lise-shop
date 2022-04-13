import { DressSize } from './dress-size.enum';
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

export type CustomerMeasures =
  | {
      sleeveLength: number;
      shoulderLength: number;
      chestLength: number;
      bellyCircumference: number;
      legLength: number;
      pantCircumference: number;
      hipCircumference: number;
      thighCircumference: number;
    }
  | {
      size: DressSize;
    };
