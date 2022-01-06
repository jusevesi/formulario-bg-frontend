import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-hijos',
  templateUrl: './hijos.component.html',
  styleUrls: ['./hijos.component.scss']
})
export class HijosComponent implements OnInit {
  public formGroup!: FormGroup;
  public listaHijos: any[] = [];
  public listaPersonas: any[] = [];
  public mostrarForm: boolean = false;
  public idPM: number | null = null;
  constructor(private requestService: RequestService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.obtenerHijos();
  }

  public obtenerHijos() {
    console.log(this.activatedRoute);
    this.idPM = this.activatedRoute.snapshot.queryParams['id'];
    if(this.idPM){
      this.requestService.obtenerHijos(this.idPM).then((datos) => {
        console.log(datos)
        this.listaHijos = datos.hijosInfo;
      }).catch(error => {
        console.log(error);
      })
    } 
  }
  
  private buildForm() {
    this.formGroup = this.formBuilder.group({
      hijo: [null]
    });
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

  public agegarSelect(){
    this.buildForm();
    this.mostrarForm = true;
    this.obtenerPersonas();
  }

  public agregarHijo(){
    console.log(this.idPM)
    console.log(this.formGroup.value.hijo)

    this.requestService.agregarHijo({idPM: this.idPM, idHijo: this.formGroup.value.hijo}).then(() => {
      alert('Agregado correctamente');
      this.obtenerHijos();
      this.mostrarForm = false;
    }).catch(error => {
      console.log(error);
    });
  }


}
