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
  public listaPersonas = [];
  public listaMasculina: any[] = [];
  public listaFemenina: any[] = [];

  constructor(private formBuilder: FormBuilder, private requestService: RequestService) { }

  public ngOnInit() {
    this.obtenerPersonas();
    this.buildForm();
  }

  public nuevoAlert(message: string, type: string) {
    let alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    let wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholder?.append(wrapper)
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      nacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      papa: [null],
      mama: [null]
    });
  }

  public agregarPersona() {
    console.log('entra al metodo agregar');
    console.log(this.formGroup.value);
    this.requestService.agregarPersona(this.formGroup.value).then(response => {
      alert("Persona Agregada Correctamente");
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
  
}
