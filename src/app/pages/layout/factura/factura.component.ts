import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      console.log('Se esta convirtiendo la factutración');

  }

}
