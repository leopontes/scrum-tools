import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  @Input() carta: any;
  @Input() miniatura: boolean;
  @Input() virada: boolean;

  constructor() { 
    this.miniatura = false;
    this.virada = false;
  }

  ngOnInit(): void {
  }

}
