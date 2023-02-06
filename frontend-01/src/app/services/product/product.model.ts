export class Product{
  public id: number;
  public name: string;
  public description: string;
  public price: number;
  public image: string;

  public constructor( _id?: number | null, _name?: string | null, _description?: string | null, _price?: number | null, _image?: string | null ) {
    this.id = _id;
    this.name = _name;
    this.description = _description;
    this.price = _price;
    this.image = _image;
  }

}
