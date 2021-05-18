import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  //creo una variable vacia
  lisTarjeta: any[] = [ //creo un objeto
    {titular:'juan peres', numeroTarjeta: '122334', fechaExpiracion:'33/23', cvv:'234'},
    {titular:'andres peres', numeroTarjeta: '2342343', fechaExpiracion:'12/23', cvv:'123'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
