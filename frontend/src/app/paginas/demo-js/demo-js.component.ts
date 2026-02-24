import { AfterViewInit, Component } from '@angular/core';

declare const inicializarFuncionesHistoriaClinica: () => void;

@Component({
  selector: 'app-demo-js',
  standalone: true,
  templateUrl: './demo-js.component.html',
  styleUrl: './demo-js.component.css'
})
export class DemoJsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof inicializarFuncionesHistoriaClinica === 'function') {
      inicializarFuncionesHistoriaClinica();
    }
  }
}
