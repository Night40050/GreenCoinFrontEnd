import { AutenticationService } from './api/services/autentication.service';
import { Component } from '@angular/core';
import { AlimentosService, AutenticationService } from './api/services';
import { Alimentos } from './api/models/alimentos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public autentication : AutenticationService;
  public constructor(private api: AutenticationService) {
    this.
  }
}
