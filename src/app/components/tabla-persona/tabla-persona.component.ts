import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-tabla-persona',
  templateUrl: './tabla-persona.component.html',
  styleUrls: ['./tabla-persona.component.scss']
})
export class TablaPersonaComponent implements OnInit {


  public listaPersonas: any[] = [];
  
  constructor(private requestService: RequestService ) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  public obtenerPersonas() {
    console.log('entra al metodo obtener');
    this.requestService.obtenerPersonas().then(response => {
      console.log(response)
      this.listaPersonas = response;
    })
      .catch(error => {
        console.log(error);
      })
  }

}
