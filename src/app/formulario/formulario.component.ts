import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  arreglo = [];
  nombre: string = 'pedro';
  apellido: string = 'perez';
  edad: number = 99;
  es_masculino: boolean = true;
  nombre_completo: string = this.nombre + ' ' + this.apellido;

  usuario: any = {
    nombre: this.nombre,
    apellido: this.apellido,
    edad: this.edad,
    sexo: this.es_masculino,
    nombreEntero: this.nombre_completo
  }

  buttonName: string = 'evniar';
  buttonNames: string[] = ['nombre completo', 'nombre completo en mayusculas', 'mayor a 50', 'es femenino']


  constructor() { }

  ngOnInit(): void {
  }

  actionButton(action: string) {
    if (action == 'nombre completo') {
      alert(this.usuario.nombreEntero);
    } else if (action == 'nombre completo en mayusculas') {
      alert(this.nombre_completo.toUpperCase());
    } else if (action == 'mayor a 50') {
      this.checkEdad(this.edad);
    } else if (action == 'es femenino') {
      this.checkMasculino();
    }
  }

  checkEdad(edad: number) {
    if (edad >= 50) {
      alert('si');
    } else {
      alert('no');
    }
  }

  checkMasculino() {
    if (this.es_masculino == true) {
      alert('no');
    } else {
      alert('si');
    }
  }



}
