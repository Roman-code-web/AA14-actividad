import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
titulo="Actividad 14";
subtitulo="Comunicación entre componentes padre e hijo en Angular";
tituloForm="Registro de Personas";
//variables 
nombre!:string;
dni!:string;
estadocivil="";
RegistroPersona:any=[]=[];
//funcion que envia datos;
enviarDatos(){
this.RegistroPersona=[{'nombre':this.nombre, 'dni':this.dni,'estadocivil':this.estadocivil}];
console.log(this.RegistroPersona);
}
}
