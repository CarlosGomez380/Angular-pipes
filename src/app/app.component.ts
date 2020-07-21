import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'Wolverine';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  porcentaje= 0.3245;

  salario= 1864000;

  heroe={
    nombre:'Logan',
    clave:'Wolverine',
    edad:500,
    direccion:{
      calle: 'primera',
      casa:2
    }
  }

  valorPromesa= new Promise<string>((resolve)  => {

    setTimeout(() =>{
      resolve('Llego la data');
    }, 3500);
  });

  fecha= new Date();

}
