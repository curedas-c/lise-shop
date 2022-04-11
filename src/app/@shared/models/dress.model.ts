export class Dress {
  id: string;
  fabric: any;
  name: string;

  constructor(dressModel: any) {
    this.id = dressModel.id || '';
    this.fabric = dressModel.fabric || undefined;
    this.name = dressModel.name || '';
  }
}
