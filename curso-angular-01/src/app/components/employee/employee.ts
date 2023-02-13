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
      private age: number,
      private external: boolean
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

   public setExternal( external: boolean ): void{
      this.external = external;
   }

   public isExternal(): boolean{
      return this.external;
   }

}
