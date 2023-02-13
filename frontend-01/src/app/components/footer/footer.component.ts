import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public author: string = 'Ángel Herce Soto';

  public constructor() { }

  public ngOnInit(): void {
    console.log( 'Se ha cargado el componente FooterComponent' );
  }

}
