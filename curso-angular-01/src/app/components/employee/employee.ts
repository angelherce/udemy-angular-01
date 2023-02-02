export class Employee{
   /*
   private name: string;
   private age: number;

   constructor( ) {
      this.name = 'Ángel';
      this.age = 30;
   }
   */

   public constructor(
      private name: string,
      private age: number
   ) {}

   public setName( name: string ): void{
      this.name = name;
   }

   public getName(): string{
      return this.name;
   }

   public setAge( age: number ): void{
      this.age = age;
   }

   public getAge(): number{
      return this.age;
   }

}
