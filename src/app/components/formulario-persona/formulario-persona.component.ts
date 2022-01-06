import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.scss']
})
export class FormularioPersonaComponent implements OnInit {

  public formGroup!: FormGroup;
  public url!: string;
  public personaActualizar!: any;
  public listaPersonas: any = [];
  public listaMasculina: any[] = [];
  public listaFemenina: any[] = [];
  public selectedChild: number | null = null;

  constructor(private formBuilder: FormBuilder, private requestService: RequestService, private router: Router) { }

  public ngOnInit() {
    this.obtenerPersonas();
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      nacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      papa: [null],
      mama: [null],
      hijo: [null]
    });
  }

  public agregarPersona() {
    console.log('entra al metodo agregar');
    console.log(this.formGroup.value);

    this.requestService.agregarPersona(this.formGroup.value).then(response => {
      if (response.message === "This person already exists") {
        alert("Esta persona ya existe");
      } else {
        alert("Persona Agregada Correctamente");
      }
      this.router.navigate(["/listarPersonas"])
    })

      .catch(error => {
        console.log(error);
      })
  }


  public obtenerPersonas() {
    console.log('entra al metodo obtener');
    this.requestService.obtenerPersonas().then(response => {
      console.log(response)
      this.listaPersonas = response;
      this.listaFemenina = this.listaPersonas.filter((persona: any) => persona.genero === "f");
      this.listaMasculina = this.listaPersonas.filter((persona: any) => persona.genero === "m");
    })
      .catch(error => {
        console.log(error);
      })
  }

  // public addInputHijo(){
  //   const original = document.getElementById("persona");
  //   const nuevo = original?.cloneNode(true);
  //   const destino = document.getElementById("inputHijo");
  //   if(nuevo) destino?.appendChild(nuevo);
  // }

}
