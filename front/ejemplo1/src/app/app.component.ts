import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo1';

  constructor(private route:Router){}

  Listar(){
    this.route.navigate(["listar"]);
  }

  Nuevo(){
    this.route.navigate(["add"]);
  }
}
