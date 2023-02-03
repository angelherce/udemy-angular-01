export class Car{

   public name: string;
   public cv: number;
   public color: string;

   public constructor( _name?: string | null, _cv?: number | null, _color?: string | null ) {
      this.name = _name;
      this.cv = _cv;
      this.color = _color;
   }
}
