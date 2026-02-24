import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, BarraLateralComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
