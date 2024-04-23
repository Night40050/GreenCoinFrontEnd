import { Component } from '@angular/core';
import { AlimentosService, AutenticationService } from './api/services';
import { Alimentos } from './api/models/alimentos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public constructor(private api: AlimentosService) {
    this.api.
  }
}
